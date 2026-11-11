import { describe, expect, it } from "vitest";
import { productPageBySlug, productPages } from "@/data/productPages";

const FITA_SLUG = "fita-de-cetim-personalizada-rolo-50-metros";
const HEX = /^#[0-9A-Fa-f]{6}$/;

describe("mostruário de cores da fita de cetim", () => {
  it("mostra exatamente as duas cores de logo: dourado e prata", () => {
    const page = productPageBySlug(FITA_SLUG);
    expect(page?.logoColorOptions?.map((c) => c.name)).toEqual(["Dourado", "Prata"]);
  });

  it("cada cor de logo é sólida e igual à amostra do cartaz oficial", () => {
    const page = productPageBySlug(FITA_SLUG);
    const colors = page?.logoColorOptions ?? [];
    expect(colors.map((c) => c.hex)).toEqual(["#D0AB67", "#AAABAF"]);
    for (const color of colors) {
      expect(color.hex).toMatch(HEX);
      expect("gradient" in color).toBe(false);
    }
  });

  it("mantém as 15 cores de fita do mostruário", () => {
    const page = productPageBySlug(FITA_SLUG);
    const names = page?.colorOptions?.map((c) => c.name) ?? [];
    expect(names).toHaveLength(15);
    expect(names[0]).toBe("Amarelo");
    expect(names[names.length - 1]).toBe("Vermelho");
  });
});

describe("integridade das amostras de cor", () => {
  it("toda cor cadastrada tem nome e hex válido", () => {
    const options = productPages.flatMap((p) => [
      ...(p.colorOptions ?? []),
      ...(p.logoColorOptions ?? []),
    ]);
    expect(options.length).toBeGreaterThan(0);
    for (const color of options) {
      expect(color.name.trim().length).toBeGreaterThan(0);
      expect(color.hex).toMatch(HEX);
    }
  });
});
