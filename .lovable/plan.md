# Refinamento do hero mobile

## Alteração
- Manter título e subtítulo em um bloco separado acima do banner.
- No celular, sobrepor apenas os dois botões na área livre superior esquerda da imagem, empilhados e funcionais.
- Reduzir moderadamente a altura visível removendo somente a sobra inferior, sem redimensionar ou editar a arte.
- Preservar integralmente o comportamento atual a partir de 768 px.

## Validação
- Conferir em 393 × 852 px que botões não cobrem o Gê ou materiais.
- Confirmar a presença dos materiais principais e que apenas a sobra inferior foi reduzida.
- Comparar o desktop antes e depois e validar a compilação.

## Detalhes técnicos
- Separar controles mobile e desktop com estilos responsivos.
- Usar um contêiner com recorte apenas na base no mobile; a imagem permanece na proporção e posição originais.
