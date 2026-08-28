//IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
//Uma funcao que e declarada e executada na mesma hora,
//criando um escopo isolado.

(function () {
  const chaveApi = "123-secreta";
  console.log("configuracao carregada. chave: ", chaveApi);
})();

//a chave nao existe aqui fora
try {
  console.log(chaveApi);
} catch (erro) {
  console.log("erro esperado: ", erro.message);
}

console.log("--------------------------------------------------");

//VERSAO COM ARROW FUNCTION
(() => {
  const inicio = 0;
  console.log("app iniciado. contador em: ", inicio);
})();

/**
 * Para que serve:
 * - criar um escopo isolado imediatamente
 * - evitar poluir o escopo global
 * - proteger variaveis de configuracao
 * - executar uma inicializacao unica
 *
 * No dia a dia: e como montar um quarto provisorio para fazer uma tarefa
 * e desmonta-lo em seguida. Nada do que estava la dentro sobra.
 *
 * Muito comum antes dos modulos do ES6 (import / export).
 */
