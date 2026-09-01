//SÍNCRONO x ASSÍNCRONO
//Assíncrono é não ficar parado esperando enquanto algo demorado acontece.

//SÍNCRONO: cada linha espera a anterior
console.log("Tarefa A");
console.log("Tarefa B");
console.log("Tarefa C");
//Saída: A -> B -> C

console.log("--------------------------------------------------");

//ASSÍNCRONO: a tarefa lenta é agendada e o programa continua
console.log("Tarefa D");
setTimeout(() => console.log("Tarefa E (agendada)"), 2000);
console.log("Tarefa F");
//Saída: D -> F -> E

/**
 * No dia a dia:
 * - pizza no forno: você coloca e vai arrumar a mesa
 * - máquina de lavar: você liga e faz outra tarefa; o apito é o callback
 * - senha do banco: você pega a senha e senta; quando chamam, é atendido
 *
 * O JavaScript tem uma única linha de execução. Se ele parasse para
 * esperar cada tarefa lenta, a aplicação inteira travaria.
 */
