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
        enunciado: "Com a descoberta desta tecnologia uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre IA. No fim de uma aula ela pede que Gabriel escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude Gabriel toma?",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
        enunciado: "Depois que Gabriel escreveu o trabalho, teve uma discussão sobre o impacto da IA no trabalho do futuro o que Gabriel faz:",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    enunciado: "Ao final da discussão, Gabriel precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?";
    alternativas: ["alternativa 1", "alternativa 2"]
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
 