//ENCAPSULAMENTO COM CLOSURE
//Expor apenas as operacoes e manter o dado protegido.

function criarConta(titular) {
  let saldo = 0; //privada: nao sai daqui

  return {
    depositar(valor) {
      if (valor <= 0) return "Valor invalido";
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
 * conta.saldo devolve undefined porque saldo NAO e propriedade do objeto:
 * e uma variavel presa dentro de criarConta.
 * As unicas portas de entrada sao depositar, sacar e consultar.
 */

console.log("--------------------------------------------------");

//DUAS CONTAS SAO INDEPENDENTES
const contaJoao = criarConta("Joao");
contaJoao.depositar(1000);

console.log(conta.consultar());
console.log(contaJoao.consultar());

/**
 * Onde closures aparecem na pratica:
 * - React, Vue e Angular: hooks como useState guardam estado em closures
 * - Node.js: cada requisicao recebe um callback que lembra do seu contexto
 * - Eventos: o callback registrado continua enxergando as variaveis de quando foi criado
 * - Promises: o then() executa depois, mas ainda acessa o escopo original
 */
