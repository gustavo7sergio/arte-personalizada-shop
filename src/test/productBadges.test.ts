import { describe, expect, it } from "vitest";
import {
  BEST_VALUE_PRODUCT_IDS,
  getProductBadges,
  getBadgesForProductIds,
} from "@/data/productBadges";

// Os quatro produtos que já tiveram o selo "✨ Lançamento".
const FORMER_LAUNCH_IDS = [
  "sacola-acessorios-21x15x7",
  "sacola-acessorios-12x12x6",
  "ecobag-30x30",
  "embalagem-almofada",
];

describe("selo de lançamento removido", () => {
  it.each(FORMER_LAUNCH_IDS)("não mostra nenhum selo em %s", (id) => {
    expect(getProductBadges(id)).toEqual([]);
  });

  it("não mostra selo de lançamento ao agrupar os quatro produtos", () => {
    expect(getBadgesForProductIds(FORMER_LAUNCH_IDS)).toEqual([]);
  });
});

describe("demais selos preservados", () => {
  it("mantém 'Mais vendido' e 'Melhor custo-benefício' juntos, nessa ordem", () => {
    expect(getProductBadges("mini-tag-brincos-p")).toEqual(["best-seller", "best-value"]);
  });

  it("mantém 'Mais vendido' sozinho", () => {
    expect(getProductBadges("tag-brincos-p")).toEqual(["best-seller"]);
  });

  it("mantém 'Melhor custo-benefício' sozinho", () => {
    expect(getProductBadges("kit-6000-materiais-g")).toEqual(["best-value"]);
  });

  it("manteve a lista de custo-benefício intacta", () => {
    expect(BEST_VALUE_PRODUCT_IDS).toContain("kit-6000-materiais-g");
    expect(BEST_VALUE_PRODUCT_IDS).toHaveLength(15);
  });
});
