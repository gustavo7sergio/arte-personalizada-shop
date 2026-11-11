import { describe, expect, it } from "vitest";
import {
  PRODUCTION_DEADLINE_ANSWER,
  productPageBySlug,
  productPages,
} from "@/data/productPages";

const FITA_SLUG = "fita-de-cetim-personalizada-rolo-50-metros";

describe("prazo de produção informado nas FAQs", () => {
  it("a fita de cetim informa 8 dias na primeira FAQ", () => {
    const page = productPageBySlug(FITA_SLUG);
    expect(page?.faqs[0].q).toBe("Qual o prazo de produção?");
    expect(page?.faqs[0].a).toContain("8 dias");
    expect(page?.faqs[0].a).not.toContain("5 a 6 dias úteis");
  });

  it("os demais produtos mantêm o prazo padrão do site", () => {
    const others = productPages.filter((p) => p.slug !== FITA_SLUG);
    expect(others.length).toBeGreaterThan(0);
    for (const page of others) {
      expect(page.faqs[0].q).toBe("Qual o prazo de produção?");
      expect(page.faqs[0].a).toBe(PRODUCTION_DEADLINE_ANSWER);
    }
  });
});
