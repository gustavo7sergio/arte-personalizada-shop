import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import CriacaoLogo from "@/pages/CriacaoLogo";
import { CartProvider } from "@/contexts/CartContext";

if (!("IntersectionObserver" in globalThis)) {
  (globalThis as Record<string, unknown>).IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
}

function renderPage() {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <CartProvider>
          <CriacaoLogo />
        </CartProvider>
      </MemoryRouter>
    </HelmetProvider>,
  );
}

describe("preços dos pacotes de criação de logo", () => {
  it("Pacote Essencial custa R$699 a prazo, com 6x de R$116,50 e PIX de R$629,10", () => {
    renderPage();
    const card = screen.getByText("Pacote Essencial").closest("div") as HTMLElement;
    expect(card.textContent).toContain("6x de R$116,50");
    expect(card.textContent).toContain("(R$699,00)");
    expect(card.textContent).toContain("R$629,10 à vista no Pix");
  });

  it("Pacote Completo custa R$759 a prazo, com 6x de R$126,50 e PIX de R$683,10", () => {
    renderPage();
    const card = screen.getByText("Pacote Completo").closest("div") as HTMLElement;
    expect(card.textContent).toContain("6x de R$126,50");
    expect(card.textContent).toContain("(R$759,00)");
    expect(card.textContent).toContain("R$683,10 à vista no Pix");
  });

  it("o valor à vista no PIX é exatamente 10% menor que o valor a prazo", () => {
    const cases = [
      { prazo: 699, pix: 629.1 },
      { prazo: 759, pix: 683.1 },
    ];
    for (const { prazo, pix } of cases) {
      expect(Math.round(prazo * 0.9 * 100) / 100).toBe(pix);
    }
  });

  it("os preços antigos não aparecem mais na página", () => {
    const { container } = renderPage();
    const text = container.textContent ?? "";
    for (const old of ["R$59,83", "R$66,50", "R$323,10", "R$359,10", "(R$359,00)", "(R$399,00)"]) {
      expect(text).not.toContain(old);
    }
  });
});
