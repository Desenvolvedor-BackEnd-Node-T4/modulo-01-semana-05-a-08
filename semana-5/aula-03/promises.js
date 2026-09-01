//PROMISE
//Representa um valor que estará disponível no futuro,
//e que pode dar certo ou dar errado.

function entregarPedido() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pedido entregue!");
    }, 2000);
  });
}

//A PROMISE COMEÇA COMO "pending"
const recibo = entregarPedido();
console.log("recibo: ", recibo);

/**
 * Saída: Promise { <pending> }
 *
 * A comanda do restaurante não é o prato:
 * é a promessa de que o prato vai chegar.
 */

console.log("--------------------------------------------------");

//OS TRÊS ESTADOS
//pending   - a operação começou e ainda não terminou
//fulfilled - deu certo, o valor vai para o then()
//rejected  - falhou, o motivo vai para o catch()

//Uma Promise muda de estado UMA ÚNICA VEZ.

const jaResolvida = new Promise((resolve) => resolve("pronto"));
console.log("já resolvida: ", jaResolvida);

jaResolvida.then((valor) => console.log("valor recebido no then: ", valor));
