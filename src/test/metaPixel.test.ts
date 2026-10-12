import { beforeEach, describe, expect, it, vi } from "vitest";
import { advertisingAllowed, CONSENT_KEY, CONSENT_NOTICE, CONSENT_SUMMARY, readConsent, saveConsent, resolveAdvertisingRegion } from "@/lib/advertisingConsent";
import { cartEventParams, META_PIXEL_ID, safeTrackingUrl, syncPixelConsent, trackCartAddition, trackCartQuote, trackMetaEvent, trackWhatsAppLink } from "@/lib/metaPixel";
import type { CartItem } from "@/contexts/CartContext";

const item: CartItem = { productId: "tag-6x6", productName: "Tag personalizada", variantLabel: "6x6 cm", qty: 100, cashPrice: 90, installmentPrice: 100 };
beforeEach(() => {
  localStorage.clear();
  syncPixelConsent();
  vi.restoreAllMocks();
});

describe("GS Cartões Meta consent and events", () => {
  it("uses the user's existing Pixel ID", () => { expect(META_PIXEL_ID).toBe("303131834616940"); });
  it("requires explicit marketing consent even outside regulated regions", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, text: async () => "loc=US" }));
    await resolveAdvertisingRegion();
    expect(advertisingAllowed()).toBe(false);
    expect(trackMetaEvent("ViewContent")).toBe(false);
    saveConsent(true);
    expect(advertisingAllowed()).toBe(true);
    vi.unstubAllGlobals();
  });
  it("blocks all Meta events and script loading before advertising acceptance", () => {
    expect(advertisingAllowed()).toBe(false);
    expect(trackMetaEvent("PageView")).toBe(false);
    expect(document.getElementById("gs-meta-pixel")).toBeNull();
  });
  it("shows the exact marketing notice and keeps refusal blocking every Meta event", () => {
    expect(CONSENT_SUMMARY).toBe("Utilizamos recursos essenciais para o funcionamento do site e do carrinho. Com sua autorização, usamos cookies de marketing para entender quais produtos despertam interesse e melhorar nossos anúncios.");
    saveConsent(false);
    expect(readConsent()?.decisions[0].bannerNotice).toBe(CONSENT_SUMMARY);
    expect(advertisingAllowed()).toBe(false);
    expect(trackMetaEvent("PageView")).toBe(false);
    trackCartAddition(item);
    expect(window.fbq).toBeUndefined();
    expect(document.getElementById("gs-meta-pixel")).toBeNull();
  });
  it("records acceptance evidence and preserves it after withdrawal", () => {
    saveConsent(true); saveConsent(false);
    const record = readConsent();
    expect(record?.visitorId).toBeTruthy();
    expect(record?.decisions.map((d) => d.advertising)).toEqual([true, false]);
    expect(record?.decisions[0].notice).toBe(CONSENT_NOTICE);
    expect(Date.parse(record?.decisions[0].at ?? "")).not.toBeNaN();
    expect(advertisingAllowed()).toBe(false);
  });
  it("loads one pixel and reports the named standard events only", () => {
    saveConsent(true);
    trackMetaEvent("PageView"); trackMetaEvent("ViewContent", { content_ids: ["tag-6x6"] }); trackCartAddition(item);
    expect(document.querySelectorAll("#gs-meta-pixel")).toHaveLength(1);
    const queue = window.fbq?.queue ?? [];
    expect(queue.filter((args) => args[0] === "init")).toEqual([["init", "303131834616940"]]);
    expect(queue.filter((args) => args[0] === "trackSingle").map((args) => args[2])).toEqual(["PageView", "ViewContent", "AddToCart"]);
  });
  it("reports actual cart quantity and PIX value without inflating the total", () => {
    expect(cartEventParams([item])).toEqual({ content_type: "product", content_ids: ["tag-6x6"], contents: [{ id: "tag-6x6", quantity: 100, item_price: 0.9 }], num_items: 100, value: 90, currency: "BRL" });
  });
  it("does not invent monetary values for quote-only products", () => {
    expect(cartEventParams([{ ...item, cashPrice: 0 }])).not.toHaveProperty("value");
  });
  it("reports complete cart WhatsApp as a custom quote click, not Purchase or Lead", () => {
    saveConsent(true); trackCartQuote([item]);
    const events = window.fbq?.queue.filter((args) => args[0] === "trackSingleCustom") ?? [];
    expect(events).toHaveLength(1);
    expect(events[0][2]).toBe("WhatsAppQuoteClick");
    expect(events[0][3]).toMatchObject({ quote_source: "cart", value: 90, num_items: 100 });
    expect(window.fbq?.queue.some((args) => args.includes("Purchase") || args.includes("Lead"))).toBe(false);
  });
  it("reports one WhatsApp link click without sharing its message or phone number", () => {
    saveConsent(true);
    const anchor = document.createElement("a"); anchor.href = "https://wa.me/553584181096?text=private";
    document.body.appendChild(anchor);
    const event = new MouseEvent("click", { bubbles: true, cancelable: true });
    anchor.addEventListener("click", trackWhatsAppLink); anchor.addEventListener("click", (e) => e.preventDefault());
    anchor.dispatchEvent(event); anchor.remove();
    const events = window.fbq?.queue.filter((args) => args[2] === "WhatsAppQuoteClick") ?? [];
    expect(events).toHaveLength(1);
    expect(events[0][3]).toEqual({ quote_source: "page", destination: "whatsapp" });
  });
  it("withdrawal clears queued events and blocks later additions without replay", () => {
    saveConsent(true); trackCartAddition(item);
    saveConsent(false); syncPixelConsent(); trackCartAddition(item);
    expect(window.fbq).toBeUndefined();
    saveConsent(true); trackMetaEvent("PageView");
    expect(window.fbq?.queue.some((args) => args[2] === "AddToCart")).toBe(false);
  });
  it("revokes the loaded Meta library when consent is withdrawn", () => {
    saveConsent(true); trackMetaEvent("PageView");
    const library = window.fbq;
    if (!library) throw new Error("Pixel not initialized");
    const callMethod = vi.fn(); library.callMethod = callMethod;
    saveConsent(false); syncPixelConsent();
    expect(callMethod).toHaveBeenCalledWith("consent", "revoke");
    callMethod.mockClear(); trackCartAddition(item);
    expect(callMethod).not.toHaveBeenCalled();
    delete library.callMethod; syncPixelConsent();
  });
  it("disables automatic matching and inferred events", () => {
    saveConsent(true); trackMetaEvent("PageView");
    expect(window.fbq?.queue).toContainEqual(["optOut", META_PIXEL_ID, "InferredEvents"]);
    expect(window.fbq?.queue).toContainEqual(["optOut", META_PIXEL_ID, "AutomaticMatching"]);
    expect(window.fbq?.queue).toContainEqual(["set", "autoConfig", false, META_PIXEL_ID]);
  });
  it("reads refusal fresh from another tab before sending", () => {
    saveConsent(true); trackMetaEvent("PageView");
    const record = readConsent();
    if (!record) throw new Error("Missing consent");
    record.decisions[0].advertising = false;
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
    expect(trackMetaEvent("AddToCart")).toBe(false);
  });
  it("blocks potentially sensitive customer URLs", () => {
    expect(safeTrackingUrl("/produto/tag?email=cliente@example.com")).toBe(false);
    expect(safeTrackingUrl("/produto/tag?utm_source=facebook&fbclid=abc")).toBe(true);
  });
});