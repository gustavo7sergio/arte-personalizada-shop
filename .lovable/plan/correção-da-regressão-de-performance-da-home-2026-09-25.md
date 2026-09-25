# Correção da regressão de performance da Home

## Objetivo
Reduzir TBT, tarefas longas e atraso de renderização do hero sem qualquer mudança visual, textual, funcional, de SEO ou responsividade.

## Implementação
- Manter o hero no HTML inicial com `<picture>`, seleção por `media`, preload responsivo, `fetchpriority="high"`, `loading="eager"` e dimensões estáveis; confirmar que só uma variante é solicitada.
- Não montar o sistema de notificações na carga inicial da Home; carregá-lo somente quando uma interação realmente precisar exibir uma notificação.
- Montar seções abaixo da dobra progressivamente quando estiverem próximas da tela, reservando exatamente o espaço necessário para evitar CLS e sem introduzir animações ou atrasos quando o usuário chegar nelas.
- Evitar que módulos de depoimentos, FAQ, rodapé, mascotes e componentes associados sejam avaliados durante a primeira pintura.
- Revisar efeitos e observadores da Home, removendo trabalho duplicado e garantindo que nenhum código leia e escreva geometria no mesmo ciclo.
- Manter somente os preloads do hero e das duas fontes realmente críticas acima da dobra.
- Preservar o cache anual `immutable` dos arquivos versionados, sem aplicá-lo ao HTML.
- Atualizar a checklist técnica da otimização.

## Validação
- Comparar visualmente mobile, tablet e desktop, incluindo posições e dimensões.
- Medir tarefas longas, CLS, FCP/LCP observáveis e ordem das requisições sob limitação de CPU.
- Confirmar apenas um hero adequado por breakpoint e ausência de preloads abaixo da dobra.
- Testar hero, menu, navegação, categorias, carrinho e conteúdo carregado ao rolar.
- Conferir title, description, canonical, Open Graph, dados estruturados e landmarks.
- Executar verificação de tipos, testes aplicáveis e conferir a compilação automática.
