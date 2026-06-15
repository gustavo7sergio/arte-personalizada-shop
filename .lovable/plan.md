# Recomendações por família de produtos

## Problema

Hoje "Outros modelos" e "Combine com" só consideram `categorySlug` + um score frouxo de tokens. Resultado: numa tag de brincos aparecem tags de anel, colar, pulseira etc. — produtos da mesma categoria mas que não são "variações" do mesmo item.

## Solução

Introduzir o conceito de **família** de produto e usá-lo como base das recomendações.

### 1. Novo campo em `ProductPageConfig`

`src/data/productPages.ts`:

```ts
productFamily?: ProductFamily;
```

Tipo:

```ts
type ProductFamily =
  | "tags-brincos"
  | "tags-trio-brincos"
  | "tags-aneis"
  | "tags-colares"
  | "tags-brincos-colar"
  | "tags-trio-brincos-colar"
  | "tags-pulseiras"
  | "tags-acessorios-genericas" // "tag de acessórios" sem peça definida
  | "tags-semaninha"
  | "tags-lacos-tiaras"
  | "sacolinhas"
  | "caixinhas"
  | "cartoes-visitas"
  | "cartoes-agradecimento"
  | "certificados-garantia"
  | "adesivos-redondos"
  | "adesivos-anel"
  | "adesivos-fecha-sacola"
  | "etiquetas-roupas"
  | "mini-etiquetas"
  | "kits"
  | "papelaria";
```

Campo opcional — quando ausente, um inferidor por slug atribui a família. Páginas com casos atípicos podem fixar manualmente.

### 2. Inferência por slug (fallback)

Em `src/lib/productSuggestions.ts`, regras ordenadas (primeira que casa vence). Resumo:

```text
mini-tag-de-brincos…       → tags-brincos
tag-de-trio-de-brincos-e-colar → tags-trio-brincos-colar
tag-de-trio-de-brincos     → tags-trio-brincos
tag-de-brincos-e-colar     → tags-brincos-colar
tag-de-brincos             → tags-brincos
tag-de-anel / mini-tag-de-anel → tags-aneis
tag-semaninha              → tags-semaninha
tag-de-pulseira            → tags-pulseiras
tag-de-acessorios          → tags-acessorios-genericas
tag-de-lacos / tiaras      → tags-lacos-tiaras
sacolinha / sacola         → sacolinhas
caixinha                   → caixinhas
certificado-de-garantia    → certificados-garantia
cartao-de-agradecimento    → cartoes-agradecimento
cartao-de-visitas          → cartoes-visitas
adesivo…anel               → adesivos-anel
adesivo…fecha-sacola       → adesivos-fecha-sacola
adesivo                    → adesivos-redondos
mini-etiqueta              → mini-etiquetas
etiqueta                   → etiquetas-roupas
kit                        → kits
default (papelaria)        → papelaria
```

### 3. "Outros modelos" — `getRelatedProducts`

Nova lógica:

1. Se `relatedSlugs` override existe → usa.
2. Bucket primário: mesma `productFamily`, exceto o próprio slug.
3. Bucket secundário (apenas se primário < limit): famílias **adjacentes** definidas em `RELATED_FAMILY_MAP`, ex.:
   ```
   tags-brincos → [tags-trio-brincos, tags-brincos-colar]
   tags-trio-brincos → [tags-brincos, tags-trio-brincos-colar]
   tags-aneis → [tags-acessorios-genericas]
   tags-colares → [tags-brincos-colar, tags-trio-brincos-colar]
   tags-pulseiras → [tags-acessorios-genericas]
   tags-lacos-tiaras → []  // sozinha
   sacolinhas → [caixinhas]
   caixinhas → [sacolinhas]
   cartoes-visitas → [cartoes-agradecimento]
   cartoes-agradecimento → [cartoes-visitas, certificados-garantia]
   certificados-garantia → [cartoes-agradecimento]
   adesivos-redondos → [adesivos-fecha-sacola]
   adesivos-fecha-sacola → [adesivos-redondos]
   adesivos-anel → [adesivos-redondos]
   etiquetas-roupas → [mini-etiquetas]
   mini-etiquetas → [etiquetas-roupas]
   kits → []
   papelaria → []
   ```
4. Rotação determinística por `hash(currentSlug)` já existente para evitar listas idênticas entre páginas.
5. Nunca cair em "qualquer produto da categoria" — se não houver nada na família + adjacentes, retorna o que tiver (pode ser < limit). Recomendação coerente > preencher por preencher.

### 4. "Combine com" — `getComplementaryProducts`

Migrar de mapa por categoria para mapa por **família** (`COMPLEMENTARY_FAMILY_MAP`). Exemplos:

```text
tags-brincos / tags-trio-brincos / tags-brincos-colar /
tags-trio-brincos-colar / tags-aneis / tags-colares /
tags-pulseiras / tags-acessorios-genericas / tags-semaninha
  → [sacolinhas, adesivos-redondos, cartoes-agradecimento, cartoes-visitas]

tags-lacos-tiaras
  → [sacolinhas, adesivos-redondos, cartoes-agradecimento]

sacolinhas / caixinhas
  → [tags-brincos, adesivos-fecha-sacola, cartoes-agradecimento]

cartoes-visitas
  → [adesivos-redondos, sacolinhas, tags-brincos]

cartoes-agradecimento / certificados-garantia
  → [tags-brincos, sacolinhas, adesivos-redondos]

adesivos-redondos / adesivos-fecha-sacola
  → [sacolinhas, tags-brincos, cartoes-agradecimento]

adesivos-anel
  → [tags-aneis, sacolinhas, cartoes-visitas]

etiquetas-roupas / mini-etiquetas
  → [cartoes-agradecimento, adesivos-redondos, sacolinhas]

kits
  → [sacolinhas, adesivos-redondos, cartoes-agradecimento]

papelaria
  → [cartoes-visitas, tags-brincos, sacolinhas]
```

Distribuição round-robin entre os buckets de família + rotação por hash já implementada → cada página vê uma combinação distinta.

`crossSellSlugs` override continua válido.

### 5. O que NÃO muda

- `ProductSuggestions.tsx` (carrossel Embla + autoplay) permanece intocado.
- `ProductPage.tsx` continua chamando os mesmos dois exports.
- `relatedSlugs`/`crossSellSlugs` overrides continuam funcionando.
- Schema, OG, sitemap — nada disso muda.

## Arquivos editados

- `src/lib/productSuggestions.ts` — novo tipo `ProductFamily`, inferidor por slug, `RELATED_FAMILY_MAP`, `COMPLEMENTARY_FAMILY_MAP`, reescrita de `getRelatedProducts` e `getComplementaryProducts`.
- `src/data/productPages.ts` — adicionar campo opcional `productFamily?: ProductFamily` ao tipo `ProductPageConfig` (sem precisar preencher item a item — a inferência cobre).

## Validação

Conferir manualmente as 4 famílias mais críticas via preview:

- tag de brincos → só tags-brincos / trio-brincos / brincos-colar
- tag de anel → só tags-aneis (+ tags-acessorios-genericas se faltar)
- sacolinha → outras sacolinhas + caixinhas
- adesivo redondo → outros adesivos redondos + fecha-sacola
