import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import CookieConsent from "@/components/CookieConsent";
import { advertisingAllowed, CONSENT_KEY, OPEN_COOKIE_SETTINGS, readConsent, saveConsent } from "@/lib/advertisingConsent";
import { trackMetaEvent } from "@/lib/metaPixel";

// Even a stalled readiness hook must never delay or dismiss an undecided notice.
vi.mock("@/lib/advertisingConsent", async (importOriginal) => ({
  ...await importOriginal<typeof import("@/lib/advertisingConsent")>(),
  resolveAdvertisingRegion: () => new Promise<void>(() => {}),
}));

beforeEach(() => { localStorage.clear(); });
afterEach(() => { cleanup(); vi.useRealTimers(); localStorage.clear(); vi.restoreAllMocks(); });
const notice = () => screen.queryByRole("region", { name: "Consentimento de cookies" });

function NavigateProducts() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/produto/kit-completo-de-tags-2")}>Next product</button>;
}

describe("explicit cookie decisions", () => {
  it("shows immediately and stays undecided after more than five seconds", () => {
    vi.useFakeTimers();
    render(<CookieConsent />);
    expect(notice()).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(30_000));
    expect(notice()).toBeInTheDocument();
    expect(readConsent()).toBeNull();
    expect(advertisingAllowed()).toBe(false);
    expect(trackMetaEvent("PageView")).toBe(false);
    expect(trackMetaEvent("ViewContent")).toBe(false);
    expect(trackMetaEvent("AddToCart")).toBe(false);
    expect(trackMetaEvent("WhatsAppQuoteClick")).toBe(false);
  });

  it("does not dismiss on scrolling or navigation between products", () => {
    render(<MemoryRouter initialEntries={["/produto/kit-completo-de-tags-1"]}><CookieConsent /><NavigateProducts /></MemoryRouter>);
    fireEvent.scroll(window);
    fireEvent.click(screen.getByText("Next product"));
    expect(notice()).toBeInTheDocument();
    expect(readConsent()).toBeNull();
    expect(advertisingAllowed()).toBe(false);
  });

  it.each([["Aceitar", true], ["Recusar", false]] as const)("persists %s across visits", (label, accepted) => {
    const firstVisit = render(<CookieConsent />);
    fireEvent.click(screen.getByRole("button", { name: label }));
    expect(notice()).not.toBeInTheDocument();
    expect(readConsent()?.decisions.at(-1)?.advertising).toBe(accepted);
    expect(advertisingAllowed()).toBe(accepted);
    firstVisit.unmount();
    render(<CookieConsent />);
    expect(notice()).not.toBeInTheDocument();
    expect(advertisingAllowed()).toBe(accepted);
  });

  it("closing customization without saving restores the undecided notice", () => {
    render(<CookieConsent />);
    fireEvent.click(screen.getByRole("button", { name: "Personalizar" }));
    expect(readConsent()).toBeNull();
    expect(advertisingAllowed()).toBe(false);
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
    expect(notice()).toBeInTheDocument();
    expect(readConsent()).toBeNull();
  });

  it("allows withdrawal through the footer settings action", () => {
    saveConsent(true);
    render(<CookieConsent />);
    act(() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS)));
    fireEvent.click(screen.getByRole("button", { name: "Recusar" }));
    expect(readConsent()?.decisions.map(d => d.advertising)).toEqual([true, false]);
    expect(advertisingAllowed()).toBe(false);
    expect(notice()).not.toBeInTheDocument();
  });

  it("keeps the prompt and blocks marketing when a choice cannot be stored", () => {
    render(<CookieConsent />);
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("Storage unavailable"); });
    fireEvent.click(screen.getByRole("button", { name: "Aceitar" }));
    expect(notice()).toBeInTheDocument();
    expect(advertisingAllowed()).toBe(false);
  });

  it("restores the notice when another tab clears the decision", () => {
    saveConsent(false);
    render(<CookieConsent />);
    localStorage.removeItem(CONSENT_KEY);
    act(() => window.dispatchEvent(new StorageEvent("storage", { key: CONSENT_KEY })));
    expect(notice()).toBeInTheDocument();
    expect(advertisingAllowed()).toBe(false);
  });
});