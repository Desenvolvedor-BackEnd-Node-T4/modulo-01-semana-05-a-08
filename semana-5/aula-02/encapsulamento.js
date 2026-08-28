//ENCAPSULAMENTO COM CLOSURE
//Expor apenas as operações e manter o dado protegido.

function criarConta(titular) {
  let saldo = 0; //privada: não sai daqui

  return {
    depositar(valor) {
      if (valor <= 0) return "Valor inválido";
      saldo += valor;
      return saldo;
    },
    sacar(valor) {
      if (valor > saldo) return "Saldo insuficiente";
      saldo -= valor;
      return saldo;
    },
    consultar: () => `${titular}: R$ ${saldo}`,
  };
}

const conta = criarConta("Maria");

conta.depositar(500);
conta.sacar(120);

console.log("consultar:    ", conta.consultar());
console.log("saldo direto: ", conta.saldo);

/**
 * conta.saldo devolve undefined porque saldo NÃO é propriedade do objeto:
 * é uma variável presa dentro de criarConta.
 * As únicas portas de entrada são depositar, sacar e consultar.
 */

console.log("--------------------------------------------------");

//DUAS CONTAS SÃO INDEPENDENTES
const contaJoao = criarConta("João");
contaJoao.depositar(1000);

console.log(conta.consultar());
console.log(contaJoao.consultar());

/**
 * Onde closures aparecem na prática:
 * - React, Vue e Angular: hooks como useState guardam estado em closures
 * - Node.js: cada requisição recebe um callback que lembra do seu contexto
 * - Eventos: o callback registrado continua enxergando as variáveis de quando foi criado
 * - Promises: o then() executa depois, mas ainda acessa o escopo original
 */
