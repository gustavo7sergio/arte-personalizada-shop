import { afterEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { CartProvider, useCart } from "@/contexts/CartContext";
import { CartContext } from "@/contexts/cartState";
import { useContext } from "react";
import { advertisingAllowed, saveConsent } from "@/lib/advertisingConsent";

vi.mock("@/lib/metaPixel", () => ({ trackCartAddition: vi.fn() }));
afterEach(() => { cleanup(); localStorage.clear(); });

function Consumer() {
  const cart = useCart();
  const sharedContext = useContext(CartContext);
  return <>
    <output aria-label="shared context">{String(cart === sharedContext)}</output>
    <output aria-label="cart count">{cart.items.length}</output>
    <output aria-label="cart total">{cart.totalCash}</output>
    <output aria-label="cart open">{String(cart.isOpen)}</output>
    <button onClick={() => cart.addItem({ productId: "tag", productName: "Tag", variantLabel: "6x6", qty: 100, cashPrice: 90, installmentPrice: 100 })}>Add</button>
  </>;
}

it("provider and consumers use the same stable context and retain working cart actions", () => {
  render(<CartProvider><Consumer /></CartProvider>);
  expect(screen.getByLabelText("shared context")).toHaveTextContent("true");
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByLabelText("cart count")).toHaveTextContent("1");
  expect(screen.getByLabelText("cart total")).toHaveTextContent("90");
  expect(screen.getByLabelText("cart open")).toHaveTextContent("true");
  expect(JSON.parse(localStorage.getItem("gs-cart") ?? "[]")).toHaveLength(1);
});

it("keeps the cart working when marketing cookies are refused", () => {
  saveConsent(false);
  render(<CartProvider><Consumer /></CartProvider>);
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByLabelText("cart count")).toHaveTextContent("1");
  expect(screen.getByLabelText("cart total")).toHaveTextContent("90");
  expect(screen.getByLabelText("cart open")).toHaveTextContent("true");
  expect(JSON.parse(localStorage.getItem("gs-cart") ?? "[]")).toHaveLength(1);
  expect(advertisingAllowed()).toBe(false);
});