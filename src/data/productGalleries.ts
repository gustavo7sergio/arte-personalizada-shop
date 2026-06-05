// Galerias de imagens extras por slug de produto.
// A imagem PRINCIPAL (capa) continua vindo de productImages.ts (mockup).
// Aqui ficam as imagens secundárias: medidas, frente/verso, fotos reais, detalhes e uso.
//
// Ordem visual recomendada na ProductPage:
//   1. Mockup principal (vem do productImages — definido automaticamente)
//   2. Versão com medidas
//   3. Frente e verso
//   4+ Fotos reais / detalhes / uso
//
// Nunca colocar a imagem com medidas como 1ª (capa).

import cartaoAgradGMed from "@/assets/products/measures/cartao-de-agradecimento-personalizado-8-8x9-94-cm.jpg";
import adesivo33Med from "@/assets/products/measures/adesivo-redondo-personalizado--3-3cm.jpg";
import adesivo48Med from "@/assets/products/measures/adesivo-redondo-personalizado--4-8cm.jpg";
import adesFechaCoucheMed from "@/assets/products/measures/adesivo-fecha-sacola-personalizado-couche-10x4-cm.jpg";
import adesFechaSulfiteMed from "@/assets/products/measures/adesivo-fecha-sacola-personalizado-sulfite-10x5-cm.jpg";
import adesivoAnelMed from "@/assets/products/measures/adesivo-personalizado-para-anel-7x1-7-cm.jpg";
import blocoPedidosMed from "@/assets/products/measures/bloco-de-pedidos-personalizado-15x10-cm.jpg";
import caixinhaMMed from "@/assets/products/measures/caixinha-personalizada-para-acessorios-8-3x8-3x5-cm.jpg";
import caixinhaMaletaMed from "@/assets/products/measures/caixinha-personalizada-maleta-4-4x7-3x5-6-cm.jpg";
import caixinhaPMed from "@/assets/products/measures/caixinha-personalizada-para-acessorios-6-3x6-3x3-cm.jpg";

export type GalleryImageType = "mockup" | "measurement" | "front-back" | "photo" | "detail";

export interface GalleryImage {
  src: string;
  type: GalleryImageType;
  alt?: string; // se omitido, gerado a partir do nome do produto
}

// Imagens secundárias por slug do produto (slug da ProductPage).
export const productGalleryExtras: Record<string, GalleryImage[]> = {
  "cartao-de-agradecimento-personalizado-8-8x9-94-cm": [
    { src: cartaoAgradGMed, type: "measurement" },
  ],
  "adesivo-redondo-personalizado": [
    { src: adesivo33Med, type: "measurement", alt: "Adesivo redondo personalizado 3,3 cm com medidas" },
    { src: adesivo48Med, type: "measurement", alt: "Adesivo redondo personalizado 4,8 cm com medidas" },
  ],
  "adesivo-fecha-sacola-personalizado-couche-10x4-cm": [
    { src: adesFechaCoucheMed, type: "measurement" },
  ],
  "adesivo-fecha-sacola-personalizado-sulfite-10x5-cm": [
    { src: adesFechaSulfiteMed, type: "measurement" },
  ],
  "adesivo-personalizado-para-anel-7x1-7-cm": [
    { src: adesivoAnelMed, type: "measurement" },
  ],
  "bloco-de-pedidos-personalizado-15x10-cm": [
    { src: blocoPedidosMed, type: "measurement" },
  ],
  "caixinha-personalizada-para-acessorios-8-3x8-3x5-cm": [
    { src: caixinhaMMed, type: "measurement" },
  ],
  "caixinha-personalizada-maleta-4-4x7-3x5-6-cm": [
    { src: caixinhaMaletaMed, type: "measurement" },
  ],
  "caixinha-personalizada-para-acessorios-6-3x6-3x3-cm": [
    { src: caixinhaPMed, type: "measurement" },
  ],
};

// Gera alt text automático para uma imagem da galeria
export function buildAltText(displayName: string, type: GalleryImageType, suffix?: string): string {
  const base = displayName.replace(/×/g, "x");
  const tail = suffix ? ` — ${suffix}` : "";
  switch (type) {
    case "mockup":      return `${base} para semijoias`;
    case "measurement": return `${base} — versão com medidas${tail}`;
    case "front-back":  return `${base} — frente e verso${tail}`;
    case "detail":      return `${base} — detalhes do acabamento${tail}`;
    case "photo":       return `${base} — foto real do produto${tail}`;
    default:            return base;
  }
}

// Retorna a galeria completa para uma página de produto, na ordem correta:
// [mockups (capa primeiro)] + [extras: medidas → frente/verso → fotos → detalhes]
export function buildGallery(
  slug: string,
  mockups: string[],
  displayName: string,
): { src: string; alt: string }[] {
  const extras = productGalleryExtras[slug] ?? [];
  const order: Record<GalleryImageType, number> = {
    mockup: 0, measurement: 1, "front-back": 2, photo: 3, detail: 4,
  };
  const sortedExtras = [...extras].sort((a, b) => order[a.type] - order[b.type]);

  const mockupItems = mockups.map((src) => ({
    src,
    alt: buildAltText(displayName, "mockup"),
  }));
  const extraItems = sortedExtras.map((img) => ({
    src: img.src,
    alt: img.alt ?? buildAltText(displayName, img.type),
  }));
  return [...mockupItems, ...extraItems];
}
