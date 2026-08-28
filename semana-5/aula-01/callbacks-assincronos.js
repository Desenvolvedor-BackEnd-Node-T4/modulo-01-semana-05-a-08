//NEM TUDO ACONTECE IMEDIATAMENTE
//Quando a resposta depende do mundo externo, o JavaScript nao fica parado esperando.

console.log("Tarefa A");

setTimeout(() => {
  console.log("Tarefa B (agendada para daqui 2 segundos)");
}, 2000);

console.log("Tarefa C");

/**
 * Saida: A -> C -> B
 *
 * A ordem em que voce ESCREVE nao e necessariamente
 * a ordem em que o programa EXECUTA.
 *
 * Por que? O JavaScript tem uma unica linha de execucao.
 * Se ele parasse para esperar cada tarefa lenta,
 * a aplicacao inteira travaria.
 */

console.log("--------------------------------------------------");

//ATE UM setTimeout DE 0 MILISSEGUNDOS ENTRA NA FILA
console.log("1 - primeiro");

setTimeout(() => {
  console.log("3 - agendado com 0 ms, mas roda por ultimo");
}, 0);

console.log("2 - segundo");

/**
 * O EVENT LOOP
 *
 * 1. Call Stack      - a pilha onde as funcoes executam, uma por vez
 * 2. Node APIs       - recebem as tarefas demoradas e cuidam delas
 * 3. Callback Queue  - fila onde os callbacks prontos aguardam
 * 4. Event Loop      - se a pilha esta vazia, move o proximo da fila para a pilha
 *
 * Event Loop visual: http://latentflip.com/loupe/
 */
