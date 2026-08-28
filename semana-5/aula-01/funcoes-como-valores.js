//EM JAVASCRIPT, FUNÇÃO TAMBÉM É UM VALOR
//Assim como um número ou uma string, ela pode ser guardada,
//passada adiante e devolvida.

//1. GUARDADA EM UMA VARIÁVEL
const saudacao = function (nome) {
  return `Olá, ${nome}!`;
};

console.log("função guardada em variável: ", saudacao("Maria"));

//2. PASSADA COMO ARGUMENTO PARA OUTRA FUNÇÃO
function executar(funcao) {
  console.log("executando a função recebida...");
  console.log("resultado: ", funcao("João"));
}

executar(saudacao);

//3. RETORNADA POR OUTRA FUNÇÃO
function criarSaudacao(idioma) {
  if (idioma === "pt") {
    return (nome) => `Olá, ${nome}!`;
  }
  return (nome) => `Hello, ${nome}!`;
}

const emPortugues = criarSaudacao("pt");
const emIngles = criarSaudacao("en");

console.log("função retornada (pt): ", emPortugues("Ana"));
console.log("função retornada (en): ", emIngles("Ana"));

//A FUNÇÃO TEM TIPO "function"
console.log("tipo de saudacao: ", typeof saudacao);
