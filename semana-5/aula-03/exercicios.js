//Exercício 1 - Promise com sorte
//Crie uma Promise com 50% de chance de resolver e 50% de rejeitar.

function conectar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve("Conectado!");
      else reject("Falha na conexão");
    }, 800);
  });
}

conectar()
  .then((m) => console.log("exercício 1 OK: ", m))
  .catch((e) => console.log("exercício 1 ERRO: ", e))
  .finally(() => console.log("exercício 1 - tentativa encerrada"));

//Exercício 2 - Cardápio do dia
//buscarCardapio() devolve uma Promise com a lista de pratos.
//Filtre os veganos e exiba no formato "nome - R$ preço".

function buscarCardapio() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { nome: "Lasanha", preco: 38, vegano: false },
        { nome: "Risoto de cogumelos", preco: 42, vegano: true },
        { nome: "Salada de grão-de-bico", preco: 26, vegano: true },
        { nome: "Picanha", preco: 75, vegano: false },
      ]);
    }, 1500);
  });
}

async function mostrarVeganos() {
  try {
    const pratos = await buscarCardapio();
    const veganos = pratos.filter((p) => p.vegano);
    const linhas = veganos.map((p) => `${p.nome} - R$ ${p.preco}`);

    linhas.forEach((l) => console.log("exercício 2: ", l));
  } catch (erro) {
    console.log("exercício 2 - não foi possível carregar: ", erro);
  }
}

//Exercício 3 - Pedido em duas etapas
//Duas Promises em sequência. Repare no tempo total somando.

function aceitarPedido() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) resolve("Pedido aceito pela cozinha");
      else reject("A cozinha recusou o pedido");
    }, 1000);
  });
}

function entregarPedido() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Pedido entregue!"), 1000);
  });
}

async function acompanharPedido() {
  console.time("exercício 3 - total");
  try {
    console.log("exercício 3: ", await aceitarPedido());
    console.log("exercício 3: ", await entregarPedido());
  } catch (erro) {
    console.log("exercício 3 ERRO: ", erro);
  } finally {
    console.timeEnd("exercício 3 - total");
  }
}

//Desafio - Fila de pedidos
//Prepare 4 pedidos, um de cada vez, e mostre o resumo no final.

function prepararPedido(nome) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${nome} pronto`), 1000);
  });
}

async function processarFila() {
  const pedidos = ["X-salada", "Batata frita", "Milkshake", "Suco"];
  const prontos = [];

  console.time("desafio - fila");

  for (let i = 0; i < pedidos.length; i++) {
    const resultado = await prepararPedido(pedidos[i]);
    console.log("desafio: ", resultado);
    prontos.push(resultado);
  }

  console.timeEnd("desafio - fila");
  console.log(`desafio - resumo: ${prontos.length} pedidos -> ${prontos.join(", ")}`);

  //Por que deu cerca de 4 segundos?
  //Porque cada await espera a volta anterior terminar.
}

//Executa os exercícios em sequência para a saída ficar legível
async function main() {
  await mostrarVeganos();
  await acompanharPedido();
  await processarFila();
}

main();
