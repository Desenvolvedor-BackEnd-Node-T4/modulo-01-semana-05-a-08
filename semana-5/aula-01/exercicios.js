//Exercicio de fixacao - Executor de tarefas
//Crie executarTarefa(nome, callback) que exibe o inicio, executa o callback
//e exibe a conclusao.

function executarTarefa(nome, callback) {
  console.log(`Iniciando: ${nome}`);
  callback();
  console.log(`Concluido: ${nome}`);
}

executarTarefa("Pintura", () => console.log("Aplicando a tinta..."));
executarTarefa("Montagem", () => console.log("Apertando os parafusos..."));

console.log("--------------------------------------------------");

//Exercicio 1 - Calculadora com callback
//Crie calcular(a, b, operacao), em que operacao e um callback.

function calcular(a, b, operacao) {
  return operacao(a, b);
}

console.log("somar:      ", calcular(10, 20, (a, b) => a + b));
console.log("subtrair:   ", calcular(10, 20, (a, b) => a - b));
console.log("multiplicar:", calcular(10, 20, (a, b) => a * b));
console.log("dividir:    ", calcular(10, 20, (a, b) => a / b));

console.log("--------------------------------------------------");

//Exercicio 3 - Relatorio de vendas
//Use forEach, filter e reduce. Identifique o callback em cada um.

const vendas = [
  { produto: "Notebook", valor: 3500 },
  { produto: "Mouse", valor: 120 },
  { produto: "Monitor", valor: 900 },
  { produto: "Teclado", valor: 250 },
];

//o callback do forEach e a funcao (v) => console.log(...)
vendas.forEach((v) => console.log(`${v.produto} - R$ ${v.valor}`));

//o callback do filter e a funcao (v) => v.valor > 500
const acimaDe500 = vendas.filter((v) => v.valor > 500);
console.log("vendas acima de R$ 500: ", acimaDe500);

//o callback do reduce e a funcao (total, v) => total + v.valor
const faturamento = vendas.reduce((total, v) => total + v.valor, 0);
console.log("faturamento total: R$ ", faturamento);

console.log("--------------------------------------------------");

//Exercicio 2 - Cronometro
//Use setInterval com um callback e encerre com clearInterval apos 5 segundos.

let segundos = 0;

const cronometro = setInterval(() => {
  segundos++;
  console.log(`cronometro: ${segundos}s`);

  if (segundos === 5) {
    clearInterval(cronometro);
    console.log("cronometro encerrado");

    //Desafio - Pedido de delivery (encadeado, gera Callback Hell)
    fazerPedido(() => {
      prepararPedido(() => {
        entregarPedido(() => {
          console.log("Fluxo completo. Repare no aninhamento: isso e Callback Hell.");
        });
      });
    });
  }
}, 1000);

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
