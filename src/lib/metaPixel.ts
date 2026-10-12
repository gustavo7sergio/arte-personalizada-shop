import { advertisingAllowed } from "./advertisingConsent";
import type { CartItem } from "@/contexts/cartState";

export const META_PIXEL_ID = "303131834616940";
type PixelEvent = "PageView" | "ViewContent" | "AddToCart" | "WhatsAppQuoteClick";
type Params = Record<string, unknown>;
interface PixelFunction {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: PixelFunction;
  loaded: boolean;
  version: string;
}
declare global {
  interface Window { fbq?: PixelFunction; _fbq?: PixelFunction; }
}
let initialized = false;

// The Pixel reports its own page/referrer URLs. Do not run it on URLs that could contain customer data.
export function safeTrackingUrl(raw: string): boolean {
  try {
    const url = new URL(raw, window.location.origin);
    const allowed = /^(utm_(source|medium|campaign|term|content|id)|fbclid|gclid)$/;
    return [...url.searchParams.keys()].every((key) => allowed.test(key)) &&
      !/@|%40|%2b|\b\d{10,}\b/i.test(url.pathname + url.hash) &&
      [...url.searchParams.values()].every((value) => !/@|%40/.test(value));
  } catch { return false; }
}

function canSend(): boolean {
  return advertisingAllowed() && safeTrackingUrl(window.location.href) &&
    (!document.referrer || safeTrackingUrl(document.referrer));
}

function pixel(): PixelFunction | undefined {
  if (!canSend()) return;
  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (!canSend()) return;
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    } as PixelFunction;
    fbq.queue = [];
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
    window._fbq = fbq;
  }
  if (!initialized) {
    window.fbq("consent", "grant");
    window.fbq("set", "autoConfig", false, META_PIXEL_ID);
    window.fbq("init", META_PIXEL_ID); // No advanced matching/customer identifiers.
    for (const plugin of ["InferredEvents", "AutomaticMatching", "AutomaticMatchingForPartnerIntegrations", "MicrodataFieldTransmission", "IWLBootstrapper"]) {
      window.fbq("optOut", META_PIXEL_ID, plugin);
    }
    initialized = true;
  } else window.fbq("consent", "grant");
  if (!document.getElementById("gs-meta-pixel")) {
    const script = document.createElement("script");
    script.id = "gs-meta-pixel";
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
  return window.fbq;
}

export function syncPixelConsent(): void {
  if (canSend()) return;
  if (window.fbq) {
    // Revoke the loaded library directly; the consent gate would otherwise block this command.
    window.fbq.callMethod?.("consent", "revoke");
    window.fbq.queue.length = 0;
  }
  const script = document.getElementById("gs-meta-pixel");
  if (!window.fbq?.callMethod) {
    script?.remove();
    delete window.fbq;
    delete window._fbq;
    initialized = false;
  }
  for (const name of ["_fbp", "_fbc"]) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    const parts = location.hostname.split(".");
    for (let i = 0; i < parts.length - 1; i++) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${parts.slice(i).join(".")}`;
    }
  }
}

export function trackMetaEvent(event: PixelEvent, params: Params = {}): boolean {
  const fbq = pixel();
  if (!fbq) return false;
  fbq(event === "WhatsAppQuoteClick" ? "trackSingleCustom" : "trackSingle", META_PIXEL_ID, event, params);
  return true;
}

export function cartEventParams(items: CartItem[]): Params {
  return {
    content_type: "product",
    content_ids: items.map((item) => item.productId),
    contents: items.map((item) => ({
      id: item.productId, quantity: item.qty,
      ...(item.qty > 0 && item.cashPrice > 0 ? { item_price: item.cashPrice / item.qty } : {}),
    })),
    num_items: items.reduce((sum, item) => sum + item.qty, 0),
    ...(items.every((item) => item.cashPrice > 0) && items.length > 0
      ? { value: Number(items.reduce((sum, item) => sum + item.cashPrice, 0).toFixed(2)), currency: "BRL" } : {}),
  };
}

export function trackCartAddition(item: CartItem): void {
  trackMetaEvent("AddToCart", { ...cartEventParams([item]), content_name: item.productName });
}

export function trackCartQuote(items: CartItem[]): void {
  if (items.length === 0) return;
  trackMetaEvent("WhatsAppQuoteClick", { ...cartEventParams(items), quote_source: "cart", destination: "whatsapp" });
}

export function trackWhatsAppLink(event: MouseEvent): void {
  if (event.type === "auxclick" && event.button !== 1) return;
  const target = event.target instanceof Element ? event.target.closest("a[href]") : null;
  if (!(target instanceof HTMLAnchorElement)) return;
  const url = new URL(target.href);
  if (!["wa.me", "api.whatsapp.com", "web.whatsapp.com"].includes(url.hostname)) return;
  // Never send the destination URL, phone number, message or link text.
  const source = target.closest("footer") ? "footer" : target.closest("header, nav") ? "navigation" : "page";
  trackMetaEvent("WhatsAppQuoteClick", { quote_source: source, destination: "whatsapp" });
}