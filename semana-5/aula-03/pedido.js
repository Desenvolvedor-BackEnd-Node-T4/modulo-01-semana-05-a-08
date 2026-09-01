//O EXEMPLO DA AULA, EM 5 ETAPAS
//A mesma função entregarPedido() evoluindo. Leia na ordem, de cima para baixo.

//=====================================================================
//ETAPA 0 - o que vocês já sabiam: callback
//=====================================================================
function entregarPedidoCallback(aoEntregar) {
  setTimeout(() => {
    aoEntregar("Pedido entregue! (callback)");
  }, 1000);
}

entregarPedidoCallback((msg) => console.log("etapa 0: ", msg));

//Pergunta que fica: e se eu quiser fazer DUAS coisas depois?
//E se der errado, para onde mando o erro?

//=====================================================================
//ETAPA 1 - a mesma função, devolvendo um recibo (Promise)
//=====================================================================
function entregarPedidoSimples() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Pedido entregue! (promise)"), 1000);
  });
}

const recibo = entregarPedidoSimples();
console.log("etapa 1 - o recibo é: ", recibo); //Promise { <pending> }

//=====================================================================
//ETAPA 2 - pegando o valor com then()
//=====================================================================
entregarPedidoSimples().then((msg) => console.log("etapa 2: ", msg));

//=====================================================================
//ETAPA 3 - e se der errado? reject e catch
//=====================================================================
function entregarPedido() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chegou = Math.random() > 0.3;

      if (chegou) resolve("Pedido entregue!");
      else reject("Endereço não encontrado");
    }, 1000);
  });
}

entregarPedido()
  .then((msg) => console.log("etapa 3 OK: ", msg))
  .catch((err) => console.log("etapa 3 ERRO: ", err));

//=====================================================================
//ETAPA 4 - a mesma coisa com async / await
//=====================================================================
async function acompanhar() {
  try {
    const msg = await entregarPedido();
    console.log("etapa 4 OK: ", msg);
  } catch (err) {
    console.log("etapa 4 ERRO: ", err);
  }
}

acompanhar();

//=====================================================================
//ETAPA 4b - o bug mais comum: esquecer o await
//=====================================================================
async function acompanharErrado() {
  //usa a versão que sempre resolve, para o exemplo não depender de sorte
  const msg = entregarPedidoSimples(); //FALTOU O await
  console.log("etapa 4b: ", msg); //Promise { <pending> }
}

acompanharErrado();

/**
 * Repare na ORDEM da saída ao rodar este arquivo:
 * os dois Promise { <pending> } aparecem PRIMEIRO, porque são síncronos.
 * Os valores resolvidos chegam depois, quando o Event Loop os libera.
 *
 * E repare que a saída da etapa 4b é idêntica à da etapa 1.
 * É a comanda de novo: faltou o await para esperar o prato.
 */
