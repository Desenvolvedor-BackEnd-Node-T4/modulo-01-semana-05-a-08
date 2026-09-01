//ASYNC / AWAIT
//Permite escrever código assíncrono com aparência de código síncrono.
//É a MESMA Promise, com outra escrita.

function entregarPedido() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chegou = Math.random() > 0.3;

      if (chegou) resolve("Pedido entregue!");
      else reject("Endereço não encontrado");
    }, 2000);
  });
}

//async  - marca a função como assíncrona; ela sempre devolve uma Promise
//await  - pausa a função até a Promise ser resolvida
//         (só pode ser usado dentro de uma função async)

async function acompanhar() {
  try {
    const mensagem = await entregarPedido();
    console.log("OK: ", mensagem);
  } catch (erro) {
    console.log("ERRO: ", erro);
  } finally {
    console.log("Atendimento encerrado");
  }
}

acompanhar();

console.log("o resto do programa continua rodando");

/**
 * A equivalência:
 * then()     ->  await
 * catch()    ->  catch { }
 * finally()  ->  finally { }
 *
 * ERRO MAIS COMUM: esquecer o await.
 * Sem ele a variável recebe a Promise, não o valor.
 * Se aparecer Promise { <pending> } no console, faltou await.
 */
