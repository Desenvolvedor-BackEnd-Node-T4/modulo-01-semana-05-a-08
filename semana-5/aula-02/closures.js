//CLOSURE
//E a funcao que continua lembrando das variaveis do escopo onde nasceu,
//mesmo depois que esse escopo terminou.

function criarContador() {
  let total = 0; //esta variavel fica "guardada"

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
 * Quando criarContador() termina, normalmente a variavel total
 * seria descartada. Mas a funcao retornada ainda a utiliza,
 * entao o JavaScript a mantem viva na memoria.
 */

console.log("--------------------------------------------------");

//CADA CONTADOR TEM O SEU PROPRIO total
const maquinaA = criarContador();
const maquinaB = criarContador();

console.log("maquina A: ", maquinaA(), maquinaA(), maquinaA());
console.log("maquina B: ", maquinaB());

//o total nao pode ser acessado de fora
console.log("tentando acessar o total: ", maquinaA.total);

/**
 * Closure no dia a dia:
 * - maquina de cafe: conta quantos cafes tirou, mas voce so aperta o botao
 * - caixa eletronico: o saldo existe, mas voce so deposita, saca e consulta
 * - cracha: continua lembrando de qual empresa o emitiu
 */
