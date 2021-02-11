<p align="center">
  <img src="/src/assets/amyi_logo.png" width="150" />
</p>

## Deploy

Você pode conferir a aplicação online [Clicando aqui](https://amyi-test.netlify.app/)

## Desafio:

A Amyi irá lançar uma nova versão da jornada olfativa online nos próximos
meses. Crie uma mini jornada sensorial seguindo o briefing abaixo:

### 1ª Parte: Páginas de perguntas dos perfumes Amyi I, Amyi II e Amyi III

- Objetivo: Programar páginas dos 3 perfumes criadas por designer

Telas e fontes estão salvas aqui:
[Link para as telas](https://drive.google.com/drive/folders/1xS7r-RSciMlskJH51wfkbCt2itwkR9f3?
usp=sharing)

Briefing:

- Usar as mesmas fontes e imagens que a tela de referência.
- Os requisitos que englobam as 3 páginas são semelhantes.

Cores:

- O usuário pode selecionar quantas cores quiser;
- As cores são representadas por botões SVG.Cor escolhida
  deverá ser automaticamente salva na sessão do usuário,
  podendo ser salva no localstorage;
- Ao clicar no botão/imagem um ‘check’ deverá aparecer em cima
  da cor selecionada.

Nota:

- O usuário poderá arrastar o input em forma de slide e escolher
  uma nota que vai de 0 à 10, com intervalos de 1 em 1.
- O usuário deverá selecionar pelo menos uma cor e confirmar a nota
  para avançar para a próxima página.
- Assim que o usuário preencher as cores e notas dos 3 perfumes e
  confirmar, um modal deverá aparecer informando que as respostas
  foram salvas com sucesso. O usuário deverá ser redirecionado para a
  próxima página.

### 2ª Parte: Página do Ranking

- Objetivo: Criar página do Ranking dos perfumes preferidos.

Briefing:

- Na primeira parte o usuário respondeu algumas perguntas dos 3
  perfumes e escolheu uma nota para cada um, com essa nota salva na
  sessão do usuário.
- O objetivo agora é rankear os 3 perfumes, ordenando eles da maior
  nota para a menor, ou seja, se o perfume II teve uma nota 8 e o
  perfume I e III teve uma nota menor, o perfume II deverá aparecer
  como primeiro da lista.
- Mostrar nota dada a cada perfume.
- Incluir checkbox para escolha dos perfumes.
- Os botões de ‘confirmar escolha do perfume’ e ‘escolher depois’ só
  deverão funcionar se o usuário tiver selecionado o checkbox de algum
  dos perfumes no ranking.
- Ao clicar em ‘confirmar escolha do perfume’, um modal, semelhante ao
  da imagem referência, deverá aparecer para que o usuário confirme se
  realmente deseja fazer a escolha daquele perfume.
- Ao confirmar a escolha de algum dos 3 perfumes um modal deverá
  aparecer informando que a escolha foi realizada com sucesso!
- Caso o usuário selecione a opção escolher depois, não fazer nada.
- Toda a programação deve seguir a imagem referência criada pelo
  designer.

## Como executar

Realizar o clone deste repositório

```
git clone https://github.com/mannoeu/amyi-test.git
```

Instalar as dependências

```
npm install
```

Executar ambiente

```
npm run dev
```

Abrir [localhost](https://localhost:1234) em seu navegador

