//CONSUMINDO UMA PROMISE: then, catch e finally

function entregarPedido() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chegou = Math.random() > 0.3;

      if (chegou) {
        resolve("Pedido entregue!");
      } else {
        reject("Endereço não encontrado");
      }
    }, 2000);
  });
}

entregarPedido()
  .then((mensagem) => {
    //executa quando a Promise é resolvida
    console.log("OK: ", mensagem);
  })
  .catch((erro) => {
    //executa quando a Promise é rejeitada
    console.log("ERRO: ", erro);
  })
  .finally(() => {
    //executa sempre, com sucesso ou com falha
    console.log("Atendimento encerrado");
  });

/**
 * Rode este arquivo várias vezes: a saída muda sozinha,
 * porque o desfecho é sorteado com Math.random().
 *
 * IMPORTANTE: se você remover o .catch() e a Promise for rejeitada,
 * aparece UnhandledPromiseRejection e o processo morre.
 * Erro não tratado some silenciosamente.
 */
