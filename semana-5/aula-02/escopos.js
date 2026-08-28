//ESCOPO E A REGIAO DO CODIGO EM QUE UMA VARIAVEL EXISTE

//ESCOPO GLOBAL - declarada fora de qualquer funcao
const empresa = "LAB365";

//ESCOPO LOCAL (DE FUNCAO) - so existe enquanto a funcao executa
function registrar() {
  const setor = "TI";
  console.log("dentro da funcao: ", empresa, setor);
}

registrar();

//A variavel setor nao existe aqui fora
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

//let e const NAO vazam
try {
  console.log(protegida);
} catch (erro) {
  console.log("erro esperado: ", erro.message);
}

/**
 * Padrao recomendado hoje:
 * const  por padrao
 * let    quando precisa reatribuir
 * var    nunca
 */
