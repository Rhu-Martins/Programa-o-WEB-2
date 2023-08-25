// Seleciona o botão que será clicado para trocar o fundo
const trocarBackgroundButton = document.getElementById('trocarBackground');

// Pega a referência para o elemento <body> do documento HTML que vinculado ao css
const body = document.body;

// Define um array com URLs das imagens de fundo
const imagensDeFundo = ["../../img/textura.jpg", "../../img/textura4.jpg"];

// Inicializa um índice para rastrear a imagem de fundo atual
let indexAtual = 0;

// Adiciona um ouvinte de evento de clique ao botão
trocarBackgroundButton.addEventListener('click', 

function () {
    // Incrementa o índice para selecionar a próxima imagem de fundo no array
    indexAtual = (indexAtual + 1) % imagensDeFundo.length;

    // Obtém o URL da nova imagem de fundo com base no índice atual
    const novaImagemDeFundo = imagensDeFundo[indexAtual];

    // Define a nova imagem de fundo para o elemento <body>
    body.style.backgroundImage = `url(${novaImagemDeFundo})`;
});
