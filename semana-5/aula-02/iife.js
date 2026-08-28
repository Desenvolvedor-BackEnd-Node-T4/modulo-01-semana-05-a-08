//IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
//Uma função que é declarada e executada na mesma hora,
//criando um escopo isolado.

(function () {
  const chaveApi = "123-secreta";
  console.log("configuração carregada. chave: ", chaveApi);
})();

//a chave não existe aqui fora
try {
  console.log(chaveApi);
} catch (erro) {
  console.log("erro esperado: ", erro.message);
}

console.log("--------------------------------------------------");

//VERSÃO COM ARROW FUNCTION
(() => {
  const inicio = 0;
  console.log("app iniciado. contador em: ", inicio);
})();

/**
 * Para que serve:
 * - criar um escopo isolado imediatamente
 * - evitar poluir o escopo global
 * - proteger variáveis de configuração
 * - executar uma inicialização única
 *
 * No dia a dia: é como montar um quarto provisório para fazer uma tarefa
 * e desmontá-lo em seguida. Nada do que estava lá dentro sobra.
 *
 * Muito comum antes dos módulos do ES6 (import / export).
 */
