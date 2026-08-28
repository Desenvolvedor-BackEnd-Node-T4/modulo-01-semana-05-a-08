//NEM TUDO ACONTECE IMEDIATAMENTE
//Quando a resposta depende do mundo externo, o JavaScript não fica parado esperando.

console.log("Tarefa A");

setTimeout(() => {
  console.log("Tarefa B (agendada para daqui 2 segundos)");
}, 2000);

console.log("Tarefa C");

/**
 * Saída: A -> C -> B
 *
 * A ordem em que você ESCREVE não é necessariamente
 * a ordem em que o programa EXECUTA.
 *
 * Por quê? O JavaScript tem uma única linha de execução.
 * Se ele parasse para esperar cada tarefa lenta,
 * a aplicação inteira travaria.
 */

console.log("--------------------------------------------------");

//ATÉ UM setTimeout DE 0 MILISSEGUNDOS ENTRA NA FILA
console.log("1 - primeiro");

setTimeout(() => {
  console.log("3 - agendado com 0 ms, mas roda por último");
}, 0);

console.log("2 - segundo");

/**
 * O EVENT LOOP
 *
 * 1. Call Stack      - a pilha onde as funções executam, uma por vez
 * 2. Node APIs       - recebem as tarefas demoradas e cuidam delas
 * 3. Callback Queue  - fila onde os callbacks prontos aguardam
 * 4. Event Loop      - se a pilha está vazia, move o próximo da fila para a pilha
 *
 * Event Loop visual: http://latentflip.com/loupe/
 */
