//HIGHER-ORDER FUNCTION (FUNÇÃO DE ORDEM SUPERIOR)
//É toda função que RECEBE outra função como parâmetro
//ou que RETORNA uma função.

//1. HOF QUE RECEBE UMA FUNÇÃO
function aplicar(valores, regra) {
  return valores.map(regra);
}

const precos = [100, 250, 80];

const black = aplicar(precos, (p) => p * 0.5);
const natal = aplicar(precos, (p) => p * 0.9);

console.log("preços originais: ", precos);
console.log("black friday:     ", black);
console.log("natal:            ", natal);

console.log("--------------------------------------------------");

//2. HOF QUE RETORNA UMA FUNÇÃO
function criarDesconto(percentual) {
  return (preco) => preco * (1 - percentual);
}

const meia = criarDesconto(0.5);
const dezPorCento = criarDesconto(0.1);

console.log("meia entrada de 40: ", meia(40));
console.log("10% de 40:          ", dezPorCento(40));

/**
 * Vocês já usam HOFs desde a semana 04:
 * map, filter, find, reduce, forEach
 * setTimeout, setInterval
 *
 * A HOF define o esqueleto do processo.
 * O callback define o detalhe que muda em cada caso.
 */
