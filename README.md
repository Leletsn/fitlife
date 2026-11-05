# FitLife

Site com três ferramentas de saúde e fitness: calculadora de **IMC**, calculadora de **TMB** (taxa metabólica basal) e contador de **hidratação**. É um projeto de estudo de HTML, CSS e JavaScript, sem build e sem backend.

> As calculadoras são informativas e não substituem a orientação de um profissional de saúde.

## Como rodar

Não precisa instalar nada. Abra o `index.html` no navegador (é preciso ter internet, porque Tailwind, fontes e ícones vêm de CDN).

## Estrutura

```
fitlife/
├── index.html           # página inicial com os cards das ferramentas
├── favicon.svg          # ícone da aba do navegador
├── tailwind.config.js   # cores e animação usadas pelo Tailwind
├── pages/
│   ├── imc.html         # calculadora de IMC
│   ├── tmb.html         # calculadora de TMB
│   └── water.html       # contador de hidratação
└── js/
    ├── imc.js           # lógica da página de IMC
    ├── tmb.js           # lógica da página de TMB
    └── water.js         # lógica da página de hidratação
```

Cada página de ferramenta carrega o seu próprio arquivo em `js/` com `<script defer>`, então o HTML fica só com a estrutura e o JavaScript só com o comportamento.

## Tecnologias

| O quê                  | Para quê                                                      | Documentação                                                                                                  |
| ---------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| HTML5                  | Estrutura e validação dos formulários                         | [MDN: HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)                                                |
| Tailwind CSS (CDN)     | Estilização com classes utilitárias, no lugar de arquivos CSS | [Documentação](https://tailwindcss.com/docs) · [Play CDN](https://tailwindcss.com/docs/installation/play-cdn) |
| JavaScript puro        | Cálculos e interação, sem biblioteca                          | [MDN: JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)                                    |
| Font Awesome 6         | Ícones                                                        | [Documentação](https://fontawesome.com/docs)                                                                  |
| Google Fonts (Poppins) | Fonte do site                                                 | [Poppins](https://fonts.google.com/specimen/Poppins)                                                          |

## Como cada ferramenta funciona

**IMC** = peso (kg) ÷ altura (m)². Classificação usada:

| IMC           | Classificação  |
| ------------- | -------------- |
| menos de 18,5 | Abaixo do peso |
| 18,5 a 24,9   | Peso normal    |
| 25 a 29,9     | Sobrepeso      |
| 30 ou mais    | Obesidade      |

**TMB** pela equação de Mifflin-St Jeor, com peso em kg, altura em cm e idade em anos:

- Homem: `10 × peso + 6,25 × altura − 5 × idade + 5`
- Mulher: `10 × peso + 6,25 × altura − 5 × idade − 161`

**Hidratação**: cada clique soma 250 ml e a barra mostra o percentual da meta de 2500 ml. O botão "Zerar" reinicia o total. O total não é salvo: recarregar a página começa do zero.

## Decisões do projeto

- **Tailwind no lugar de CSS próprio.** As cores do projeto (`primary`, `secondary`, `water`...) ficam em `tailwind.config.js`, como as variáveis `:root` do CSS original. Trocar uma cor lá muda o site inteiro.
- **JavaScript puro.** O código usa `querySelector`, `addEventListener` e `classList`, que são a base do DOM. Cada arquivo de `js/` lê os elementos pelo `id`, escuta o evento e atualiza a tela.
- **Validação no próprio HTML.** Os campos usam `required`, `min` e `max`, e o navegador barra valores absurdos (como altura 170 no IMC) antes de o JavaScript rodar. Veja [Validação de formulários](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Forms/Form_validation).
- **Acessibilidade:**
  - As cores de texto e botão têm contraste mínimo de 4,5:1 ([WCAG 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)).
  - O foco do teclado fica sempre visível.
  - Os resultados usam `role="status"`, que faz leitores de tela anunciarem a mudança ([live regions, em inglês](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)).
  - A barra de água usa `role="progressbar"`.
  - Cada página tem um `h1`, e o menu marca a página atual com `aria-current`.
- **Animações respeitam o sistema.** Os movimentos usam `motion-safe:`, então quem ativou "reduzir movimento" no sistema operacional não os vê.

## Limitações e próximos passos

- O Tailwind via CDN serve para estudo e demonstração. Em um site de verdade, o caminho é a [instalação com o Tailwind CLI](https://tailwindcss.com/docs/installation/tailwind-cli), que gera só o CSS usado.
- O menu e o rodapé estão repetidos em cada página. Uma mudança no menu exige editar os 4 arquivos.
- Ideias para evoluir: guardar o total de água no `localStorage`, calcular a meta de água a partir do peso e adicionar o botão de desfazer no "Zerar".

## Referências

- [MDN Web Docs em português](https://developer.mozilla.org/pt-BR/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [WCAG 2.2: guia rápido](https://www.w3.org/WAI/WCAG22/quickref/)
- [Equação de Harris-Benedict e Mifflin-St Jeor](https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation)
- [Índice de massa corporal](https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal)
