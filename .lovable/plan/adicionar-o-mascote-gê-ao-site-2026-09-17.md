# Adicionar o mascote Gê ao site

## Implementação

- Armazenar as cinco imagens WebP originais sem edição, preservando transparência e proporção.
- Criar um componente visual reutilizável para o mascote, com dimensões reservadas, carregamento tardio e textos alternativos específicos.
- Na Home, posicionar:
  - `ge-checklist` uma vez junto ao título e à introdução de “Como funciona a compra”, sem cobrir os seis cards;
  - `ge-lupa` uma vez junto ao título “Tira dúvidas”, sem invadir as perguntas.
- No carrinho:
  - mostrar `ge-pensativo` somente no estado vazio, mantendo a mensagem em HTML;
  - mostrar `ge-notebook` discretamente junto ao resumo final quando houver produtos, sem competir com preços ou botão.
- Na página 404, usar `ge-pensativo` próximo à mensagem existente, sem alterar sua função.
- Nas páginas de produto, usar `ge-caminhao` uma única vez junto ao bloco que já informa o prazo de produção, sem substituir ícones ou repetir o personagem.

## Responsividade e aparência

- Desktop: larguras entre 140 e 230 px conforme o espaço disponível.
- Mobile: larguras entre 90 e 150 px, com arranjos compactos que não aumentem excessivamente as seções.
- Sem fundos, sombras fortes, balões ou efeitos adicionais; o conteúdo e os produtos permanecem protagonistas.
- Nenhuma alteração no hero, textos, links, SEO, menu ou estrutura das demais áreas.

## Validação

- Conferir Home em desktop, tablet e celular.
- Conferir carrinho vazio e preenchido, página 404 e página de produto.
- Verificar transparência, proporção, carregamento tardio, ausência de sobreposições e overflow horizontal.
- Confirmar que a compilação permanece sem erros.
