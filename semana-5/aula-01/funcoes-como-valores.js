//EM JAVASCRIPT, FUNCAO TAMBEM E UM VALOR
//Assim como um numero ou uma string, ela pode ser guardada,
//passada adiante e devolvida.

//1. GUARDADA EM UMA VARIAVEL
const saudacao = function (nome) {
  return `Ola, ${nome}!`;
};

console.log("funcao guardada em variavel: ", saudacao("Maria"));

//2. PASSADA COMO ARGUMENTO PARA OUTRA FUNCAO
function executar(funcao) {
  console.log("executando a funcao recebida...");
  console.log("resultado: ", funcao("Joao"));
}

executar(saudacao);

//3. RETORNADA POR OUTRA FUNCAO
function criarSaudacao(idioma) {
  if (idioma === "pt") {
    return (nome) => `Ola, ${nome}!`;
  }
  return (nome) => `Hello, ${nome}!`;
}

const emPortugues = criarSaudacao("pt");
const emIngles = criarSaudacao("en");

console.log("funcao retornada (pt): ", emPortugues("Ana"));
console.log("funcao retornada (en): ", emIngles("Ana"));

//A FUNCAO TEM TIPO "function"
console.log("tipo de saudacao: ", typeof saudacao);
