# Otimização global das páginas de produto

## Objetivo
Melhorar principalmente o LCP e o desempenho mobile de todas as páginas de produto, sem alterar aparência, conteúdo, preços, carrinho, SEO, URLs, acessibilidade ou responsividade. A Home e as páginas de categoria permanecerão intactas.

## Implementação
- Gerar, no processo de compilação já existente, variantes WebP de 160, 240, 480, 768 e 1200 px para as imagens usadas nas galerias de produto.
- Manter a fonte original como fallback e para os metadados atuais, acrescentando dados responsivos apenas ao modelo global da galeria.
- Atualizar a imagem principal para usar `srcset` e `sizes`, dimensões estáveis e seleção automática adequada à largura disponível.
- Atualizar as miniaturas para requisitarem somente as variantes de 160/240 px, mantendo ordem, proporção, aparência, textos alternativos e controles atuais.
- Manter somente a primeira foto com carregamento imediato e prioridade alta; imagens selecionadas depois usarão carregamento sob demanda e prioridade baixa.
- Alinhar o preload à primeira imagem responsiva, sem trocar o canonical, metadados sociais, JSON-LD ou demais dados de SEO quando o usuário navegar pela galeria.
- Preservar o zoom, usando a variante de alta qualidade apropriada sem antecipar seu download.
- Manter os componentes abaixo da dobra já adiados e remover apenas trabalho redundante identificado no modelo de produto, sem retirar funcionalidades.
- Confirmar o cache longo dos arquivos versionados e manter o HTML sem cache imutável.

## Validação
- Conferir uma página com muitas imagens em mobile, tablet e desktop, comparando geometria e conteúdo visível.
- Testar miniaturas, setas, zoom, seleção de variantes, adicionar ao carrinho e navegação por teclado.
- Inspecionar a rede para confirmar: uma única imagem prioritária, miniaturas pequenas em WebP, secundárias lazy/low e ausência de download inicial das imagens grandes.
- Confirmar ausência de CLS e preservação de title, description, canonical, robots, Product/AggregateOffer, Breadcrumb e FAQ.
- Rodar verificação de tipos, testes e compilação; conferir também os registros finais da prévia.

## Detalhes técnicos
- A geração responsiva será feita com o `vite-imagetools` já instalado, sem criar ou substituir manualmente as imagens-fonte.
- O contrato da galeria passará a transportar URL original, `srcset` WebP e tamanhos adequados ao contexto principal, miniatura e zoom.
- Nenhum dado comercial ou arquivo de conteúdo será modificado.
