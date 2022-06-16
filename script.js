const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

//efeitos sonoros para melhorar a experiência
var efeitoAcertou = new Audio('acertou.mp3')
var efeitoClique = new Audio('click.mp3')

//função para virar carta
function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

//função que checa se as cartas são iguais
function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        efeitoAcertou.play();
        disableCards();
        return;
    }

    unflipCards();
}

//função que desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

//funcão que desvira as cartas
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1300);
}

//função que reseta o tabuleiro
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//função que embaralha as cartas
(function shuffle() {
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 8);
        card.style.order = ramdomPosition;
    })
})();

//adiciona evento de clique na carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});

//permite individualmente identificar a qual empresa se refere a carta
var bosch1 = window.document.querySelector("#bosch1");
bosch1.addEventListener('click', clicar);
var gp1 = window.document.querySelector("#gp1");
gp1.addEventListener('click', clicar);
var mars1 = window.document.querySelector("#mars1");
mars1.addEventListener('click', clicar);
var arcor1 = window.document.querySelector("#arcor1");
arcor1.addEventListener('click', clicar);
var bosch2 = window.document.querySelector("#bosch2");
bosch2.addEventListener('click', clicar);
var gp2 = window.document.querySelector("#gp2");
gp2.addEventListener('click', clicar);
var mars2 = window.document.querySelector("#mars2");
mars2.addEventListener('click', clicar);
var arcor2 = window.document.querySelector("#arcor2");
arcor2.addEventListener('click', clicar);
var infoEmpresa = window.document.querySelector('.info');
var logo = window.document.querySelector('.logo');  

//identificar a empresa no Box Inferior
function clicar() {
   efeitoClique.play(); 
   switch (this.id){
    case 'gp1':
    case 'gp2':
        infoEmpresa.innerHTML = `Trabalhei no GRUPO PETRÓPOLIS em 2016 como ANALISTA DE PRODUTO, onde gerenciei projetos promocionais e de lançamento de novos produtos.`
        logo.innerHTML = `<img src="./img/gplogo.png">`
        break;
    case 'bosch1':
    case 'bosch2':
        infoEmpresa.innerHTML = `Fui ESTAGIÁRIO na ROBERT BOSCH em 2008, responsável pelo apoio a área comercial, treinamento e rotina administrativa.`
        logo.innerHTML = `<img src="./img/boschlogo.png">`
        break;
    case 'arcor1':
    case 'arcor2':
        infoEmpresa.innerHTML = `Como COORDENADOR DE TRADE-MARKETING na ARCOR em 2020, tive oportunidade de otimizar a operação e fluxo de rotinas administrativas relacionadas a material promocional, NF-e, entre outros projetos.`
        logo.innerHTML = `<img src="./img/arcorlogo.png">`
        break;
    case 'mars1':
    case 'mars2':
        infoEmpresa.innerHTML = `Minha última experiência na área de MARKETING foi na MARS em 2021, onde fui responsável por desenvolver painéis de acompanhamento dos resultados das ações.`
        logo.innerHTML = `<img src="./img/marslogo.png">`
        break;
    default:
        infoEmpresa.innerHTML = `Erro`
        logo.innerHTML = `<img src="./img/ricardo.png">`
}
}

