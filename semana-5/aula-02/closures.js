//CLOSURE
//É a função que continua lembrando das variáveis do escopo onde nasceu,
//mesmo depois que esse escopo terminou.

function criarContador() {
  let total = 0; //esta variável fica "guardada"

  return function () {
    total++;
    return total;
  };
}

const cliques = criarContador();

console.log("primeira chamada: ", cliques());
console.log("segunda chamada:  ", cliques());
console.log("terceira chamada: ", cliques());

/**
 * Quando criarContador() termina, normalmente a variável total
 * seria descartada. Mas a função retornada ainda a utiliza,
 * então o JavaScript a mantém viva na memória.
 */

console.log("--------------------------------------------------");

//CADA CONTADOR TEM O SEU PRÓPRIO total
const maquinaA = criarContador();
const maquinaB = criarContador();

console.log("máquina A: ", maquinaA(), maquinaA(), maquinaA());
console.log("máquina B: ", maquinaB());

//o total não pode ser acessado de fora
console.log("tentando acessar o total: ", maquinaA.total);

/**
 * Closure no dia a dia:
 * - máquina de café: conta quantos cafés tirou, mas você só aperta o botão
 * - caixa eletrônico: o saldo existe, mas você só deposita, saca e consulta
 * - crachá: continua lembrando de qual empresa o emitiu
 */
