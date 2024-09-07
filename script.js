const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a marca da moto DT 180?? ",
        alternativas: [
            {
                texto: "A) HONDA.",
                afirmacao: "1 TENTA NOVAMENTE. "
            },
            {
                texto: "B) YAMAHA.",
                afirmacao: "1 A DT 180 é uma motocicleta com motor 2 tempos fabricada pela Yamaha entre 1981 e 1997."
            }
        ]
    },
    {
        enunciado: "Qual das seguintes motocicletas é fabricada pela Harley Davidson?",
        alternativas: [
            {
                texto: "A) XVS 950 MIDNIGHT STAR .",
                afirmacao: "2 ERROU."
            },
            {
                texto: "B) 883 ROADSTER.",
                afirmacao: "2 BOA COLEGA."
            }
        ]
    },
    {
        enunciado: "Qual destas motos é usada para fazer trilhas/motocross?",
        alternativas: [
            {
                texto: "A) CRF 230.",
                afirmacao: "3 A Honda CRF 230 é uma motocicleta quatro tempos de motocross e trilha, fabricada e comercializada pela Honda."
            },
            {
                texto: "B) XJ6 F.",
                afirmacao: "3 SEU RUIMMM."
            }
        ]
    },
    {
        enunciado: "Qual destas motos apresenta motor de 2 cilindros?",
        alternativas: [
            {
                texto: "A) Ninja 250R",
                afirmacao: "4 Motor 4 tempos, 2 cilindros paralelos."
            },
            {
                texto: "B) CBR 1000RR Fireblade.",
                afirmacao: "4 ESTUDE MAIS E TENTE DE VOLTA!"
            }
        ]
    },
    {
        enunciado: "Qual destas motos tem um motor de 2.300 cilindradas? ",
        alternativas: [
            {
                texto: "A) Rocket III Roadster",
                afirmacao: "5 Um motor com 2.294 cc de puro músculo entregando 146bhp a 5750 rpm e 163ft.lbs."
            },
            {
                texto: "B) Speedmaste",
                afirmacao: "SABE NADA DE MOTO PARCEIRO "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "SUAS RESPOSTAS FORAM ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
