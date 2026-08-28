//ESCOPO É A REGIÃO DO CÓDIGO EM QUE UMA VARIÁVEL EXISTE

//ESCOPO GLOBAL - declarada fora de qualquer função
const empresa = "LAB365";

//ESCOPO LOCAL (DE FUNÇÃO) - só existe enquanto a função executa
function registrar() {
  const setor = "TI";
  console.log("dentro da função: ", empresa, setor);
}

registrar();

//A variável setor não existe aqui fora
try {
  console.log(setor);
} catch (erro) {
  console.log("erro esperado: ", erro.message);
}

console.log("--------------------------------------------------");

//ESCOPO DE BLOCO - let e const respeitam as chaves { }
if (true) {
  var vaza = "declarada com var";
  let protegida = "declarada com let";
  console.log("dentro do bloco: ", vaza, "|", protegida);
}

//var IGNORA o bloco e vaza para fora
console.log("fora do bloco (var): ", vaza);

//let e const NÃO vazam
try {
  console.log(protegida);
} catch (erro) {
  console.log("erro esperado: ", erro.message);
}

/**
 * Padrão recomendado hoje:
 * const  por padrão
 * let    quando precisa reatribuir
 * var    nunca
 */
