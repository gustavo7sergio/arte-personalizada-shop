export interface PriceRow {
  qty: number;
  installment: number;
  cash: number;
  unitPrice?: number;
}

export interface ProductVariant {
  label: string;
  dimensions?: string;
  prices: PriceRow[];
}

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  category: string;
  material: string;
  specs: string[];
  additionals?: string[];
  variants: ProductVariant[];
  highlights?: string[]; // e.g. "10% PIX", "6x sem juros"
  image?: string;
}

export const products: Product[] = [
  // ─── SACOLINHAS ───────────────────────────────────────────────────
  {
    id: "sacolinha-acessorios-couche",
    name: "Sacolinha para Acessórios",
    subtitle: "16,5 × 12 × 4,5 cm",
    category: "Sacolinhas",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Não acompanha laço",
      "Colorido na parte externa",
      "NÃO trabalhamos com fidelização de cores",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "Única",
        dimensions: "16,5 x 12 x 4,5 cm",
        prices: [
          { qty: 100,  installment: 629.00,  cash: 566.10,  unitPrice: 5.66 },
          { qty: 250,  installment: 1029.00, cash: 926.10,  unitPrice: 3.70 },
          { qty: 500,  installment: 1432.00, cash: 1288.80, unitPrice: 2.58 },
          { qty: 1000, installment: 1982.00, cash: 1783.80, unitPrice: 1.78 },
          { qty: 2000, installment: 3769.00, cash: 3392.10, unitPrice: 1.70 },
        ],
      },
    ],
  },
  {
    id: "sacolinha-acessorios-cartao",
    name: "Sacolinha para Acessórios",
    subtitle: "Papel Cartão",
    category: "Sacolinhas",
    material: "Papel cartão 300g",
    specs: [
      "Papel cartão 300g",
      "Colorido na parte externa",
      "Sem enobrecimento",
      "NÃO trabalhamos com fidelização de cores",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "Tamanho P",
        dimensions: "6 x 15,4 x 10 cm (Larg × Alt × Comp)",
        prices: [
          { qty: 25,  installment: 309.00, cash: 278.10, unitPrice: 11.12 },
          { qty: 50,  installment: 399.00, cash: 359.10, unitPrice: 7.18 },
          { qty: 100, installment: 605.00, cash: 544.50, unitPrice: 5.45 },
        ],
      },
      {
        label: "Tamanho M",
        dimensions: "7,2 x 18,5 x 13 cm (Larg × Alt × Comp)",
        prices: [
          { qty: 25,  installment: 351.00, cash: 315.90, unitPrice: 12.64 },
          { qty: 50,  installment: 481.00, cash: 432.90, unitPrice: 8.66 },
          { qty: 100, installment: 739.00, cash: 665.10, unitPrice: 6.65 },
        ],
      },
    ],
  },
  {
    id: "sacola-plastica",
    name: "Sacolas Plásticas",
    subtitle: "Alça Vazada",
    category: "Sacolinhas",
    material: "Polietileno PEAD 0,13mm",
    specs: [
      "Polietileno PEAD 0,13mm",
      "Sem enobrecimento",
      "Colorido na parte externa",
      "NÃO trabalhamos com fidelização de cores",
      "Informações apenas na frente",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "16 x 22 cm",
        prices: [
          { qty: 50,   installment: 209.00,  cash: 188.10,  unitPrice: 3.76 },
          { qty: 100,  installment: 255.00,  cash: 229.50,  unitPrice: 2.30 },
          { qty: 250,  installment: 369.00,  cash: 332.10,  unitPrice: 1.33 },
          { qty: 500,  installment: 575.00,  cash: 517.50,  unitPrice: 1.04 },
          { qty: 1000, installment: 991.00,  cash: 891.90,  unitPrice: 0.89 },
        ],
      },
      {
        label: "20 x 30 cm",
        prices: [
          { qty: 50,   installment: 219.00,  cash: 197.10,  unitPrice: 3.94 },
          { qty: 100,  installment: 275.00,  cash: 247.50,  unitPrice: 2.48 },
          { qty: 250,  installment: 439.00,  cash: 395.10,  unitPrice: 1.58 },
          { qty: 500,  installment: 719.00,  cash: 647.10,  unitPrice: 1.29 },
          { qty: 1000, installment: 1299.00, cash: 1169.10, unitPrice: 1.17 },
        ],
      },
      {
        label: "25 x 35 cm",
        prices: [
          { qty: 50,   installment: 223.00,  cash: 200.70,  unitPrice: 4.01 },
          { qty: 100,  installment: 281.00,  cash: 252.90,  unitPrice: 2.53 },
          { qty: 250,  installment: 471.00,  cash: 423.90,  unitPrice: 1.70 },
          { qty: 500,  installment: 805.00,  cash: 724.50,  unitPrice: 1.45 },
          { qty: 1000, installment: 1479.00, cash: 1331.10, unitPrice: 1.33 },
        ],
      },
      {
        label: "30 x 40 cm",
        prices: [
          { qty: 50,   installment: 243.00,  cash: 218.70,  unitPrice: 4.37 },
          { qty: 100,  installment: 319.00,  cash: 287.10,  unitPrice: 2.87 },
          { qty: 250,  installment: 579.00,  cash: 521.10,  unitPrice: 2.08 },
          { qty: 500,  installment: 1019.00, cash: 917.10,  unitPrice: 1.83 },
          { qty: 1000, installment: 1899.00, cash: 1709.10, unitPrice: 1.71 },
        ],
      },
    ],
  },

  // ─── CAIXINHAS ────────────────────────────────────────────────────
  {
    id: "caixinha-acessorios-p",
    name: "Caixinha para Acessórios",
    subtitle: "Tamanho P",
    category: "Sacolinhas",
    material: "Papel cartão 300g",
    specs: [
      "Papel cartão 300g",
      "Colorido na parte externa",
      "Laminação fosca externa",
      "Não acompanha berço interno",
      "NÃO trabalhamos com fidelização de cores",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "6,3 × 6,3 × 3 cm",
        prices: [
          { qty: 100,  installment: 609.00,  cash: 548.10,  unitPrice: 5.48 },
          { qty: 250,  installment: 1099.00, cash: 989.10,  unitPrice: 3.96 },
          { qty: 500,  installment: 1779.00, cash: 1601.10, unitPrice: 3.20 },
          { qty: 1000, installment: 3159.00, cash: 2843.10, unitPrice: 2.84 },
        ],
      },
    ],
  },
  {
    id: "caixinha-acessorios-m",
    name: "Caixinha para Acessórios",
    subtitle: "Tamanho M",
    category: "Sacolinhas",
    material: "Papel cartão 300g",
    specs: [
      "Papel cartão 300g",
      "Colorido na parte externa",
      "Laminação fosca externa",
      "Não acompanha berço interno",
      "NÃO trabalhamos com fidelização de cores",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,3 × 8,3 × 5 cm",
        prices: [
          { qty: 100,  installment: 719.00,  cash: 647.10,  unitPrice: 6.47 },
          { qty: 250,  installment: 1289.00, cash: 1160.10, unitPrice: 4.64 },
          { qty: 500,  installment: 2129.00, cash: 1916.10, unitPrice: 3.83 },
          { qty: 1000, installment: 3759.00, cash: 3383.10, unitPrice: 3.38 },
        ],
      },
    ],
  },
  {
    id: "caixinha-acessorios-maleta",
    name: "Caixinha para Acessórios",
    subtitle: "Modelo Maleta",
    category: "Sacolinhas",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Colorido externamente",
      "Sem brilho de 100 a 200 unidades",
      "Com brilho de 500 a 5000 unidades",
      "NÃO trabalhamos com fidelização de cores",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "7,3 × 5,6 × 4,4 cm",
        prices: [
          { qty: 100,  installment: 311.00,  cash: 279.90,  unitPrice: 2.80 },
          { qty: 200,  installment: 428.00,  cash: 385.20,  unitPrice: 1.93 },
          { qty: 300,  installment: 505.00,  cash: 454.50,  unitPrice: 1.52 },
          { qty: 500,  installment: 627.00,  cash: 564.30,  unitPrice: 1.13 },
          { qty: 1000, installment: 933.00,  cash: 839.70,  unitPrice: 0.84 },
          { qty: 2000, installment: 1408.00, cash: 1267.20, unitPrice: 0.63 },
          { qty: 3000, installment: 1967.00, cash: 1770.30, unitPrice: 0.59 },
          { qty: 5000, installment: 2927.00, cash: 2634.30, unitPrice: 0.53 },
        ],
      },
    ],
  },

  // ─── TAGS ─────────────────────────────────────────────────────────
  {
    id: "tag-brincos-g",
    name: "Tag de Brincos",
    subtitle: "Tamanho G – 6 × 6 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "6 × 6 cm",
        prices: [
          { qty: 100,  installment: 184.00, cash: 165.60 },
          { qty: 250,  installment: 219.00, cash: 197.10 },
          { qty: 500,  installment: 285.00, cash: 256.50 },
          { qty: 1000, installment: 365.00, cash: 328.50 },
          { qty: 2000, installment: 669.00, cash: 602.10 },
        ],
      },
    ],
  },
  {
    id: "tag-trio-brincos-m",
    name: "Tag de Trio de Brincos",
    subtitle: "5,5 × 4,8 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "5,5 × 4,8 cm",
        prices: [
          { qty: 100,  installment: 188.00, cash: 169.20 },
          { qty: 250,  installment: 219.00, cash: 197.10 },
          { qty: 500,  installment: 265.00, cash: 238.50 },
          { qty: 1000, installment: 299.00, cash: 269.10 },
        ],
      },
    ],
  },
  {
    id: "tag-trio-brincos-p",
    name: "Tag de Trio de Brincos",
    subtitle: "4,8 × 4,1 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "4,8 × 4,1 cm",
        prices: [
          { qty: 200,  installment: 194.00, cash: 174.60 },
          { qty: 500,  installment: 239.00, cash: 215.10 },
          { qty: 1000, installment: 271.00, cash: 243.90 },
          { qty: 2000, installment: 519.00, cash: 467.10 },
        ],
      },
    ],
  },
  {
    id: "tag-trio-brincos-g",
    name: "Tag de Trio de Brincos",
    subtitle: "8 × 6,5 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8 × 6,5 cm",
        prices: [
          { qty: 100,  installment: 205.00, cash: 184.50 },
          { qty: 250,  installment: 239.00, cash: 215.10 },
          { qty: 500,  installment: 294.00, cash: 264.60 },
          { qty: 1000, installment: 371.00, cash: 333.90 },
        ],
      },
    ],
  },
  {
    id: "tag-trio-brincos-88x48",
    name: "Tag de Trio de Brincos",
    subtitle: "8,8 × 4,8 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,8 × 4,8 cm",
        prices: [
          { qty: 100,  installment: 188.00, cash: 169.20 },
          { qty: 250,  installment: 219.00, cash: 197.10 },
          { qty: 500,  installment: 265.00, cash: 238.50 },
          { qty: 1000, installment: 299.00, cash: 269.10 },
        ],
      },
    ],
  },
  {
    id: "tag-semaninha",
    name: "Tag Semaninha",
    subtitle: "8,8 × 4,8 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,8 × 4,8 cm",
        prices: [
          { qty: 100,  installment: 245.00, cash: 220.50 },
          { qty: 250,  installment: 277.00, cash: 249.30 },
          { qty: 500,  installment: 335.00, cash: 301.50 },
          { qty: 1000, installment: 353.00, cash: 317.70 },
        ],
      },
    ],
  },
  {
    id: "tag-brincos-colar-g",
    name: "Tag de Brincos e Colar",
    subtitle: "9,94 × 6 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "9,94 × 6 cm",
        prices: [
          { qty: 100,  installment: 181.00, cash: 162.90 },
          { qty: 250,  installment: 215.00, cash: 193.50 },
          { qty: 500,  installment: 279.00, cash: 251.10 },
          { qty: 1000, installment: 355.00, cash: 319.50 },
          { qty: 2000, installment: 659.00, cash: 593.10 },
        ],
      },
    ],
  },
  {
    id: "tag-brincos-colar-p",
    name: "Tag de Brincos e Colar",
    subtitle: "8,8 × 4,8 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,8 × 4,8 cm",
        prices: [
          { qty: 100,  installment: 175.00, cash: 157.50 },
          { qty: 250,  installment: 205.00, cash: 184.50 },
          { qty: 500,  installment: 259.00, cash: 233.10 },
          { qty: 1000, installment: 281.00, cash: 252.90 },
          { qty: 3000, installment: 649.00, cash: 584.10 },
        ],
      },
    ],
  },
  {
    id: "tag-brincos-colar-especial",
    name: "Tag de Brincos e Colar",
    subtitle: "Formato Especial",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Escolha qualquer formato dentro das medidas de até 8,8 × 4,8 cm",
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "Até 8,8 × 4,8 cm",
        prices: [
          { qty: 100,  installment: 169.00, cash: 152.10 },
          { qty: 250,  installment: 198.00, cash: 178.20 },
          { qty: 500,  installment: 249.00, cash: 224.10 },
          { qty: 1000, installment: 272.00, cash: 244.80 },
          { qty: 2000, installment: 479.00, cash: 431.10 },
        ],
      },
    ],
  },
  {
    id: "tag-trio-brincos-colar-g",
    name: "Tag Trio de Brincos e Colar",
    subtitle: "9 × 6,5 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "9 × 6,5 cm",
        prices: [
          { qty: 100,  installment: 237.00, cash: 213.30 },
          { qty: 250,  installment: 275.00, cash: 247.50 },
          { qty: 500,  installment: 339.00, cash: 305.10 },
          { qty: 1000, installment: 481.00, cash: 432.90 },
        ],
      },
    ],
  },
  {
    id: "tag-trio-brincos-colar-p",
    name: "Tag Trio de Brincos e Colar",
    subtitle: "8,8 × 4,8 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,8 × 4,8 cm",
        prices: [
          { qty: 100,  installment: 219.00, cash: 197.10 },
          { qty: 250,  installment: 253.00, cash: 227.70 },
          { qty: 500,  installment: 303.00, cash: 272.70 },
          { qty: 1000, installment: 325.00, cash: 292.50 },
        ],
      },
    ],
  },
  {
    id: "mini-tag-anel",
    name: "Mini Tag de Anel",
    subtitle: "3,9 × 1,7 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "3,3 × 2,6 cm / 4 × 4 cm",
        prices: [
          { qty: 200,  installment: 169.00, cash: 152.10 },
          { qty: 500,  installment: 215.00, cash: 193.50 },
          { qty: 1000, installment: 240.00, cash: 216.00 },
          { qty: 2000, installment: 349.00, cash: 314.10 },
          { qty: 4000, installment: 649.00, cash: 584.10 },
        ],
      },
    ],
  },
  {
    id: "tag-anel",
    name: "Tag de Anel",
    subtitle: "7 × 3 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "7 × 3 cm",
        prices: [
          { qty: 100,  installment: 158.00, cash: 142.20 },
          { qty: 250,  installment: 197.00, cash: 177.30 },
          { qty: 500,  installment: 245.00, cash: 220.50 },
          { qty: 1000, installment: 269.00, cash: 242.10 },
          { qty: 3000, installment: 639.00, cash: 575.10 },
        ],
      },
    ],
  },
  {
    id: "tag-acessorios",
    name: "Tag de Acessórios",
    subtitle: "8,8 × 4,8 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "Frente e verso – 8,8 × 4,8 cm",
        prices: [
          { qty: 200,  installment: 227.00, cash: 204.30 },
          { qty: 500,  installment: 235.00, cash: 211.50 },
          { qty: 1000, installment: 263.00, cash: 236.70 },
          { qty: 3000, installment: 638.00, cash: 574.20 },
        ],
      },
      {
        label: "Apenas frente – 8,8 × 4,8 cm",
        prices: [
          { qty: 200,  installment: 205.00, cash: 184.50 },
          { qty: 500,  installment: 215.00, cash: 193.50 },
          { qty: 1000, installment: 249.00, cash: 224.10 },
          { qty: 3000, installment: 595.00, cash: 535.50 },
        ],
      },
    ],
  },

  // ─── ADESIVOS ─────────────────────────────────────────────────────
  {
    id: "adesivo-anel",
    name: "Adesivo para Anel",
    subtitle: "7 × 1,7 cm",
    category: "Adesivos",
    material: "Papel couchê 90g",
    specs: [
      "Papel couchê 90g",
      "Frente colorida",
      "Sem brilho",
      "NÃO trabalhamos com fidelização de cores",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "7 × 1,7 cm (com alça de 2,35 cm)",
        prices: [
          { qty: 30,   installment: 101.00, cash: 90.90 },
          { qty: 150,  installment: 205.00, cash: 184.50 },
          { qty: 300,  installment: 260.00, cash: 234.00 },
          { qty: 750,  installment: 402.00, cash: 361.80 },
          { qty: 1500, installment: 579.00, cash: 521.10 },
          { qty: 3000, installment: 999.00, cash: 899.10 },
        ],
      },
    ],
  },


  {
    id: "mini-tag-brincos-p",
    name: "Mini Tag de Brincos",
    subtitle: "Tamanho P – 4,8 × 4,25 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "4,8 × 4,25 cm",
        prices: [
          { qty: 100,  installment: 134.00, cash: 120.60 },
          { qty: 200,  installment: 157.00, cash: 141.30 },
          { qty: 500,  installment: 179.00, cash: 161.10 },
          { qty: 1000, installment: 216.00, cash: 194.40 },
          { qty: 2000, installment: 339.00, cash: 305.10 },
          { qty: 4000, installment: 628.00, cash: 565.20 },
        ],
      },
    ],
  },
  {
    id: "tag-brincos-p",
    name: "Tag de Brincos",
    subtitle: "Tamanho P – 4 × 2,5 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: [
      "Furo de pendurar e cortes",
      "Papel couchê 300g",
      "Verniz localizado",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "4 × 2,5 cm",
        prices: [
          { qty: 200,  installment: 169.00, cash: 152.10 },
          { qty: 500,  installment: 215.00, cash: 193.50 },
          { qty: 1000, installment: 240.00, cash: 216.00 },
          { qty: 2000, installment: 349.00, cash: 314.10 },
          { qty: 4000, installment: 649.00, cash: 584.10 },
        ],
      },
    ],
  },
  {
    id: "tag-brincos-m",
    name: "Tag de Brincos",
    subtitle: "Tamanho M – 8,8 × 4,8 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: [
      "Furos e cortes",
      "Papel couchê 300g",
      "Verniz localizado",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,8 × 4,8 cm",
        prices: [
          { qty: 100,  installment: 179.00, cash: 161.10 },
          { qty: 250,  installment: 209.00, cash: 188.10 },
          { qty: 500,  installment: 267.00, cash: 240.30 },
          { qty: 1000, installment: 291.00, cash: 261.90 },
          { qty: 3000, installment: 659.00, cash: 593.10 },
        ],
      },
    ],
  },

  // ─── CARTÕES ──────────────────────────────────────────────────────
  {
    id: "certificado-garantia",
    name: "Certificado de Garantia",
    subtitle: "8,8 × 4,8 cm",
    category: "Cartões",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,8 × 4,8 cm",
        prices: [
          { qty: 100,  installment: 103.00, cash: 92.70 },
          { qty: 250,  installment: 110.00, cash: 99.00 },
          { qty: 500,  installment: 136.00, cash: 122.40 },
          { qty: 1000, installment: 170.00, cash: 153.00 },
          { qty: 2000, installment: 299.00, cash: 269.10 },
          { qty: 3000, installment: 399.00, cash: 359.10 },
        ],
      },
    ],
  },
  {
    id: "certificado-garantia-mini",
    name: "Mini Certificado de Garantia",
    subtitle: "4,8 × 4,25 cm",
    category: "Cartões",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "4,8 × 4,25 cm",
        prices: [
          { qty: 200,  installment: 103.00, cash: 92.70 },
          { qty: 500,  installment: 127.00, cash: 114.30 },
          { qty: 1000, installment: 159.00, cash: 143.10 },
          { qty: 2000, installment: 202.00, cash: 181.80 },
        ],
      },
    ],
  },
  {
    id: "certificado-garantia-dobrado",
    name: "Certificado de Garantia",
    subtitle: "Formato Dobrado",
    category: "Cartões",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "Fechado: 8,8 × 4,8 cm",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,8 × 4,8 cm (aberto: 8,8 × 9,6 cm)",
        prices: [
          { qty: 500,  installment: 208.00, cash: 187.20 },
          { qty: 1000, installment: 234.00, cash: 210.60 },
          { qty: 3000, installment: 555.00, cash: 499.50 },
        ],
      },
    ],
  },

  // ─── TAGS (continuação) ────────────────────────────────────────────
  {
    id: "tag-acessorios-grande",
    name: "Tag de Acessórios",
    subtitle: "Formato Grande – 8,8 × 9,94 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "Frente e verso – 8,8 × 9,94 cm",
        prices: [
          { qty: 500,  installment: 271.00, cash: 243.90 },
          { qty: 1000, installment: 348.00, cash: 313.20 },
          { qty: 2000, installment: 679.00, cash: 611.10 },
        ],
      },
      {
        label: "Apenas frente – 8,8 × 9,94 cm",
        prices: [
          { qty: 500,  installment: 253.00, cash: 227.70 },
          { qty: 1000, installment: 315.00, cash: 283.50 },
          { qty: 2000, installment: 605.00, cash: 544.50 },
        ],
      },
    ],
  },
  {
    id: "tag-acessorios-redonda",
    name: "Tag de Acessórios",
    subtitle: "Formato Redondo – 8,4 × 9,8 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "Frente e verso – 8,4 × 9,8 cm",
        prices: [
          { qty: 500,  installment: 289.00, cash: 260.10 },
          { qty: 1000, installment: 363.00, cash: 326.70 },
          { qty: 2000, installment: 699.00, cash: 629.10 },
        ],
      },
      {
        label: "Apenas frente – 8,4 × 9,8 cm",
        prices: [
          { qty: 500,  installment: 269.00, cash: 242.10 },
          { qty: 1000, installment: 336.00, cash: 302.40 },
          { qty: 2000, installment: 627.00, cash: 564.30 },
        ],
      },
    ],
  },
  {
    id: "tag-acessorios-dupla",
    name: "Tag de Acessórios",
    subtitle: "13 × 4,8 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "Frente e verso – 13 × 4,8 cm",
        prices: [
          { qty: 500,  installment: 285.00, cash: 256.50 },
          { qty: 1000, installment: 399.00, cash: 359.10 },
          { qty: 2000, installment: 769.00, cash: 692.10 },
        ],
      },
      {
        label: "Apenas frente – 13 × 4,8 cm",
        prices: [
          { qty: 500,  installment: 263.00, cash: 236.70 },
          { qty: 1000, installment: 335.00, cash: 301.50 },
          { qty: 2000, installment: 632.00, cash: 568.80 },
        ],
      },
    ],
  },
  {
    id: "tag-acessorios-padronizada-p",
    name: "Tag de Acessórios",
    subtitle: "Formato Padronizado Pequeno",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
      "NÃO É POSSÍVEL MUDAR CORTES E FUROS NESSAS TAGS",
      "Formatos disponíveis: 4,25×4,8cm / 4×4cm / 4×3cm",
    ],
    additionals: ["Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "4,25×4,8 cm / 4×4 cm / 4×3 cm",
        prices: [
          { qty: 100,  installment: 134.00, cash: 120.60 },
          { qty: 200,  installment: 157.00, cash: 141.30 },
          { qty: 500,  installment: 179.00, cash: 161.10 },
          { qty: 1000, installment: 216.00, cash: 194.40 },
          { qty: 2000, installment: 339.00, cash: 305.10 },
          { qty: 4000, installment: 628.00, cash: 565.20 },
        ],
      },
    ],
  },
  {
    id: "tag-acessorios-padronizada-m",
    name: "Tag de Acessórios",
    subtitle: "Formato Padronizado Médio",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
      "NÃO É POSSÍVEL MUDAR CORTES E FUROS NESSAS TAGS",
      "Formatos disponíveis: 8,7×4,8cm / 8,8×4,8cm / 7×4,8cm",
    ],
    additionals: ["Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,7×4,8 cm / 8,8×4,8 cm / 7×4,8 cm",
        prices: [
          { qty: 50,   installment: 134.00, cash: 120.60 },
          { qty: 100,  installment: 157.00, cash: 141.30 },
          { qty: 250,  installment: 179.00, cash: 161.10 },
          { qty: 500,  installment: 216.00, cash: 194.40 },
          { qty: 1000, installment: 239.00, cash: 215.10 },
          { qty: 2000, installment: 409.00, cash: 368.10 },
          { qty: 5000, installment: 809.00, cash: 728.10 },
        ],
      },
    ],
  },
  {
    id: "tag-anel-padronizada-pequena",
    name: "Tag de Anel",
    subtitle: "Formato Padronizado – 3,9 × 1,7 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
      "NÃO É POSSÍVEL MUDAR CORTES E FUROS NESSAS TAGS",
    ],
    additionals: ["Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "3,9 × 1,7 cm",
        prices: [
          { qty: 200,  installment: 134.00, cash: 120.60 },
          { qty: 400,  installment: 157.00, cash: 141.30 },
          { qty: 1000, installment: 179.00, cash: 161.10 },
          { qty: 2000, installment: 216.00, cash: 194.40 },
          { qty: 4000, installment: 339.00, cash: 305.10 },
          { qty: 8000, installment: 628.00, cash: 565.20 },
        ],
      },
    ],
  },
  {
    id: "tag-anel-padronizada-media",
    name: "Tag de Anel",
    subtitle: "Formato Padronizado – 6,5 × 2,3 cm",
    category: "Tags de Acessórios",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
      "NÃO É POSSÍVEL MUDAR CORTES E FUROS NESSAS TAGS",
    ],
    additionals: ["Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "6,5 × 2,3 cm",
        prices: [
          { qty: 100, installment: 134.00, cash: 120.60 },
          { qty: 200, installment: 157.00, cash: 141.30 },
        ],
      },
    ],
  },
  {
    id: "kit-600-tags",
    name: "Kit de 600 Tags",
    subtitle: "Formatos Padronizados",
    category: "Kits",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "Arte 100% personalizada",
      "NÃO trabalhamos com fidelização de cores",
      "NÃO É POSSÍVEL MUDAR CORTES E FUROS NESSAS TAGS",
      "Kit inclui: 100 uni 4,25×4,8cm + 100 uni 8,8×4,8cm + 200 uni 3,9×1,7cm + 100 uni 8,8×4,8cm + 100 uni 4,25×4,8cm",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "600 unidades (mix de formatos)",
        prices: [
          { qty: 600, installment: 673.00, cash: 605.70, unitPrice: 1.01 },
        ],
      },
    ],
  },

  // ─── KITS ─────────────────────────────────────────────────────────
  {
    id: "kit-800-materiais-g",
    name: "Kit de 800 Materiais G.",
    subtitle: "Formatos Padronizados",
    category: "Kits",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "Arte 100% personalizada",
      "NÃO trabalhamos com fidelização de cores",
      "NÃO É POSSÍVEL MUDAR CORTES E FUROS NESSAS TAGS",
      "Kit inclui: 100 uni 4,25×4,8cm + 200 uni certif. 4,25×4,8cm + 100 uni 8,8×4,8cm + 200 uni mini tag 3,9×1,7cm + 100 uni 8,8×4,8cm + 100 uni 4,25×4,8cm",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "800 unidades (mix de formatos)",
        prices: [
          { qty: 800, installment: 762.00, cash: 685.80, unitPrice: 0.86 },
        ],
      },
    ],
  },
  {
    id: "kit-5000-tags",
    name: "Kit de 5 Mil Tags",
    subtitle: "Formatos Padronizados",
    category: "Kits",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "Arte 100% personalizada",
      "NÃO trabalhamos com fidelização de cores",
      "NÃO É POSSÍVEL MUDAR CORTES E FUROS NESSAS TAGS",
      "Kit inclui: 1000 uni 4,25×4,8cm + 1000 uni 8,8×4,8cm + 1000 uni mini tag 3,9×1,7cm + 1000 uni 8,8×4,8cm + 1000 uni 4,25×4,8cm",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "5.000 unidades (mix de formatos)",
        prices: [
          { qty: 5000, installment: 1049.00, cash: 944.10, unitPrice: 0.19 },
        ],
      },
    ],
  },
  {
    id: "kit-6000-materiais-g",
    name: "Kit de 6 Mil Materiais G.",
    subtitle: "Formatos Padronizados",
    category: "Kits",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "Arte 100% personalizada",
      "NÃO trabalhamos com fidelização de cores",
      "NÃO É POSSÍVEL MUDAR CORTES E FUROS NESSAS TAGS",
      "Kit inclui: 1000 uni 4,25×4,8cm + 1000 uni certif. 4,25×4,8cm + 1000 uni 8,8×4,8cm + 1000 uni mini tag 3,9×1,7cm + 1000 uni 8,8×4,8cm + 1000 uni 4,25×4,8cm",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "6.000 unidades (mix de formatos)",
        prices: [
          { qty: 6000, installment: 1199.00, cash: 1079.10, unitPrice: 0.18 },
        ],
      },
    ],
  },

  // ─── ADESIVOS (continuação) ────────────────────────────────────────
  {
    id: "adesivo-redondo",
    name: "Adesivo Redondo",
    subtitle: "3 × 3 cm / 4,8 × 4,8 cm",
    category: "Adesivos",
    material: "Papel couchê 80g",
    specs: [
      "Papel couchê 80g",
      "Frente colorida",
      "Sem brilho",
      "NÃO trabalhamos com fidelização de cores",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "3 × 3 cm",
        prices: [
          { qty: 50,   installment: 49.00,  cash: 44.10 },
          { qty: 100,  installment: 70.00,  cash: 63.00 },
          { qty: 250,  installment: 84.00,  cash: 75.60 },
          { qty: 1000, installment: 147.00, cash: 132.30 },
          { qty: 2500, installment: 232.00, cash: 208.80 },
        ],
      },
      {
        label: "4,8 × 4,8 cm",
        prices: [
          { qty: 24,   installment: 57.00,  cash: 51.30 },
          { qty: 100,  installment: 80.00,  cash: 72.00 },
          { qty: 250,  installment: 106.00, cash: 95.40 },
          { qty: 500,  installment: 142.00, cash: 127.80 },
          { qty: 1000, installment: 215.00, cash: 193.50 },
          { qty: 2500, installment: 444.00, cash: 399.60 },
        ],
      },
    ],
  },
  {
    id: "adesivo-fecha-sacola-couche",
    name: "Adesivo Fecha Sacola",
    subtitle: "Papel Couchê – 10 × 4 cm",
    category: "Adesivos",
    material: "Papel couchê 80g",
    specs: [
      "Papel couchê 80g",
      "Frente colorida",
      "Sem brilho",
      "10 × 4 cm (aberto)",
      "NÃO trabalhamos com fidelização de cores",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "10 × 4 cm (aberto)",
        prices: [
          { qty: 25,   installment: 50.00,  cash: 45.00 },
          { qty: 50,   installment: 61.00,  cash: 54.90 },
          { qty: 100,  installment: 71.00,  cash: 63.90 },
          { qty: 250,  installment: 105.00, cash: 94.50 },
          { qty: 500,  installment: 159.00, cash: 143.10 },
          { qty: 1000, installment: 286.00, cash: 257.40 },
          { qty: 2500, installment: 638.00, cash: 574.20 },
        ],
      },
    ],
  },
  {
    id: "adesivo-fecha-sacola-sulfite",
    name: "Adesivo Fecha Sacola",
    subtitle: "Papel Sulfite – 10 × 5 cm",
    category: "Adesivos",
    material: "Papel sulfite 80g",
    specs: [
      "Papel sulfite 80g",
      "Frente colorida",
      "Sem brilho",
      "10 × 5 cm (aberto)",
      "NÃO trabalhamos com fidelização de cores",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "10 × 5 cm (aberto)",
        prices: [
          { qty: 100,  installment: 94.00,  cash: 84.60 },
          { qty: 250,  installment: 144.00, cash: 129.60 },
          { qty: 500,  installment: 234.00, cash: 210.60 },
          { qty: 1000, installment: 424.00, cash: 381.60 },
          { qty: 2000, installment: 805.00, cash: 724.50 },
        ],
      },
    ],
  },

  // ─── CARTÕES (continuação) ─────────────────────────────────────────
  {
    id: "cartao-agradecimento-g",
    name: "Cartão de Agradecimento",
    subtitle: "8,8 × 9,94 cm",
    category: "Cartões",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Papel couchê 300g", "Furo de pendurar"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,8 × 9,94 cm",
        prices: [
          { qty: 100,  installment: 132.00, cash: 118.80 },
          { qty: 250,  installment: 145.00, cash: 130.50 },
          { qty: 500,  installment: 178.00, cash: 160.20 },
          { qty: 1000, installment: 262.00, cash: 235.80 },
          { qty: 2000, installment: 479.00, cash: 431.10 },
        ],
      },
    ],
  },
  {
    id: "cartao-agradecimento-p",
    name: "Cartão de Agradecimento",
    subtitle: "4,8 × 4,25 cm",
    category: "Cartões",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Papel couchê 300g", "Furo de pendurar"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "4,8 × 4,25 cm",
        prices: [
          { qty: 200,  installment: 103.00, cash: 92.70 },
          { qty: 500,  installment: 127.00, cash: 114.30 },
          { qty: 1000, installment: 159.00, cash: 143.10 },
          { qty: 2000, installment: 202.00, cash: 181.80 },
        ],
      },
    ],
  },
  {
    id: "cartao-visitas",
    name: "Cartão de Visitas",
    subtitle: "8,8 × 4,8 cm",
    category: "Cartões",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "8,8 × 4,8 cm",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Papel couchê 300g"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,8 × 4,8 cm",
        prices: [
          { qty: 100,  installment: 103.00, cash: 92.70 },
          { qty: 250,  installment: 110.00, cash: 99.00 },
          { qty: 500,  installment: 136.00, cash: 122.40 },
          { qty: 1000, installment: 170.00, cash: 153.00 },
          { qty: 2000, installment: 299.00, cash: 269.10 },
          { qty: 3000, installment: 399.00, cash: 359.10 },
        ],
      },
    ],
  },
  {
    id: "cartao-visitas-verniz",
    name: "Cartão de Visitas",
    subtitle: "Verniz Localizado – Linha Premium",
    category: "Cartões",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Fosco com verniz localizado",
      "8,8 × 5,1 cm",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Papel couchê 300g"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,8 × 5,1 cm",
        prices: [
          { qty: 250,  installment: 216.00, cash: 194.40 },
          { qty: 500,  installment: 263.00, cash: 236.70 },
          { qty: 1000, installment: 325.00, cash: 292.50 },
        ],
      },
    ],
  },

  // ─── TAGS (etiqueta de roupas) ─────────────────────────────────────
  {
    id: "etiqueta-roupas",
    name: "Etiqueta de Roupas",
    category: "Etiquetas de Roupas",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "8,8 × 4,8 cm",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "8,8 × 4,8 cm",
        prices: [
          { qty: 100,  installment: 114.00, cash: 102.60 },
          { qty: 250,  installment: 132.00, cash: 118.80 },
          { qty: 500,  installment: 184.00, cash: 165.60 },
          { qty: 1000, installment: 205.00, cash: 184.50 },
          { qty: 2000, installment: 369.00, cash: 332.10 },
          { qty: 3000, installment: 481.00, cash: 432.90 },
          { qty: 5000, installment: 729.00, cash: 656.10 },
        ],
      },
    ],
  },

  // ─── TAGS (etiquetas de roupas – continuação) ──────────────────────
  {
    id: "mini-etiqueta-roupas",
    name: "Mini Etiqueta de Roupas",
    category: "Etiquetas de Roupas",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "4,8 × 4,25 cm",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "4,8 × 4,25 cm",
        prices: [
          { qty: 200,  installment: 111.00, cash: 99.90 },
          { qty: 500,  installment: 151.00, cash: 135.90 },
          { qty: 1000, installment: 178.00, cash: 160.20 },
          { qty: 2000, installment: 250.00, cash: 225.00 },
        ],
      },
    ],
  },
  {
    id: "etiqueta-roupas-especial",
    name: "Etiqueta de Roupas",
    subtitle: "Formato Especial",
    category: "Etiquetas de Roupas",
    material: "Papel couchê 250g",
    specs: [
      "Escolha o tamanho da tag até 8,8 × 4,8 cm",
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "Até 8,8 × 4,8 cm",
        prices: [
          { qty: 100,  installment: 169.00, cash: 152.10 },
          { qty: 250,  installment: 198.00, cash: 178.20 },
          { qty: 500,  installment: 249.00, cash: 224.10 },
          { qty: 1000, installment: 272.00, cash: 244.80 },
          { qty: 2000, installment: 479.00, cash: 431.10 },
        ],
      },
    ],
  },
  {
    id: "tag-lacos-tiaras-p1",
    name: "Tag de Laços e Tiaras",
    subtitle: "9 × 6,5 cm",
    category: "Tags de Laços e Tiaras",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "9 × 6,5 cm",
        prices: [
          { qty: 100,  installment: 185.00, cash: 166.50 },
          { qty: 250,  installment: 219.00, cash: 197.10 },
          { qty: 500,  installment: 279.00, cash: 251.10 },
          { qty: 1000, installment: 351.00, cash: 315.90 },
          { qty: 2000, installment: 669.00, cash: 602.10 },
        ],
      },
    ],
  },
  {
    id: "tag-lacos-tiaras-p2",
    name: "Tag de Laços e Tiaras",
    subtitle: "7,5 × 9,5 cm",
    category: "Tags de Laços e Tiaras",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "7,5 × 9,5 cm",
        prices: [
          { qty: 100,  installment: 185.00, cash: 166.50 },
          { qty: 250,  installment: 219.00, cash: 197.10 },
          { qty: 500,  installment: 279.00, cash: 251.10 },
          { qty: 1000, installment: 351.00, cash: 315.90 },
          { qty: 2000, installment: 669.00, cash: 602.10 },
        ],
      },
    ],
  },
  {
    id: "tag-lacos-tiaras-m",
    name: "Tag de Laços e Tiaras",
    subtitle: "15 × 4,82 cm",
    category: "Tags de Laços e Tiaras",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "15 × 4,82 cm",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "15 × 4,82 cm",
        prices: [
          { qty: 100,  installment: 179.00, cash: 161.10 },
          { qty: 250,  installment: 216.00, cash: 194.40 },
          { qty: 500,  installment: 282.00, cash: 253.80 },
          { qty: 1000, installment: 399.00, cash: 359.10 },
          { qty: 2000, installment: 749.00, cash: 674.10 },
        ],
      },
    ],
  },
  {
    id: "tag-lacos-tiaras-g1",
    name: "Tag de Laços e Tiaras",
    subtitle: "15 × 8,8 cm",
    category: "Tags de Laços e Tiaras",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "15 × 8,8 cm",
        prices: [
          { qty: 100,  installment: 239.00, cash: 215.10 },
          { qty: 250,  installment: 271.00, cash: 243.90 },
          { qty: 500,  installment: 355.00, cash: 319.50 },
          { qty: 1000, installment: 419.00, cash: 377.10 },
          { qty: 2000, installment: 819.00, cash: 737.10 },
        ],
      },
    ],
  },
  {
    id: "tag-lacos-tiaras-g2",
    name: "Tag de Laços e Tiaras",
    subtitle: "12,5 × 8,8 cm",
    category: "Tags de Laços e Tiaras",
    material: "Papel couchê 250g",
    specs: [
      "Papel couchê 250g",
      "Frente e verso coloridos",
      "Brilho total na frente",
      "NÃO trabalhamos com fidelização de cores",
    ],
    additionals: ["Furo de pendurar e cortes", "Papel couchê 300g", "Verniz localizado"],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "12,5 × 8,8 cm",
        prices: [
          { qty: 100,  installment: 239.00, cash: 215.10 },
          { qty: 250,  installment: 271.00, cash: 243.90 },
          { qty: 500,  installment: 355.00, cash: 319.50 },
          { qty: 1000, installment: 419.00, cash: 377.10 },
          { qty: 2000, installment: 819.00, cash: 737.10 },
        ],
      },
    ],
  },

  // ─── OUTROS ────────────────────────────────────────────────────────
  {
    id: "bloco-pedidos",
    name: "Bloco de Pedidos",
    category: "Outros",
    material: "Papel Sulfite 75g (P&B) / 90g (Colorido)",
    specs: [
      "Impressão na frente",
      "100 folhas por bloco",
      "15 × 10 cm",
      "NÃO trabalhamos com fidelização de cores",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "Colorido – Papel Sulfite 90g",
        prices: [
          { qty: 1, installment: 102.00, cash: 91.80 },
          { qty: 2, installment: 154.00, cash: 138.60 },
          { qty: 5, installment: 267.00, cash: 240.30 },
        ],
      },
      {
        label: "Preto e Branco – Papel Sulfite 75g",
        prices: [
          { qty: 1, installment: 89.00,  cash: 80.10 },
          { qty: 2, installment: 135.00, cash: 121.50 },
          { qty: 5, installment: 154.00, cash: 138.60 },
        ],
      },
    ],
  },
  {
    id: "panfleto",
    name: "Panfleto",
    category: "Outros",
    material: "Papel couchê 120g (até 500 uni) / 90g (1000+ uni)",
    specs: [
      "Até 500 uni: 10 × 15 cm, papel couchê 120g, frente colorida sem brilho",
      "De 1000 uni: 10 × 14 cm, papel couchê 90g, frente colorida sem brilho",
      "Frete Grátis a partir de 1000 unidades",
      "NÃO trabalhamos com fidelização de cores",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "10 × 15 cm / 10 × 14 cm",
        prices: [
          { qty: 100,  installment: 129.00, cash: 116.10 },
          { qty: 250,  installment: 199.00, cash: 179.10 },
          { qty: 500,  installment: 279.00, cash: 251.10 },
          { qty: 1000, installment: 359.00, cash: 323.10 },
          { qty: 2500, installment: 429.00, cash: 386.10 },
        ],
      },
    ],
  },
  {
    id: "banner",
    name: "Banner",
    category: "Outros",
    material: "Lona 280g",
    specs: [
      "Lona 280g",
      "Frente colorida",
      "Sem brilho",
      "Acompanha bastão e barbante",
      "Tamanhos disponíveis: 40×60, 50×70, 60×90, 70×120, 90×120, 90×180 cm",
      "NÃO trabalhamos com fidelização de cores",
    ],
    highlights: ["10% OFF NO PIX", "6x SEM JUROS"],
    variants: [
      {
        label: "Consulte o tamanho desejado",
        prices: [
          { qty: 1, installment: 0, cash: 0 },
        ],
      },
    ],
  },

];

export const categories = [
  "Todos",
  "Tags de Acessórios",
  "Sacolinhas",
  "Cartões",
  "Adesivos",
  "Tags de Laços e Tiaras",
  "Etiquetas de Roupas",
  "Kits",
  "Outros",
];
