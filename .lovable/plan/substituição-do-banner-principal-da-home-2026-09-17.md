# Substituição do banner principal da Home

## Objetivo
Trocar somente o fundo do banner principal pelas duas imagens enviadas, mantendo o título em H1, o subtítulo e os controles como elementos reais e funcionais.

## Implementação
- Armazenar as imagens originais sem edição: horizontal para telas a partir de 768 px e vertical para telas menores.
- Usar `<picture>` com `media="(min-width: 768px)"`, carregamento prioritário e sem lazy loading, garantindo que apenas a imagem adequada seja solicitada.
- Preservar a proporção de cada arquivo e enquadrar o banner sem cortar o Gê ou os materiais.
- Remover a logo adicional atualmente sobreposta ao banner, pois as novas imagens já contêm a marca.
- Manter exatamente o H1 e o subtítulo atuais.
- Manter “Ver produtos” com o link atual e incluir “Fale conosco” usando o mesmo endereço de WhatsApp já utilizado no site.
- No desktop/tablet, alinhar o conteúdo à área livre esquerda; no celular, posicioná-lo na área livre superior com tamanho responsivo e sem ultrapassar a tela.
- Atualizar somente o preload da imagem principal para respeitar desktop/mobile, sem mexer em metadados, URLs ou dados estruturados.

## Validação
- Conferir desktop, tablet e celular.
- Confirmar troca correta no limite de 768 px, ausência de recortes importantes, uma única logo visível e nenhum texto sobre produtos.
- Testar os dois controles e verificar erros de carregamento e compilação.
