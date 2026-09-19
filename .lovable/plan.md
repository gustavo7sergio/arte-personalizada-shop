# Otimização técnica de performance da Home

## Objetivo
Reduzir o atraso do LCP mobile e o peso transferido pela Home sem qualquer mudança visual, textual, funcional ou de SEO.

## Implementação
- Manter o hero em `<picture>` com seleção por `media`, carregamento prioritário e dimensões estáveis; alinhar o preload do HTML inicial exatamente aos arquivos usados pelo navegador, sem seleção por JavaScript e sem download duplicado.
- Criar variantes modernas e dimensionadas da imagem mobile do hero e dos mascotes, preservando enquadramento, transparência e qualidade; servir a variante adequada com `srcset` e `sizes`.
- Preservar as imagens responsivas já existentes das categorias e revisar logo e demais imagens prioritárias para evitar arquivos maiores que a exibição.
- Revisar Playfair Display e DM Sans: manter somente pesos/variantes realmente usados, `font-display: swap` e preload apenas das fontes críticas acima da dobra, evitando solicitações duplicadas.
- Adiar apenas código e seções abaixo da dobra que possam ser carregados sob demanda sem alterar conteúdo, medidas reservadas ou comportamento.
- Envolver o conteúdo principal da Home em `<main>`, sem adicionar estilos ou deslocamentos.
- Preservar integralmente metadados, canonical, dados estruturados, textos, links, rotas, imagens e identidade visual.

## Validação
- Conferir desktop, tablet e mobile por comparação visual e medições de posição/tamanho.
- Confirmar que cada breakpoint baixa apenas o banner correspondente e que o pedido do LCP começa pelo HTML inicial.
- Verificar dimensões reservadas, ausência de novo CLS, qualidade dos mascotes, links e interações.
- Executar verificação de tipos, testes aplicáveis e conferir o resultado automático de compilação.
