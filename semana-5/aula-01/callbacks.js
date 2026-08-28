//CALLBACK E A FUNCAO QUE ENTREGAMOS PARA OUTRA FUNCAO EXECUTAR
//Quem decide a hora de executar e quem recebeu, nao quem entregou.

function executarTarefa(nome, aoConcluir) {
  console.log(`Iniciando: ${nome}`);
  aoConcluir();
  console.log(`Concluido: ${nome}`);
}

executarTarefa("Pintura", () => {
  console.log("Aplicando a tinta...");
});

executarTarefa("Limpeza", () => {
  console.log("Passando o pano...");
});

console.log("--------------------------------------------------");

//ERRO CLASSICO: callback  x  callback()
function dizerOla() {
  return "Ola!";
}

function receber(funcao) {
  console.log("recebi: ", funcao);
}

//ERRADO - com parenteses voce CHAMA a funcao e entrega o resultado
receber(dizerOla());

//CORRETO - sem parenteses voce ENTREGA a funcao
receber(dizerOla);

/**
 * Regra pratica:
 * com parenteses  -> voce chama a funcao agora
 * sem parenteses  -> voce entrega a funcao para ser chamada depois
 *
 * Analogia: dar a receita para alguem cozinhar depois e diferente
 * de entregar o bolo pronto.
 */
