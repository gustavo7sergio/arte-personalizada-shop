// Lista global de prova social (prints de conversas reais no WhatsApp).
// Para adicionar novos depoimentos, basta criar o asset e incluir aqui —
// a seção aparece automaticamente em todas as páginas de produto.
import dep2 from "@/assets/depoimentos/depoimento-2.jpg.asset.json";
import dep3 from "@/assets/depoimentos/depoimento-3.jpg.asset.json";
import dep4 from "@/assets/depoimentos/depoimento-4.jpg.asset.json";
import dep6 from "@/assets/depoimentos/depoimento-6.jpg.asset.json";
import dep7 from "@/assets/depoimentos/depoimento-7.jpg.asset.json";
import dep8 from "@/assets/depoimentos/depoimento-8.jpg.asset.json";
import dep9 from "@/assets/depoimentos/depoimento-9.jpg.asset.json";
import dep10 from "@/assets/depoimentos/depoimento-10.jpg.asset.json";
import dep11 from "@/assets/depoimentos/depoimento-11.jpg.asset.json";
import dep12 from "@/assets/depoimentos/depoimento-12.jpg.asset.json";

export interface SocialProofItem {
  /** URL da imagem original (resolução preservada). */
  src: string;
  /** Texto alternativo acessível. */
  alt: string;
  /**
   * Áreas opcionais de privacidade (percentuais relativos à imagem).
   * Permite ocultar telefones/dados pessoais sem editar a imagem original.
   */
  redactions?: Array<{ top: number; left: number; width: number; height: number }>;
}

export const socialProof: SocialProofItem[] = [
  { src: dep11.url, alt: "Print de conversa: cliente elogiando as sacolinhas personalizadas recebidas" },
  { src: dep9.url, alt: "Print de conversa: cliente elogiando as tags personalizadas da sua marca" },
  { src: dep12.url, alt: "Print de conversa: cliente aprovando a arte criada pela GS Cartões" },
  { src: dep10.url, alt: "Print de conversa: cliente satisfeita com o pedido bem embalado" },
  { src: dep8.url, alt: "Print de conversa: cliente comemorando a chegada dos materiais" },
  { src: dep7.url, alt: "Print de conversa: cliente elogiando o kit de materiais personalizados" },
  { src: dep6.url, alt: "Print de conversa: cliente elogiando as tags recebidas rapidamente" },
  { src: dep4.url, alt: "Print de conversa: cliente elogiando as tags em formato especial" },
  { src: dep3.url, alt: "Print de conversa: cliente apaixonada pela caixinha personalizada" },
  { src: dep2.url, alt: "Print de conversa: cliente satisfeita com a primeira compra" },
];
