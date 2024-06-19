const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultados = document.querySelector('.texto-resultados');
const lista = [item1, item2]
const perguntas = [
    {
        enunciado: "Assim que saiu da escola Gabriel se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, o chat também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento de Gabriel?
",
        alternativas: ["Isso é assustador!", "Alternativa 2"],
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    },
];
let atual = 0;
let perguntaAtual;
function mostrapergunta(){
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraalternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternstivas = document. createElement("button");
        botaoAlternstivas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternstivas);
    }
}
mostrapergunta();
const lapis = {
   tamanho: 20,
   tipo: 'HB',
   cor: 'Grafite',
   temBorrachaAtras: false
}