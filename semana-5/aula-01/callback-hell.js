//O PROBLEMA: CALLBACK HELL
//Quando uma tarefa depende da anterior, os callbacks comecam a aninhar
//e o codigo vira uma piramide.

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

//REPARE NA PIRAMIDE QUE SE FORMA
fazerPedido(() => {
  prepararPedido(() => {
    entregarPedido(() => {
      console.log("Fluxo completo. Esta facil de ler?");
    });
  });
});

/**
 * Por que isso e ruim?
 * - dificil de ler e de manter
 * - dificil de testar e depurar
 * - tratamento de erro repetido em cada nivel
 * - a indentacao cresce sem controle
 *
 * A solucao vem na aula 03: Promises, then() e async/await.
 * Elas transformam a piramide em uma sequencia lida de cima para baixo.
 */
