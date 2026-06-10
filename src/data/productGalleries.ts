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
import adesivo48Foto from "@/assets/products/photos/adesivo-redondo-personalizado-4-8x4-8-cm-foto.jpg";
import blocoPedidosFoto2 from "@/assets/products/photos/bloco-de-pedidos-15x10-cm-foto-2.jpg";
import blocoPedidosFoto3 from "@/assets/products/photos/bloco-de-pedidos-15x10-cm-foto-3.jpg";
import caixinhaPFoto2 from "@/assets/products/photos/caixinha-p-6-3x6-3x3-foto-2.jpg";
import caixinhaPFoto3 from "@/assets/products/photos/caixinha-p-6-3x6-3x3-foto-3.jpg";
import caixinhaPFoto4 from "@/assets/products/photos/caixinha-p-6-3x6-3x3-foto-4.jpg";
import caixinhaMFoto2 from "@/assets/products/photos/caixinha-m-8-3x8-3x5-foto-2.jpg";
import caixinhaMFoto3 from "@/assets/products/photos/caixinha-m-8-3x8-3x5-foto-3.jpg";
import caixinhaMaletaFoto2 from "@/assets/products/photos/caixinha-maleta-foto-2.jpg";
import caixinhaMaletaFoto3 from "@/assets/products/photos/caixinha-maleta-foto-3.jpg";
import caixinhaMaletaFoto4 from "@/assets/products/photos/caixinha-maleta-foto-4.jpg";
import caixinhaMaletaFoto5 from "@/assets/products/photos/caixinha-maleta-foto-5.jpg";
import adesivo33Foto2 from "@/assets/products/photos/adesivo-redondo-3-3cm-foto-2.jpg";
import adesivo33Foto3 from "@/assets/products/photos/adesivo-redondo-3-3cm-foto-3.jpg";
import adesivo48Foto2 from "@/assets/products/photos/adesivo-redondo-4-8x4-8cm-foto-2.jpg";
import adesivo48Foto3 from "@/assets/products/photos/adesivo-redondo-4-8x4-8cm-foto-3.jpg";
import adesivo48Foto4 from "@/assets/products/photos/adesivo-redondo-4-8x4-8cm-foto-4.jpg";
import adesFechaCoucheFoto2 from "@/assets/products/photos/adesivo-fecha-sacola-10x4cm-foto-2.jpg";
import adesFechaCoucheFoto3 from "@/assets/products/photos/adesivo-fecha-sacola-10x4cm-foto-3.jpg";
import adesFechaSulfiteFoto2 from "@/assets/products/photos/adesivo-fecha-sacola-10x5cm-foto-2.jpg";
import adesivoAnelFoto2 from "@/assets/products/photos/adesivo-para-anel-foto-2.jpg";
import adesFechaCoucheMed from "@/assets/products/measures/adesivo-fecha-sacola-personalizado-couche-10x4-cm.jpg";
import adesFechaSulfiteMed from "@/assets/products/measures/adesivo-fecha-sacola-personalizado-sulfite-10x5-cm.jpg";
import adesivoAnelMed from "@/assets/products/measures/adesivo-personalizado-para-anel-7x1-7-cm.jpg";
import blocoPedidosMed from "@/assets/products/measures/bloco-de-pedidos-personalizado-15x10-cm.jpg";
import caixinhaMMed from "@/assets/products/measures/caixinha-personalizada-para-acessorios-8-3x8-3x5-cm.jpg";
import caixinhaMaletaMed from "@/assets/products/measures/caixinha-personalizada-maleta-4-4x7-3x5-6-cm.jpg";
import caixinhaPMed from "@/assets/products/measures/caixinha-personalizada-para-acessorios-6-3x6-3x3-cm.jpg";
import miniTagAnelMed from "@/assets/products/measures/mini-tag-de-anel-personalizada-3-9x1-7-cm.jpg";
import cartaoVisitasMed from "@/assets/products/measures/cartao-de-visitas-personalizado-8-8x4-8-cm.jpg";
import cartaoVisitasVernizMed from "@/assets/products/measures/cartao-de-visitas-personalizado-verniz-localizado-8-8x5-1-cm.jpg";
import certGarantiaMed from "@/assets/products/measures/certificado-de-garantia-personalizado-8-8x4-8-cm.jpg";
import certGarantiaDobradoMed from "@/assets/products/measures/certificado-de-garantia-personalizado-dobrado.jpg";
import etiquetaRoupasMed from "@/assets/products/measures/etiqueta-personalizada-para-roupas-8-8x4-8-cm.jpg";
import etiquetaRoupasEspecialMed from "@/assets/products/measures/etiqueta-personalizada-para-roupas-formato-especial.jpg";
import miniCartaoAgradMed from "@/assets/products/measures/mini-cartao-de-agradecimento-personalizado-4-8x4-25-cm.jpg";
import miniCertGarantiaMed from "@/assets/products/measures/mini-certificado-de-garantia-personalizado-4-8x4-25-cm.jpg";
import miniEtiquetaRoupasMed from "@/assets/products/measures/mini-etiqueta-personalizada-para-roupas-4-8x4-25-cm.jpg";
import tagAnel7x3Med from "@/assets/products/measures/tag-de-anel-personalizada-7x3-cm.jpg";
import miniTagBrincosMed from "@/assets/products/measures/mini-tag-de-brincos-personalizada-4-8x4-25-cm.jpg";
import panfletoMed from "@/assets/products/measures/panfleto-personalizado.jpg";
import sacolaPlasticaMed from "@/assets/products/measures/sacola-plastica-personalizada-alca-vazada.jpg";
import sacolinhaCoucheMed from "@/assets/products/measures/sacolinha-personalizada-para-semijoias-couche-16-5x12x4-5-cm.jpg";
import sacolinhaCartaoMMed from "@/assets/products/measures/sacolinha-personalizada-para-semijoias-papel-cartao-m.jpg";
import sacolinhaCartaoPMed from "@/assets/products/measures/sacolinha-personalizada-para-semijoias-papel-cartao-p.jpg";
import tagAnelPadronizadaMMed from "@/assets/products/measures/tag-de-anel-padronizada-6-5x2-3-cm.jpg";
import tagLacos15Med from "@/assets/products/measures/tag-personalizada-para-lacos-e-tiaras-15x4-82-cm.jpg";
import tagLacos75Med from "@/assets/products/measures/tag-personalizada-para-lacos-e-tiaras-7-5x9-5-cm.jpg";
import tagLacos9Med from "@/assets/products/measures/tag-personalizada-para-lacos-e-tiaras-9x6-5-cm.jpg";
import tagLacos125Med from "@/assets/products/measures/tag-personalizada-para-lacos-e-tiaras-12-5x8-8-cm.jpg";
import tagBrincosPMed from "@/assets/products/measures/tag-de-brincos-personalizada-4x2-5-cm.jpg";
import tagBrincosMMed from "@/assets/products/measures/tag-de-brincos-personalizada-8-8x4-8-cm.jpg";
import tagBrincosGMed from "@/assets/products/measures/tag-de-brincos-personalizada-6x6-cm.jpg";
import tagBrincosColarPMed from "@/assets/products/measures/tag-de-brincos-e-colar-personalizada-8-8x4-8-cm.jpg";
import tagBrincosColarGMed from "@/assets/products/measures/tag-de-brincos-e-colar-personalizada-9-94x6-cm.jpg";
import tagBrincosColarEspMed from "@/assets/products/measures/tag-de-brincos-e-colar-personalizada-formato-especial.jpg";
import tagTrio8x65Med from "@/assets/products/measures/tag-de-trio-de-brincos-personalizada-8x6-5-cm.jpg";
import tagTrio48x41Med from "@/assets/products/measures/tag-de-trio-de-brincos-personalizada-4-8x4-1-cm.jpg";
import tagTrio55x48Med from "@/assets/products/measures/tag-de-trio-de-brincos-personalizada-5-5x4-8-cm.jpg";
import tagTrio88x48Med from "@/assets/products/measures/tag-de-trio-de-brincos-personalizada-8-8x4-8-cm.jpg";
import tagLacos15x88Med from "@/assets/products/measures/tag-personalizada-para-lacos-e-tiaras-15x8-8-cm.jpg";
import tagPulseira88x48Med from "@/assets/products/measures/tag-de-pulseira-8-8x4-8-cm.jpg";
import tagPulseira88x48v2Med from "@/assets/products/measures/tag-de-pulseira-8-8x4-8-cm-v2.jpg";
import tagPulseira88x994Med from "@/assets/products/measures/tag-de-pulseira-8-8x9-94-cm.jpg";
import tagPulseira84x98Med from "@/assets/products/measures/tag-de-pulseira-8-4x9-8-cm.jpg";
import tagPulseira13x48Med from "@/assets/products/measures/tag-de-pulseira-13x4-8-cm.jpg";
import tagTrioColarPMed from "@/assets/products/measures/tag-de-trio-de-brincos-e-colar-personalizada-8-8x4-8-cm.jpg";
import tagTrioColarGMed from "@/assets/products/measures/tag-de-trio-de-brincos-e-colar-personalizada-9x6-5-cm.jpg";
import tagSemaninhaMed from "@/assets/products/measures/tag-semaninha-personalizada-8-8x4-8-cm.jpg";
import tagAnel4x4Med from "@/assets/products/measures/tag-de-anel-personalizada-4x4-cm.jpg";

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
  "adesivo-redondo-personalizado-3x3-cm": [
    { src: adesivo33Med, type: "measurement", alt: "Adesivo redondo personalizado 3x3 cm com medidas" },
    { src: adesivo33Foto2, type: "photo", alt: "Adesivo redondo personalizado 3,3 cm aplicado em sacolas kraft" },
    { src: adesivo33Foto3, type: "photo", alt: "Adesivo redondo personalizado 3,3 cm — cartela impressa" },
  ],
  "adesivo-redondo-personalizado-4-8x4-8-cm": [
    { src: adesivo48Med, type: "measurement", alt: "Adesivo redondo personalizado 4,8x4,8 cm com medidas" },
    { src: adesivo48Foto, type: "photo", alt: "Adesivo redondo personalizado 4,8x4,8 cm — foto real do produto aplicado" },
    { src: adesivo48Foto2, type: "photo", alt: "Adesivo redondo personalizado 4,8x4,8 cm — cartela impressa" },
    { src: adesivo48Foto3, type: "photo", alt: "Adesivo redondo personalizado 4,8x4,8 cm preto com dourado" },
    { src: adesivo48Foto4, type: "photo", alt: "Adesivo redondo personalizado 4,8x4,8 cm aplicado em caixa" },
  ],
  "adesivo-fecha-sacola-personalizado-couche-10x4-cm": [
    { src: adesFechaCoucheMed, type: "measurement" },
    { src: adesFechaCoucheFoto2, type: "photo", alt: "Adesivo fecha sacola personalizado couche 10x4 cm — cartela rosa" },
    { src: adesFechaCoucheFoto3, type: "photo", alt: "Adesivo fecha sacola personalizado couche 10x4 cm aplicado em sacola" },
  ],
  "adesivo-fecha-sacola-personalizado-sulfite-10x5-cm": [
    { src: adesFechaSulfiteMed, type: "measurement" },
    { src: adesFechaSulfiteFoto2, type: "photo", alt: "Adesivo fecha sacola personalizado sulfite 10x5 cm aplicado em sacola kraft" },
  ],
  "adesivo-personalizado-para-anel-7x1-7-cm": [
    { src: adesivoAnelMed, type: "measurement" },
    { src: adesivoAnelFoto2, type: "photo", alt: "Adesivo personalizado para anel 7x1,7 cm aplicado em anel dourado" },
  ],
  "bloco-de-pedidos-personalizado-15x10-cm": [
    { src: blocoPedidosMed, type: "measurement" },
    { src: blocoPedidosFoto2, type: "photo", alt: "Bloco de pedidos personalizado 15x10 cm — foto real" },
    { src: blocoPedidosFoto3, type: "photo", alt: "Bloco de pedidos personalizado 15x10 cm — mockup com folha destacável" },
  ],
  "caixinha-personalizada-para-acessorios-8-3x8-3x5-cm": [
    { src: caixinhaMMed, type: "measurement" },
    { src: caixinhaMFoto2, type: "photo", alt: "Caixinha personalizada para acessórios M — foto real fechada" },
    { src: caixinhaMFoto3, type: "photo", alt: "Caixinha personalizada para acessórios M — foto real aberta com semijoias" },
  ],
  "caixinha-personalizada-maleta-4-4x7-3x5-6-cm": [
    { src: caixinhaMaletaMed, type: "measurement" },
    { src: caixinhaMaletaFoto2, type: "photo", alt: "Caixinha personalizada modelo maleta — foto real verde" },
    { src: caixinhaMaletaFoto3, type: "photo", alt: "Caixinha personalizada modelo maleta — foto real preta" },
    { src: caixinhaMaletaFoto4, type: "photo", alt: "Caixinha personalizada modelo maleta — foto real mármore" },
    { src: caixinhaMaletaFoto5, type: "photo", alt: "Caixinha personalizada modelo maleta — foto real branca com dourado" },
  ],
  "caixinha-personalizada-para-acessorios-6-3x6-3x3-cm": [
    { src: caixinhaPMed, type: "measurement" },
    { src: caixinhaPFoto2, type: "photo", alt: "Caixinha personalizada para acessórios P — foto real preta com logo" },
    { src: caixinhaPFoto3, type: "photo", alt: "Caixinha personalizada para acessórios P — foto real branca com logo colorido" },
    { src: caixinhaPFoto4, type: "photo", alt: "Caixinha personalizada para acessórios P — foto real com mensagem" },
  ],
  "mini-tag-de-anel-personalizada-3-9x1-7-cm": [
    { src: miniTagAnelMed, type: "measurement" },
  ],
  "cartao-de-visitas-personalizado-8-8x4-8-cm": [
    { src: cartaoVisitasMed, type: "measurement" },
  ],
  "cartao-de-visitas-personalizado-verniz-localizado-8-8x5-1-cm": [
    { src: cartaoVisitasVernizMed, type: "measurement" },
  ],
  "certificado-de-garantia-personalizado-8-8x4-8-cm": [
    { src: certGarantiaMed, type: "measurement" },
  ],
  "certificado-de-garantia-personalizado-dobrado": [
    { src: certGarantiaDobradoMed, type: "measurement" },
  ],
  "etiqueta-personalizada-para-roupas-8-8x4-8-cm": [
    { src: etiquetaRoupasMed, type: "measurement" },
  ],
  "etiqueta-personalizada-para-roupas-formato-especial": [
    { src: etiquetaRoupasEspecialMed, type: "measurement" },
  ],
  "mini-cartao-de-agradecimento-personalizado-4-8x4-25-cm": [
    { src: miniCartaoAgradMed, type: "measurement" },
  ],
  "mini-certificado-de-garantia-personalizado-4-8x4-25-cm": [
    { src: miniCertGarantiaMed, type: "measurement" },
  ],
  "mini-etiqueta-personalizada-para-roupas-4-8x4-25-cm": [
    { src: miniEtiquetaRoupasMed, type: "measurement" },
  ],
  "tag-de-anel-personalizada-7x3-cm": [
    { src: tagAnel7x3Med, type: "measurement" },
  ],
  "mini-tag-de-brincos-personalizada-4-8x4-25-cm": [
    { src: miniTagBrincosMed, type: "measurement" },
  ],
  "panfleto-personalizado": [
    { src: panfletoMed, type: "measurement" },
  ],
  "sacola-plastica-personalizada-alca-vazada": [
    { src: sacolaPlasticaMed, type: "measurement", alt: "Sacola plástica personalizada — tamanhos disponíveis 16x22, 20x30, 25x35 e 30x40 cm" },
  ],
  "sacolinha-personalizada-para-semijoias-couche-16-5x12x4-5-cm": [
    { src: sacolinhaCoucheMed, type: "measurement" },
  ],
  "sacolinha-personalizada-para-semijoias-papel-cartao": [
    { src: sacolinhaCartaoPMed, type: "measurement", alt: "Sacolinha em papel cartão 300g tamanho P — 10x15,4x4 cm" },
    { src: sacolinhaCartaoMMed, type: "measurement", alt: "Sacolinha em papel cartão 300g tamanho M — 13x18x7,2 cm" },
  ],
  "tag-de-anel-padronizada-6-5x2-3-cm": [
    { src: tagAnelPadronizadaMMed, type: "measurement" },
  ],
  "tag-personalizada-para-lacos-e-tiaras-15x4-82-cm": [
    { src: tagLacos15Med, type: "measurement" },
  ],
  "tag-personalizada-para-lacos-e-tiaras-7-5x9-5-cm": [
    { src: tagLacos75Med, type: "measurement" },
  ],
  "tag-personalizada-para-lacos-e-tiaras-9x6-5-cm": [
    { src: tagLacos9Med, type: "measurement" },
  ],
  "tag-personalizada-para-lacos-e-tiaras-12-5x8-8-cm": [
    { src: tagLacos125Med, type: "measurement" },
  ],
  "tag-de-brincos-personalizada-4x2-5-cm": [
    { src: tagBrincosPMed, type: "measurement" },
  ],
  "tag-de-brincos-personalizada-8-8x4-8-cm": [
    { src: tagBrincosMMed, type: "measurement" },
  ],
  "tag-de-brincos-personalizada-6x6-cm": [
    { src: tagBrincosGMed, type: "measurement" },
  ],
  "tag-de-brincos-e-colar-personalizada-8-8x4-8-cm": [
    { src: tagBrincosColarPMed, type: "measurement" },
  ],
  "tag-de-brincos-e-colar-personalizada-9-94x6-cm": [
    { src: tagBrincosColarGMed, type: "measurement" },
  ],
  "tag-de-brincos-e-colar-personalizada-formato-especial": [
    { src: tagBrincosColarEspMed, type: "measurement" },
  ],
  "tag-de-trio-de-brincos-personalizada-8x6-5-cm": [
    { src: tagTrio8x65Med, type: "measurement" },
  ],
  "tag-de-trio-de-brincos-personalizada-4-8x4-1-cm": [
    { src: tagTrio48x41Med, type: "measurement" },
  ],
  "tag-de-trio-de-brincos-personalizada-5-5x4-8-cm": [
    { src: tagTrio55x48Med, type: "measurement" },
  ],
  "tag-de-trio-de-brincos-personalizada-8-8x4-8-cm": [
    { src: tagTrio88x48Med, type: "measurement" },
  ],
  "tag-personalizada-para-lacos-e-tiaras-15x8-8-cm": [
    { src: tagLacos15x88Med, type: "measurement" },
  ],
  "tag-de-acessorios-personalizada-8-8x4-8-cm": [
    { src: tagPulseira88x48Med, type: "measurement" },
    { src: tagPulseira88x48v2Med, type: "measurement" },
  ],
  "tag-de-acessorios-personalizada-8-8x9-94-cm": [
    { src: tagPulseira88x994Med, type: "measurement" },
  ],
  "tag-de-acessorios-personalizada-redonda-8-4x9-8-cm": [
    { src: tagPulseira84x98Med, type: "measurement" },
  ],
  "tag-de-acessorios-personalizada-13x4-8-cm": [
    { src: tagPulseira13x48Med, type: "measurement" },
  ],
  "tag-trio-de-brincos-e-colar-personalizada-8-8x4-8-cm": [
    { src: tagTrioColarPMed, type: "measurement" },
  ],
  "tag-trio-de-brincos-e-colar-personalizada-9x6-5-cm": [
    { src: tagTrioColarGMed, type: "measurement" },
  ],
  "tag-semaninha-personalizada-8-8x4-8-cm": [
    { src: tagSemaninhaMed, type: "measurement" },
  ],
  "tag-de-anel-personalizada-4x4-cm": [
    { src: tagAnel4x4Med, type: "measurement" },
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
