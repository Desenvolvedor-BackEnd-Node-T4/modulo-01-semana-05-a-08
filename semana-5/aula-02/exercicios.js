//Exercício 1 - Gerador de saudação
//Crie criarSaudacao(unidade) que retorne uma função recebendo o nome do cliente.

function criarSaudacao(unidade) {
  //"unidade" fica guardada no closure da função devolvida
  return function (nome) {
    console.log(`Olá ${nome}, bem-vindo à unidade ${unidade}!`);
  };
}

const sc = criarSaudacao("Florianópolis");
const sp = criarSaudacao("São Paulo");

sc("Maria");
sc("João");
sp("Ana");

console.log("--------------------------------------------------");

//Exercício 2 - Cofre com senha
//Crie criarCofre(senha) com uma variável privada conteudo.

function criarCofre(senha) {
  let conteudo = null; //privado: só existe aqui dentro

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
console.log("conteúdo por fora: ", cofre.conteudo);

console.log("--------------------------------------------------");

//Exercício 3 - Calculadora curried
//Crie aplicarTaxa(percentual) que retorne uma função recebendo o frete.

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

//Desafio - Sistema bancário com closure
//Crie criarConta(titular) com saldo privado e contas independentes.

function criarConta(titular) {
  let saldo = 0;
  const historico = [];

  return {
    depositar(valor) {
      if (valor <= 0) return "Depósito precisa ser maior que zero";
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
const contaJoao = criarConta("João");

contaMaria.depositar(500);
contaMaria.sacar(120);
contaJoao.depositar(1000);

console.log(contaMaria.extrato());
console.log(contaJoao.extrato());
console.log("saldo por fora:    ", contaMaria.saldo);
console.log("saque alto:        ", contaMaria.sacar(9999));
console.log("depósito negativo: ", contaJoao.depositar(-50));
