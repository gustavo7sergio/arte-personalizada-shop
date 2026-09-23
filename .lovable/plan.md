# Segunda rodada de otimização técnica da Home

## Objetivo
Melhorar LCP e Speed Index mobile sem qualquer mudança visual, textual, funcional, estrutural ou de SEO.

## Implementação
- Versionar os arquivos públicos usados diretamente (hero, mascotes, logos e fontes) e atualizar todas as referências e preloads, permitindo cache anual `immutable` sem prender futuras atualizações.
- Manter o hero em `<picture>` com seleção responsiva nativa, `fetchpriority="high"`, `loading="eager"`, dimensões estáveis e preloads mobile/desktop exatamente correspondentes, garantindo um único download por breakpoint.
- Refinar as variantes das imagens apontadas pelo relatório, especialmente mascotes, Kits, Cartões e logo, com `srcset`/`sizes` alinhados ao tamanho real de exibição e qualidade visual preservada.
- Eliminar atrasos artificiais na composição visual acima/próximo da dobra e revisar carregamentos tardios que elevam o Speed Index, sem alterar posições, medidas ou animações perceptíveis.
- Reduzir trabalho JavaScript inicial com carregamento sob demanda apenas para recursos globais que não são necessários na primeira pintura, preservando carrinho, menu, notificações e rotas.
- Manter Playfair Display e DM Sans, `font-display: swap` e somente os preloads realmente críticos.
- Manter o CSS principal estável para evitar flash sem estilo; aplicar somente reduções seguras de regras/dependências não utilizadas, sem fragmentação arriscada do CSS crítico.

## Validação
- Comparar Home em desktop, tablet e mobile, incluindo posições, dimensões e screenshots.
- Registrar requisições para confirmar apenas um hero adequado por breakpoint, fontes críticas corretas e imagens responsivas selecionadas.
- Medir CLS durante o carregamento e confirmar ausência de erros de console/rede relevantes.
- Testar menu, links do hero, categorias e carrinho.
- Executar verificação de tipos, testes aplicáveis e conferir a compilação automática.
- Confirmar que title, description, canonical, Open Graph, dados estruturados e landmarks permanecem intactos.
