//VOCÊS JÁ USARAM CALLBACKS NA SEMANA 04
//Todo método avançado de array recebe um callback.
//Eles são SÍNCRONOS: rodam na hora, na ordem, e só depois o programa continua.

const numeros = [5, 3, 7, 2];

//FOREACH - o callback recebe cada elemento
numeros.forEach(function (numero) {
  console.log("forEach: ", numero);
});

//A MESMA COISA COM ARROW FUNCTION, mais curto
const dobro = numeros.map((n) => n * 2);
console.log("map: ", dobro);

//FILTER
const maiores = numeros.filter((n) => n > 3);
console.log("filter: ", maiores);

//FIND
const encontrado = numeros.find((n) => n === 7);
console.log("find: ", encontrado);

//EVERY
const todosPositivos = numeros.every((n) => n > 0);
console.log("every: ", todosPositivos);

//REDUCE
const soma = numeros.reduce((total, n) => total + n, 0);
console.log("reduce: ", soma);

console.log("--------------------------------------------------");

//EM TODOS ELES, O CALLBACK É A FUNÇÃO QUE VAI DENTRO DOS PARÊNTESES
//map(  (n) => n * 2  )
//      -----------
//      isto é o callback
console.log("o programa só chega aqui depois que todos terminaram");
