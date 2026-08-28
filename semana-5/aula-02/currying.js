//CURRYING
//Transforma f(a, b) em f(a)(b), permitindo fixar parametros
//e reaproveitar a funcao ja configurada.

const multiplicar = (a) => (b) => a * b;

const dobrar = multiplicar(2);
const triplicar = multiplicar(3);

console.log("dobrar 10:    ", dobrar(10));
console.log("triplicar 10: ", triplicar(10));

console.log("--------------------------------------------------");

//EXEMPLO PRATICO: taxa de frete por regiao
function aplicarTaxa(percentual) {
  return function (frete) {
    return frete + frete * percentual;
  };
}

const taxaSul = aplicarTaxa(0.05);
const taxaNorte = aplicarTaxa(0.12);
const taxaSudeste = aplicarTaxa(0.08);

const frete = 200;
console.log("Sul:     ", taxaSul(frete));
console.log("Norte:   ", taxaNorte(frete));
console.log("Sudeste: ", taxaSudeste(frete));

console.log("--------------------------------------------------");

//COMPOSICAO
//Encadeia funcoes pequenas para formar uma transformacao maior:
//o resultado de uma alimenta a proxima, como uma linha de montagem.

const limpar = (t) => t.trim();
const maiusculo = (t) => t.toUpperCase();
const exibir = (t) => `>> ${t}`;

const formatar = (t) => exibir(maiusculo(limpar(t)));

console.log(formatar("   node.js   "));

/**
 * A regra do calculo foi escrita UMA vez.
 * As tres taxas nao sao tres funcoes copiadas com numeros diferentes:
 * sao tres configuracoes da mesma funcao.
 */
