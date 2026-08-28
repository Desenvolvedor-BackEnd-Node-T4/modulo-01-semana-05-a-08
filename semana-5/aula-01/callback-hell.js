//O PROBLEMA: CALLBACK HELL
//Quando uma tarefa depende da anterior, os callbacks começam a aninhar
//e o código vira uma pirâmide.

function fazerPedido(aoConcluir) {
  setTimeout(() => {
    console.log("1. Pedido realizado");
    aoConcluir();
  }, 1000);
}

function prepararPedido(aoConcluir) {
  setTimeout(() => {
    console.log("2. Pedido em preparo");
    aoConcluir();
  }, 1000);
}

function entregarPedido(aoConcluir) {
  setTimeout(() => {
    console.log("3. Pedido entregue");
    aoConcluir();
  }, 1000);
}

//REPARE NA PIRÂMIDE QUE SE FORMA
fazerPedido(() => {
  prepararPedido(() => {
    entregarPedido(() => {
      console.log("Fluxo completo. Está fácil de ler?");
    });
  });
});

/**
 * Por que isso é ruim?
 * - difícil de ler e de manter
 * - difícil de testar e depurar
 * - tratamento de erro repetido em cada nível
 * - a indentação cresce sem controle
 *
 * A solução vem na aula 03: Promises, then() e async/await.
 * Elas transformam a pirâmide em uma sequência lida de cima para baixo.
 */
