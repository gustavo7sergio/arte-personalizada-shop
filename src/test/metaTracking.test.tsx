import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import MetaTracking from "@/components/MetaTracking";
import { saveConsent } from "@/lib/advertisingConsent";
import { syncPixelConsent } from "@/lib/metaPixel";

function Navigation() {
  const navigate = useNavigate();
  return <>
    <button onClick={() => navigate("/produto/tag-a")}>Same page</button>
    <button onClick={() => navigate("/produto/tag-a#details")}>Anchor</button>
    <button onClick={() => navigate("/produto/tag-b")}>Other product</button>
    <button onClick={() => navigate(-1)}>Back</button>
  </>;
}
const pageViews = () => window.fbq?.queue.filter(args => args.includes("PageView")) ?? [];
const mount = () => render(<MemoryRouter initialEntries={["/produto/tag-a"]}><MetaTracking /><Navigation /></MemoryRouter>);

beforeEach(() => { localStorage.clear(); syncPixelConsent(); });
afterEach(() => { cleanup(); localStorage.clear(); syncPixelConsent(); vi.restoreAllMocks(); });

describe("PageView real navigation", () => {
  it("sends exactly fbq('track', 'PageView') after explicit acceptance", async () => {
    mount();
    expect(pageViews()).toHaveLength(0);
    await act(async () => { saveConsent(true); });
    expect(pageViews()).toEqual([["track", "PageView"]]);
  });

  it("does not repeat PageView for same-page history entries", async () => {
    saveConsent(true); mount();
    await act(async () => {});
    fireEvent.click(screen.getByText("Same page"));
    expect(pageViews()).toHaveLength(1);
  });

  it("does not count an in-page anchor as another page", async () => {
    saveConsent(true); mount();
    await act(async () => {});
    fireEvent.click(screen.getByText("Anchor"));
    expect(pageViews()).toHaveLength(1);
  });

  it("counts each distinct product and a return visit, even in the same second", async () => {
    saveConsent(true); mount();
    await act(async () => {});
    fireEvent.click(screen.getByText("Other product"));
    fireEvent.click(screen.getByText("Back"));
    expect(pageViews()).toHaveLength(3);
  });

  it("blocks undecided and refused visits without replaying prior pages on acceptance", async () => {
    mount();
    fireEvent.click(screen.getByText("Other product"));
    await act(async () => { saveConsent(false); });
    expect(pageViews()).toHaveLength(0);
    await act(async () => { saveConsent(true); });
    expect(pageViews()).toHaveLength(1);
    await act(async () => { saveConsent(true); });
    expect(pageViews()).toHaveLength(1);
  });
});