# Ajustes finais e conservadores de performance

## Objetivo
Reduzir pequenos gargalos de cache, CSS, fontes, JavaScript e acessibilidade sem alterar aparência, conteúdo, SEO, URLs, preços, funcionalidades ou a estratégia atual da galeria.

## Implementação
- Auditar os arquivos efetivamente solicitados pelo navegador nas páginas de produto e aplicar cache anual `immutable` somente aos assets com versão/hash; manter HTML sem cache imutável.
- Confirmar quais pesos e estilos de Playfair Display e DM Sans são realmente usados; remover apenas declarações/preloads comprovadamente redundantes, mantendo `font-display: swap` e a tipografia atual.
- Medir o CSS inicial e remover apenas regras comprovadamente mortas ou imports não usados. Não fragmentar o CSS crítico nem adotar carregamento assíncrono que cause conteúdo sem estilo.
- Revisar o pacote inicial e eliminar somente código ou dependências comprovadamente não utilizados, sem refatorar carrinho, galeria, navegação ou catálogo.
- Corrigir somente falhas reais de contraste, nomes acessíveis, controles interativos, labels e landmarks, preservando o visual.

## Restrições preservadas
- Nenhuma alteração na galeria otimizada, imagens, layout, textos, preços, rotas, slugs, robots, canonical ou JSON-LD.
- Nenhuma mudança visual ou funcional.

## Validação
- Comparar uma página de produto com várias imagens em mobile e desktop, incluindo galeria, zoom, carrinho e navegação.
- Conferir requisições, cache, fontes, prioridade das imagens, ausência de downloads duplicados e ausência de flash sem estilo.
- Verificar landmarks, nomes acessíveis, contraste e navegação por teclado.
- Executar testes, verificação de tipos e conferir a compilação automática.
