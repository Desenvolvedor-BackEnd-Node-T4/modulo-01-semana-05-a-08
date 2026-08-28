//Exercicio 1 - Gerador de saudacao
//Crie criarSaudacao(unidade) que retorne uma funcao recebendo o nome do cliente.

function criarSaudacao(unidade) {
  //"unidade" fica guardada no closure da funcao devolvida
  return function (nome) {
    console.log(`Ola ${nome}, bem-vindo a unidade ${unidade}!`);
  };
}

const sc = criarSaudacao("Florianopolis");
const sp = criarSaudacao("Sao Paulo");

sc("Maria");
sc("Joao");
sp("Ana");

console.log("--------------------------------------------------");

//Exercicio 2 - Cofre com senha
//Crie criarCofre(senha) com uma variavel privada conteudo.

function criarCofre(senha) {
  let conteudo = null; //privado: so existe aqui dentro

  return {
    guardar(valor, tentativa) {
      if (tentativa !== senha) return "Acesso negado";
      conteudo = valor;
      return "Guardado com sucesso";
    },
    abrir(tentativa) {
      if (tentativa !== senha) return "Acesso negado";
      return conteudo;
    },
  };
}

const cofre = criarCofre("1234");

console.log(cofre.guardar("Documento secreto", "0000"));
console.log(cofre.guardar("Documento secreto", "1234"));
console.log(cofre.abrir("9999"));
console.log(cofre.abrir("1234"));
console.log("conteudo por fora: ", cofre.conteudo);

console.log("--------------------------------------------------");

//Exercicio 3 - Calculadora curried
//Crie aplicarTaxa(percentual) que retorne uma funcao recebendo o frete.

function aplicarTaxa(percentual) {
  return function (frete) {
    return frete + frete * percentual;
  };
}

const taxaSul = aplicarTaxa(0.05);
const taxaNorte = aplicarTaxa(0.12);
const taxaSudeste = aplicarTaxa(0.08);

console.log("Sul:     ", taxaSul(200));
console.log("Norte:   ", taxaNorte(200));
console.log("Sudeste: ", taxaSudeste(200));

console.log("--------------------------------------------------");

//Desafio - Sistema bancario com closure
//Crie criarConta(titular) com saldo privado e contas independentes.

function criarConta(titular) {
  let saldo = 0;
  const historico = [];

  return {
    depositar(valor) {
      if (valor <= 0) return "Deposito precisa ser maior que zero";
      saldo += valor;
      historico.push(`+ R$ ${valor}`);
      return saldo;
    },
    sacar(valor) {
      if (valor <= 0) return "Saque precisa ser maior que zero";
      if (valor > saldo) return "Saldo insuficiente";
      saldo -= valor;
      historico.push(`- R$ ${valor}`);
      return saldo;
    },
    extrato() {
      return `${titular} | saldo: R$ ${saldo} | ${historico.join(", ")}`;
    },
  };
}

const contaMaria = criarConta("Maria");
const contaJoao = criarConta("Joao");

contaMaria.depositar(500);
contaMaria.sacar(120);
contaJoao.depositar(1000);

console.log(contaMaria.extrato());
console.log(contaJoao.extrato());
console.log("saldo por fora:    ", contaMaria.saldo);
console.log("saque alto:        ", contaMaria.sacar(9999));
console.log("deposito negativo: ", contaJoao.depositar(-50));
