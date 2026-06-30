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
import sacolaAcess21Med from "@/assets/products/measures/sacola-personalizada-para-acessorios-21x15x7-cm.jpg";
import sacolaAcess12Med from "@/assets/products/measures/sacola-personalizada-para-acessorios-12x12x6-cm.jpg";
import sacolaAcess21Foto2 from "@/assets/products/photos/sacola-acessorios-21x15x7-foto-2.jpg";
import sacolaAcess12Foto2 from "@/assets/products/photos/sacola-acessorios-12x12x6-foto-2.jpg";
import ecobag30Med from "@/assets/products/measures/ecobag-personalizada-30x30-cm.jpg";
import ecobag30Foto2 from "@/assets/products/photos/ecobag-30x30-foto-2.jpg";
import displayPixMed from "@/assets/products/measures/display-pix-personalizado-10x15-cm.jpg";
import displayPixFoto2 from "@/assets/products/photos/display-pix-10x15-foto-2.jpg";
import sacolinhaCartaoFoto2 from "@/assets/products/photos/sacolinha-papel-cartao-foto-2.jpg";
import sacolinhaCartaoFoto3 from "@/assets/products/photos/sacolinha-papel-cartao-foto-3.jpg";
import panfletoFoto2 from "@/assets/products/photos/panfleto-foto-2.jpg";
import sacolaPlasticaFoto2 from "@/assets/products/photos/sacola-plastica-foto-2.jpg";
import sacolinha250gFoto2 from "@/assets/products/photos/sacolinha-papel-250g-foto-2.jpg";
import sacolinha250gFoto3 from "@/assets/products/photos/sacolinha-papel-250g-foto-3.jpg";
import sacolinha250gFoto4 from "@/assets/products/photos/sacolinha-papel-250g-foto-4.jpg";
import sacolinha250gFoto5 from "@/assets/products/photos/sacolinha-papel-250g-foto-5.jpg";
import sacolinha250gFoto6 from "@/assets/products/photos/sacolinha-papel-250g-foto-6.jpg";
import sacolinha250gFoto7 from "@/assets/products/photos/sacolinha-papel-250g-foto-7.jpg";
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
import certGarantiaFoto2 from "@/assets/products/photos/certificado-de-garantia-8-8x4-8cm-foto-2.jpg";
import certGarantiaFoto3 from "@/assets/products/photos/certificado-de-garantia-8-8x4-8cm-foto-3.jpg";
import cartaoAgradFoto2 from "@/assets/products/photos/cartao-de-agradecimento-8-8x9-94cm-foto-2.jpg";
import cartaoAgradFoto3 from "@/assets/products/photos/cartao-de-agradecimento-8-8x9-94cm-foto-3.jpg";
import cartaoAgradFoto4 from "@/assets/products/photos/cartao-de-agradecimento-8-8x9-94cm-foto-4.jpg";
import cartaoVisitasFoto2 from "@/assets/products/photos/cartao-de-visitas-8-8x4-8cm-foto-2.jpg";
import cartaoVisitasFoto3 from "@/assets/products/photos/cartao-de-visitas-8-8x4-8cm-foto-3.jpg";
import cartaoVisitasFoto4 from "@/assets/products/photos/cartao-de-visitas-8-8x4-8cm-foto-4.jpg";
import cartaoVisitasFoto5 from "@/assets/products/photos/cartao-de-visitas-8-8x4-8cm-foto-5.jpg";
import cartaoVisitasFoto6 from "@/assets/products/photos/cartao-de-visitas-8-8x4-8cm-foto-6.jpg";
import miniTagBrincosFoto2 from "@/assets/products/photos/mini-tag-de-brincos-foto-2.jpg";
import miniTagBrincosFoto3 from "@/assets/products/photos/mini-tag-de-brincos-foto-3.jpg";
import miniTagBrincosFoto4 from "@/assets/products/photos/mini-tag-de-brincos-foto-4.jpg";
import miniTagBrincosFoto5 from "@/assets/products/photos/mini-tag-de-brincos-foto-5.jpg";
import miniCertGarantiaFoto2 from "@/assets/products/photos/mini-certificado-garantia-foto-2.jpg";
import miniCertGarantiaFoto3 from "@/assets/products/photos/mini-certificado-garantia-foto-3.jpg";
import miniCertGarantiaFoto4 from "@/assets/products/photos/mini-certificado-garantia-foto-4.jpg";
import miniEtiquetaRoupasFoto2 from "@/assets/products/photos/mini-etiqueta-roupas-foto-2.jpg";
import miniEtiquetaRoupasFoto3 from "@/assets/products/photos/mini-etiqueta-roupas-foto-3.jpg";
import miniTagAnelFoto2 from "@/assets/products/photos/mini-tag-anel-3-9x1-7-foto-2.jpg";
import tagAnel7x3Foto2 from "@/assets/products/photos/tag-de-anel-7x3-foto-2.jpg";
import sacolinhaCartaoFoto4 from "@/assets/products/photos/sacolinha-papel-cartao-foto-4.jpg";
import sacolinhaCartaoFoto5 from "@/assets/products/photos/sacolinha-papel-cartao-foto-5.jpg";
import sacolinhaCartaoFoto6 from "@/assets/products/photos/sacolinha-papel-cartao-foto-6.jpg";
import sacolinhaCartaoFoto7 from "@/assets/products/photos/sacolinha-papel-cartao-foto-7.jpg";
import sacolinhaCartaoFoto8 from "@/assets/products/photos/sacolinha-papel-cartao-foto-8.jpg";
import tagAnel33x26Foto2 from "@/assets/products/photos/tag-de-anel-3-3x2-6-foto-2.jpg";
import tagAnel33x26Foto3 from "@/assets/products/photos/tag-de-anel-3-3x2-6-foto-3.jpg";
import tagAnel4x4Foto2 from "@/assets/products/photos/tag-de-anel-4x4-foto-2.jpg";
import tagAnel4x4Foto3 from "@/assets/products/photos/tag-de-anel-4x4-foto-3.jpg";
import tagAnel7x3Foto3 from "@/assets/products/photos/tag-de-anel-7x3-foto-3.jpg";
import tagAnel7x3Foto4 from "@/assets/products/photos/tag-de-anel-7x3-foto-4.jpg";
import tagBrincosColar9946Foto2 from "@/assets/products/photos/tag-brincos-colar-9-94x6-foto-2.jpg";
import tagBrincosColar8848Foto2 from "@/assets/products/photos/tag-brincos-colar-8-8x4-8-foto-2.jpg";
import tagBrincosColar8848Foto3 from "@/assets/products/photos/tag-brincos-colar-8-8x4-8-foto-3.jpg";
import tagBrincosColar8848Foto4 from "@/assets/products/photos/tag-brincos-colar-8-8x4-8-foto-4.jpg";
import tagBrincosP25Foto2 from "@/assets/products/photos/tag-brincos-4x2-5-foto-2.jpg";
import tagBrincosP25Foto3 from "@/assets/products/photos/tag-brincos-4x2-5-foto-3.jpg";
import tagBrincosP25Foto4 from "@/assets/products/photos/tag-brincos-4x2-5-foto-4.jpg";
import tagBrincosP25Foto5 from "@/assets/products/photos/tag-brincos-4x2-5-foto-5.jpg";
import tagBrincosM8848Foto2 from "@/assets/products/photos/tag-brincos-m-8-8x4-8-foto-2.jpg";
import tagBrincosM8848Foto3 from "@/assets/products/photos/tag-brincos-m-8-8x4-8-foto-3.jpg";
import tagBrincosG66Foto2 from "@/assets/products/photos/tag-brincos-g-6x6-foto-2.jpg";
import tagBrincosG66Foto3 from "@/assets/products/photos/tag-brincos-g-6x6-foto-3.jpg";
import tagBrincosColarEspFoto2 from "@/assets/products/photos/tag-brincos-colar-especial-foto-2.jpg";
import tagBrincosColarEspFoto3 from "@/assets/products/photos/tag-brincos-colar-especial-foto-3.jpg";
import tagBrincosColarEspFoto4 from "@/assets/products/photos/tag-brincos-colar-especial-foto-4.jpg";
import tagBrincosColarEspFoto5 from "@/assets/products/photos/tag-brincos-colar-especial-foto-5.jpg";
import tagBrincosColarEspFoto6 from "@/assets/products/photos/tag-brincos-colar-especial-foto-6.jpg";
import tagBrincosColarEspFoto7 from "@/assets/products/photos/tag-brincos-colar-especial-foto-7.jpg";
import tagPulseira88x48Foto2 from "@/assets/products/photos/tag-pulseira-8-8x4-8-foto-2.jpg";
import tagPulseira88x48Foto3 from "@/assets/products/photos/tag-pulseira-8-8x4-8-foto-3.jpg";
import tagPulseira88x48Foto4 from "@/assets/products/photos/tag-pulseira-8-8x4-8-foto-4.jpg";
import tagPulseira88x48Foto5 from "@/assets/products/photos/tag-pulseira-8-8x4-8-foto-5.jpg";
import tagPulseira88x48Foto6 from "@/assets/products/photos/tag-pulseira-8-8x4-8-foto-6.jpg";
import tagPulseira88x48Foto7 from "@/assets/products/photos/tag-pulseira-8-8x4-8-foto-7.jpg";
import tagPulseira88x48Foto8 from "@/assets/products/photos/tag-pulseira-8-8x4-8-foto-8.jpg";
import tagPulseira88x994Foto2 from "@/assets/products/photos/tag-pulseira-8-8x9-94-foto-2.jpg";
import tagPulseira84x98Foto2 from "@/assets/products/photos/tag-pulseira-8-4x9-8-foto-2.jpg";
import tagPulseira84x98Foto3 from "@/assets/products/photos/tag-pulseira-8-4x9-8-foto-3.jpg";
import tagPulseira13x48Foto2 from "@/assets/products/photos/tag-pulseira-13x4-8-foto-2.jpg";
import tagPulseira13x48Foto3 from "@/assets/products/photos/tag-pulseira-13x4-8-foto-3.jpg";
import tagPulseira13x48Foto4 from "@/assets/products/photos/tag-pulseira-13x4-8-foto-4.jpg";
import tagPulseira13x48Foto5 from "@/assets/products/photos/tag-pulseira-13x4-8-foto-5.jpg";
import tagBrincosM8848Foto4 from "@/assets/products/photos/tag-brincos-m-8-8x4-8-foto-4.jpg";
import tagTrio8x65Foto2 from "@/assets/products/photos/tag-trio-brincos-8x6-5-foto-2.jpg";
import tagTrio8x65Foto3 from "@/assets/products/photos/tag-trio-brincos-8x6-5-foto-3.jpg";
import tagPulseira13x48Foto6 from "@/assets/products/photos/tag-pulseira-13x4-8-foto-6.jpg";
import tagTrio48x41Foto2 from "@/assets/products/photos/tag-trio-brincos-4-8x4-1-foto-2.jpg";
import tagTrio48x41Foto3 from "@/assets/products/photos/tag-trio-brincos-4-8x4-1-foto-3.jpg";
import tagTrio55x48Foto2 from "@/assets/products/photos/tag-trio-brincos-5-5x4-8-foto-2.jpg";
import tagTrio55x48Foto3 from "@/assets/products/photos/tag-trio-brincos-5-5x4-8-foto-3.jpg";
import tagTrio88x48Foto2 from "@/assets/products/photos/tag-trio-brincos-8-8x4-8-foto-2.jpg";
import tagTrio88x48Foto3 from "@/assets/products/photos/tag-trio-brincos-8-8x4-8-foto-3.jpg";
import tagTrio88x48Foto4 from "@/assets/products/photos/tag-trio-brincos-8-8x4-8-foto-4.jpg";
import tagLacos75Foto2 from "@/assets/products/photos/tag-lacos-7-5x9-5-foto-2.jpg";
import tagLacos9x65Foto2 from "@/assets/products/photos/tag-lacos-9x6-5-foto-2.jpg";
import tagLacos9x65Foto3 from "@/assets/products/photos/tag-lacos-9x6-5-foto-3.jpg";
import tagLacos15x482Foto2 from "@/assets/products/photos/tag-lacos-15x4-82-foto-2.jpg";
import tagLacos15x88Foto2 from "@/assets/products/photos/tag-lacos-15x8-8-foto-2.jpg";
import tagSemaninhaFoto2 from "@/assets/products/photos/tag-semaninha-foto-2.jpg";
import tagTrio8x65Foto4 from "@/assets/products/photos/tag-trio-brincos-8x6-5-foto-4.jpg";
import tagTrioColarPFoto2 from "@/assets/products/photos/tag-trio-colar-8-8x4-8-foto-2.jpg";
import tagTrioColarPFoto3 from "@/assets/products/photos/tag-trio-colar-8-8x4-8-foto-3.jpg";
import tagTrioColarGFoto2 from "@/assets/products/photos/tag-trio-colar-9x6-5-foto-2.jpg";
import tagTrioColarGFoto3 from "@/assets/products/photos/tag-trio-colar-9x6-5-foto-3.jpg";

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
    { src: cartaoAgradFoto2, type: "photo", alt: "Cartão de agradecimento personalizado 8,8x9,94 cm — modelo Camilove rosa" },
    { src: cartaoAgradFoto3, type: "photo", alt: "Cartão de agradecimento personalizado 8,8x9,94 cm — modelo Tô Pronta com hot stamping" },
    { src: cartaoAgradFoto4, type: "photo", alt: "Cartão de agradecimento personalizado 8,8x9,94 cm — modelo Giovanna's Store rosa" },
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
  "caixinha-personalizada-para-semijoias-4-4x7-3x5-6-cm": [
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
    { src: miniTagAnelFoto2, type: "photo", alt: "Mini tag de anel personalizada 3,9x1,7 cm — modelo Fernanda Sacilotto Semijoias" },
  ],
  "cartao-de-visitas-personalizado-8-8x4-8-cm": [
    { src: cartaoVisitasMed, type: "measurement" },
    { src: cartaoVisitasFoto2, type: "photo", alt: "Cartão de visitas personalizado 8,8x4,8 cm — modelo Delícias da Cleo rosa" },
    { src: cartaoVisitasFoto3, type: "photo", alt: "Cartão de visitas personalizado 8,8x4,8 cm — modelo Lohayne Mendonça com foto" },
    { src: cartaoVisitasFoto4, type: "photo", alt: "Cartão de visitas personalizado 8,8x4,8 cm — modelo Partyhaus preto e branco" },
    { src: cartaoVisitasFoto5, type: "photo", alt: "Cartão de visitas personalizado 8,8x4,8 cm — modelo VP Custom preto" },
    { src: cartaoVisitasFoto6, type: "photo", alt: "Cartão de visitas personalizado 8,8x4,8 cm — modelo Picolo Semijoias com QR" },
  ],
  "cartao-de-visitas-personalizado-verniz-localizado-8-8x5-1-cm": [
    { src: cartaoVisitasVernizMed, type: "measurement" },
  ],
  "certificado-de-garantia-personalizado-8-8x4-8-cm": [
    { src: certGarantiaMed, type: "measurement" },
    { src: certGarantiaFoto2, type: "photo", alt: "Certificado de garantia personalizado 8,8x4,8 cm — modelo Divinità com listras douradas" },
    { src: certGarantiaFoto3, type: "photo", alt: "Certificado de garantia personalizado 8,8x4,8 cm — modelo Dani Jóias com dourado" },
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
    { src: miniCertGarantiaFoto2, type: "photo", alt: "Mini certificado de garantia personalizado — modelo Ana Resende Semijoias verde com dourado" },
    { src: miniCertGarantiaFoto3, type: "photo", alt: "Mini certificado de garantia personalizado — modelo Rita Paixão Semijoias frente e verso" },
    { src: miniCertGarantiaFoto4, type: "photo", alt: "Mini certificado de garantia personalizado — modelo Cravo e Pimenta Semijoias preto" },
  ],
  "mini-etiqueta-personalizada-para-roupas-4-8x4-25-cm": [
    { src: miniEtiquetaRoupasMed, type: "measurement" },
    { src: miniEtiquetaRoupasFoto2, type: "photo", alt: "Mini etiqueta personalizada para roupas — modelo Star Íntima frente e verso roxo" },
    { src: miniEtiquetaRoupasFoto3, type: "photo", alt: "Mini etiqueta personalizada para roupas — modelo Pyetra Fashion Moda Feminina" },
  ],
  "tag-de-anel-personalizada-7x3-cm": [
    { src: tagAnel7x3Med, type: "measurement" },
    { src: tagAnel7x3Foto2, type: "photo", alt: "Tag de anel personalizada 7x3 cm — modelo CL Jewels preto com anel" },
    { src: tagAnel7x3Foto3, type: "photo", alt: "Tag de anel personalizada 7x3 cm — modelo Pratas by Kariny Freitas vinho" },
    { src: tagAnel7x3Foto4, type: "photo", alt: "Tag de anel personalizada 7x3 cm — modelo Vigato Semijoias preto com dourado" },
  ],
  "mini-tag-de-brincos-personalizada-4-8x4-25-cm": [
    { src: miniTagBrincosMed, type: "measurement" },
    { src: miniTagBrincosFoto2, type: "photo", alt: "Mini tag de brincos personalizada — modelo Nina Maria SemiJoias com argolas douradas" },
    { src: miniTagBrincosFoto3, type: "photo", alt: "Mini tag de brincos personalizada — modelo MEIMEI Semijoias com brincos coração" },
    { src: miniTagBrincosFoto4, type: "photo", alt: "Mini tag de brincos personalizada — modelo Stilosa Semijoias roxo com brincos de pedra rosa" },
    { src: miniTagBrincosFoto5, type: "photo", alt: "Mini tag de brincos personalizada — modelo DiRainha Semijoias" },
  ],
  "panfleto-personalizado": [
    { src: panfletoMed, type: "measurement" },
    { src: panfletoFoto2, type: "photo", alt: "Panfleto personalizado — modelo Mércia Lingerie" },
  ],
  "sacola-plastica-personalizada-alca-vazada": [
    { src: sacolaPlasticaMed, type: "measurement", alt: "Sacola plástica personalizada — tamanhos disponíveis 16x22, 20x30, 25x35 e 30x40 cm" },
    { src: sacolaPlasticaFoto2, type: "photo", alt: "Sacola plástica personalizada — modelo Essência Moda Feminina" },
  ],
  "sacola-personalizada-para-acessorios-21x15x7-cm": [
    { src: sacolaAcess21Med, type: "measurement", alt: "Sacola personalizada para acessórios 21x15x7 cm — medidas" },
    { src: sacolaAcess21Foto2, type: "photo", alt: "Sacola personalizada para acessórios 21x15x7 cm — modelo Bella Jóias preto e dourado" },
  ],
  "sacola-personalizada-para-acessorios-12x12x6-cm": [
    { src: sacolaAcess12Med, type: "measurement", alt: "Sacola personalizada para acessórios 12x12x6 cm — medidas" },
    { src: sacolaAcess12Foto2, type: "photo", alt: "Sacola personalizada para acessórios 12x12x6 cm — modelo Avile branca com detalhe cobre" },
  ],
  "ecobag-personalizada-30x30-cm": [
    { src: ecobag30Med, type: "measurement", alt: "Ecobag personalizada 30x30 cm — medidas" },
    { src: ecobag30Foto2, type: "photo", alt: "Ecobag personalizada 30x30 cm — modelo Lumière Semijoias em uso" },
  ],
  "display-pix-personalizado-10x15-cm": [
    { src: displayPixMed, type: "measurement", alt: "Display PIX personalizado 10x15 cm — medidas" },
    { src: displayPixFoto2, type: "photo", alt: "Display PIX personalizado 10x15 cm — modelo Lumière Semijoias em uso no balcão" },
  ],
  "sacolinha-personalizada-para-semijoias-16-5x12x4-5-cm": [
    { src: sacolinhaCoucheMed, type: "measurement" },
    { src: sacolinha250gFoto2, type: "photo", alt: "Sacolinha em papel 250g — modelo YZE Acessórios" },
    { src: sacolinha250gFoto3, type: "photo", alt: "Sacolinha em papel 250g — modelo Eliz Semi Jóias" },
    { src: sacolinha250gFoto4, type: "photo", alt: "Sacolinha em papel 250g — modelo Vládia Serra Semijoias de Luxo" },
    { src: sacolinha250gFoto5, type: "photo", alt: "Sacolinha em papel 250g — modelo Joias da Ju by Juliana Pires" },
    { src: sacolinha250gFoto6, type: "photo", alt: "Sacolinha em papel 250g — modelo Positiva Jóias" },
    { src: sacolinha250gFoto7, type: "photo", alt: "Sacolinha em papel 250g — modelo Donatella Joias" },
  ],
  "sacolinha-personalizada-para-semijoias": [
    { src: sacolinhaCartaoPMed, type: "measurement", alt: "Sacolinha em papel cartão 300g tamanho P — 10x15,4x4 cm" },
    { src: sacolinhaCartaoMMed, type: "measurement", alt: "Sacolinha em papel cartão 300g tamanho M — 13x18x7,2 cm" },
    { src: sacolinhaCartaoFoto2, type: "photo", alt: "Sacolinha em papel cartão 300g — modelo El'ga (vista lateral)" },
    { src: sacolinhaCartaoFoto3, type: "photo", alt: "Sacolinha em papel cartão 300g — modelo El'ga" },
    { src: sacolinhaCartaoFoto4, type: "photo", alt: "Sacolinha em papel cartão 300g — modelo Flar Semi Jóias verde com dourado" },
    { src: sacolinhaCartaoFoto5, type: "photo", alt: "Sacolinha em papel cartão 300g tamanho M — modelo Ninoni Jóias e Acessórios tiffany" },
    { src: sacolinhaCartaoFoto6, type: "photo", alt: "Sacolinha em papel cartão 300g tamanho M — modelo Michele Spigolon Semijoias planificada" },
    { src: sacolinhaCartaoFoto7, type: "photo", alt: "Sacolinha em papel cartão 300g tamanho M — modelo Michele Spigolon Semijoias montada" },
    { src: sacolinhaCartaoFoto8, type: "photo", alt: "Sacolinha em papel cartão 300g tamanho M — modelo Fernanda Sacilotto Semijoias branca" },
  ],
  "tag-de-anel-padronizada-6-5x2-3-cm": [
    { src: tagAnelPadronizadaMMed, type: "measurement" },
  ],
  "tag-personalizada-para-lacos-e-tiaras-15x4-82-cm": [
    { src: tagLacos15Med, type: "measurement" },
    { src: tagLacos15x482Foto2, type: "photo", alt: "Tag de laços e tiaras 15x4,82 cm — modelo Bruna de Laço com laços de gorgurão xadrez amarelo, laranja e vermelho" },
  ],
  "tag-personalizada-para-lacos-e-tiaras-7-5x9-5-cm": [
    { src: tagLacos75Med, type: "measurement" },
    { src: tagLacos75Foto2, type: "photo", alt: "Tag de laços e tiaras 7,5x9,5 cm — modelo Rosê formato nuvem rosa com selo de troca" },
  ],
  "tag-personalizada-para-lacos-e-tiaras-9x6-5-cm": [
    { src: tagLacos9Med, type: "measurement" },
    { src: tagLacos9x65Foto2, type: "photo", alt: "Tag de laços e tiaras 9x6,5 cm — modelo MV Ma Vie Acessórios com trio de corações pink glitter" },
    { src: tagLacos9x65Foto3, type: "photo", alt: "Tag de laços e tiaras 9x6,5 cm — modelo RP Dress com presilhas xadrez preto e branco" },
  ],
  "tag-personalizada-para-lacos-e-tiaras-12-5x8-8-cm": [
    { src: tagLacos125Med, type: "measurement" },
  ],
  "tag-de-brincos-personalizada-4x2-5-cm": [
    { src: tagBrincosPMed, type: "measurement" },
    { src: tagBrincosP25Foto2, type: "photo", alt: "Tag de brincos personalizada 4x2,5 cm — modelo Taipo Pratas rosa" },
    { src: tagBrincosP25Foto3, type: "photo", alt: "Tag de brincos personalizada 4x2,5 cm — modelo JDS Semijoias amarelo e preto" },
    { src: tagBrincosP25Foto4, type: "photo", alt: "Tag de brincos personalizada 4x2,5 cm — modelo Tanto Semijoias verde claro" },
    { src: tagBrincosP25Foto5, type: "photo", alt: "Tag de brincos personalizada 4x2,5 cm — modelo Asas de Prata rosa com brincos" },
  ],
  "tag-de-brincos-personalizada-8-8x4-8-cm": [
    { src: tagBrincosMMed, type: "measurement" },
    { src: tagBrincosM8848Foto2, type: "photo", alt: "Tag de brincos personalizada 8,8x4,8 cm — modelo Asas de Prata rosa com colar" },
    { src: tagBrincosM8848Foto3, type: "photo", alt: "Tag de brincos personalizada 8,8x4,8 cm — modelo Virginia Semijoias vermelho" },
    { src: tagBrincosM8848Foto4, type: "photo", alt: "Tag de brincos personalizada 8,8x4,8 cm — modelo M com colar de borboleta prata" },
  ],
  "tag-de-brincos-personalizada-6x6-cm": [
    { src: tagBrincosGMed, type: "measurement" },
    { src: tagBrincosG66Foto2, type: "photo", alt: "Tag de brincos personalizada 6x6 cm — modelo MS branco" },
    { src: tagBrincosG66Foto3, type: "photo", alt: "Tag de brincos personalizada 6x6 cm — modelo Toque de Beleza Semijoias floral" },
  ],
  "tag-de-brincos-e-colar-personalizada-8-8x4-8-cm": [
    { src: tagBrincosColarPMed, type: "measurement" },
    { src: tagBrincosColar8848Foto2, type: "photo", alt: "Tag de brincos e colar personalizada 8,8x4,8 cm — modelo MR Semijoias frente e verso" },
    { src: tagBrincosColar8848Foto3, type: "photo", alt: "Tag de brincos e colar personalizada 8,8x4,8 cm — modelo Impacct Acessórios branco com colar" },
    { src: tagBrincosColar8848Foto4, type: "photo", alt: "Tag de brincos e colar personalizada 8,8x4,8 cm — modelo Maia Acessórios roxo e rosa" },
  ],
  "tag-de-brincos-e-colar-personalizada-9-94x6-cm": [
    { src: tagBrincosColarGMed, type: "measurement" },
    { src: tagBrincosColar9946Foto2, type: "photo", alt: "Tag de brincos e colar personalizada 9,94x6 cm — modelo Ellie Semijoias laranja e rosa" },
  ],
  "tag-de-brincos-e-colar-personalizada-formato-especial": [
    { src: tagBrincosColarEspMed, type: "measurement" },
    { src: tagBrincosColarEspFoto2, type: "photo", alt: "Tag de brincos e colar formato especial — modelo Lacreta Acessórios hexágono preto" },
    { src: tagBrincosColarEspFoto3, type: "photo", alt: "Tag de brincos e colar formato especial — modelo VIC Pratas e Semi Joias coração rosa" },
    { src: tagBrincosColarEspFoto4, type: "photo", alt: "Tag de brincos e colar formato especial — modelo Mmar de Prata concha azul" },
    { src: tagBrincosColarEspFoto5, type: "photo", alt: "Tag de brincos e colar formato especial — modelo Cherry Acessórios borboleta lilás" },
    { src: tagBrincosColarEspFoto6, type: "photo", alt: "Tag de brincos e colar formato especial — modelo Ateliê do Cavalo cabeça de cavalo marrom" },
    { src: tagBrincosColarEspFoto7, type: "photo", alt: "Tag de brincos e colar formato especial — modelo La Folha Acessórios folha verde" },
  ],
  "tag-de-trio-de-brincos-personalizada-8x6-5-cm": [
    { src: tagTrio8x65Med, type: "measurement" },
    { src: tagTrio8x65Foto2, type: "photo", alt: "Tag de trio de brincos 8x6,5 cm — modelo Encanti Semijoias branca com logo rosa e brincos de argola dourados" },
    { src: tagTrio8x65Foto3, type: "photo", alt: "Tag de trio de brincos 8x6,5 cm — modelo Encanti Semijoias verso rosa claro com dicas de conservação" },
    { src: tagTrio8x65Foto4, type: "photo", alt: "Tag de trio de brincos 8x6,5 cm — modelo Grazi Fiaes Acessórios & Bijuterias preta com logo dourado" },
  ],
  "tag-de-trio-de-brincos-personalizada-4-8x4-1-cm": [
    { src: tagTrio48x41Med, type: "measurement" },
    { src: tagTrio48x41Foto2, type: "photo", alt: "Tag de trio de brincos 4,8x4,1 cm — modelo Atena Pratas terracota com logo branco frente e verso" },
    { src: tagTrio48x41Foto3, type: "photo", alt: "Tag de trio de brincos 4,8x4,1 cm — modelo Quiara Semijoias rosa claro com brincos dourados de zircônia" },
  ],
  "tag-de-trio-de-brincos-personalizada-5-5x4-8-cm": [
    { src: tagTrio55x48Med, type: "measurement" },
    { src: tagTrio55x48Foto2, type: "photo", alt: "Tag de trio de brincos 5,5x4,8 cm — modelo Venere Semijoias rosa claro com círculo verde menta" },
    { src: tagTrio55x48Foto3, type: "photo", alt: "Tag de trio de brincos 5,5x4,8 cm — modelo Gilvana Pires Semijoias branca com brincos de gotas coloridas" },
  ],
  "tag-de-trio-de-brincos-personalizada-8-8x4-8-cm": [
    { src: tagTrio88x48Med, type: "measurement" },
    { src: tagTrio88x48Foto2, type: "photo", alt: "Tag de trio de brincos 8,8x4,8 cm — modelo Asas de Prata rosa com brincos de coração em prata" },
    { src: tagTrio88x48Foto3, type: "photo", alt: "Tag de trio de brincos 8,8x4,8 cm — modelo GP Semijoias branca com brincos dourados de coração e zircônia" },
    { src: tagTrio88x48Foto4, type: "photo", alt: "Tag de trio de brincos 8,8x4,8 cm — modelo Kenia Semijoias rosa com argolas cravejadas douradas" },
  ],
  "tag-personalizada-para-lacos-e-tiaras-15x8-8-cm": [
    { src: tagLacos15x88Med, type: "measurement" },
    { src: tagLacos15x88Foto2, type: "photo", alt: "Tag de laços e tiaras 15x8,8 cm — modelo Praiô by Ariadne Perdigão azul com piranha amarela" },
  ],
  "tag-de-acessorios-personalizada-8-8x4-8-cm": [
    { src: tagPulseira88x48Med, type: "measurement" },
    { src: tagPulseira88x48v2Med, type: "measurement" },
    { src: tagPulseira88x48Foto2, type: "photo", alt: "Tag de acessórios 8,8x4,8 cm — modelo Milena Acessórios branca com logo preto" },
    { src: tagPulseira88x48Foto3, type: "photo", alt: "Tag de acessórios 8,8x4,8 cm — modelo Grazi Fiaes preta com dourado" },
    { src: tagPulseira88x48Foto4, type: "photo", alt: "Tag de acessórios 8,8x4,8 cm — modelo Espedita Prata e Semijoias branca com logo coral" },
    { src: tagPulseira88x48Foto5, type: "photo", alt: "Tag de acessórios 8,8x4,8 cm versão 2 — modelo Paty Doratiotto preta com logo rosa em pulseira de elos dourados" },
    { src: tagPulseira88x48Foto6, type: "photo", alt: "Tag de acessórios 8,8x4,8 cm versão 2 — modelo Nara Santos Semijoias preta com detalhes em dourado" },
    { src: tagPulseira88x48Foto7, type: "photo", alt: "Tag de acessórios 8,8x4,8 cm versão 2 — modelo Pratas by Kariny Freitas com fundo mármore branco" },
    { src: tagPulseira88x48Foto8, type: "photo", alt: "Tag de acessórios 8,8x4,8 cm versão 2 — modelo WG Acessórios @wilma.gomes38 branca com borboletas e dicas de conservação no verso" },
  ],
  "tag-de-acessorios-personalizada-8-8x9-94-cm": [
    { src: tagPulseira88x994Med, type: "measurement" },
    { src: tagPulseira88x994Foto2, type: "photo", alt: "Tag de acessórios 8,8x9,94 cm — modelo Clara Moura Semijoias preta com logo dourado e brincos de zircônia" },
  ],
  "tag-de-acessorios-personalizada-redonda-8-4x9-8-cm": [
    { src: tagPulseira84x98Med, type: "measurement" },
    { src: tagPulseira84x98Foto2, type: "photo", alt: "Tag de acessórios redonda 8,4x9,8 cm — modelo Catarina Folheados e Semijoias com mandala colorida" },
    { src: tagPulseira84x98Foto3, type: "photo", alt: "Tag de acessórios redonda 8,4x9,8 cm — modelo Ahazz Acessórios rosa com brincos de folha dourados" },
  ],
  "tag-de-acessorios-personalizada-13x4-8-cm": [
    { src: tagPulseira13x48Med, type: "measurement" },
    { src: tagPulseira13x48Foto2, type: "photo", alt: "Tag de acessórios 13x4,8 cm — modelo Doralice Boutique terracota com brincos de cadeado dourados" },
    { src: tagPulseira13x48Foto3, type: "photo", alt: "Tag de acessórios 13x4,8 cm — modelo Madrili Acessórios branca com verso azul e dicas de conservação" },
    { src: tagPulseira13x48Foto4, type: "photo", alt: "Tag de acessórios 13x4,8 cm — modelo Marbella Joias e Semijoias azul marinho com logo dourado" },
    { src: tagPulseira13x48Foto5, type: "photo", alt: "Tag de acessórios 13x4,8 cm — modelo Catarina Folheados e Semijoias branca com mandalas coloridas" },
    { src: tagPulseira13x48Foto6, type: "photo", alt: "Tag de acessórios 13x4,8 cm — modelo Rakelita Bijoux preta com logo dourado e estampa de folhas" },
  ],
  "tag-trio-de-brincos-e-colar-personalizada-8-8x4-8-cm": [
    { src: tagTrioColarPMed, type: "measurement" },
    { src: tagTrioColarPFoto2, type: "photo", alt: "Tag de trio de brincos e colar 8,8x4,8 cm — modelo Wish Acessórios rosa com logo branco" },
    { src: tagTrioColarPFoto3, type: "photo", alt: "Tag de trio de brincos e colar 8,8x4,8 cm — modelo Aimer Joias preta com logo verde" },
  ],
  "tag-trio-de-brincos-e-colar-personalizada-9x6-5-cm": [
    { src: tagTrioColarGMed, type: "measurement" },
    { src: tagTrioColarGFoto2, type: "photo", alt: "Tag de trio de brincos e colar 9x6,5 cm — modelo Eleganzza Única semijoias e acessórios branca com logo vinho" },
    { src: tagTrioColarGFoto3, type: "photo", alt: "Tag de trio de brincos e colar 9x6,5 cm — modelo Lucimar Semijoias e Pratas rosa com logo diamante frente e verso" },
  ],
  "tag-semaninha-personalizada-8-8x4-8-cm": [
    { src: tagSemaninhaMed, type: "measurement" },
    { src: tagSemaninhaFoto2, type: "photo", alt: "Tag semaninha 8,8x4,8 cm — modelo Virtú Jóias em Prata roxa com dias da semana frente e verso" },
  ],
  "tag-de-anel-personalizada-4x4-cm": [
    { src: tagAnel4x4Med, type: "measurement" },
    { src: tagAnel4x4Foto2, type: "photo", alt: "Tag de anel personalizada 4x4 cm — modelo Divinità Semijoias com anéis" },
    { src: tagAnel4x4Foto3, type: "photo", alt: "Tag de anel personalizada 4x4 cm — modelo Angela's Jóias preto com dourado" },
  ],
  "tag-de-anel-personalizada-3-3x2-6-cm": [
    { src: tagAnel33x26Foto2, type: "photo", alt: "Tag de anel personalizada 3,3x2,6 cm — modelo Michele Spigolon Semijoias frente e verso" },
    { src: tagAnel33x26Foto3, type: "photo", alt: "Tag de anel personalizada 3,3x2,6 cm — modelo The Fascínio Semijoias" },
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
