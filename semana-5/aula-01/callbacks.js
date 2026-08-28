//CALLBACK É A FUNÇÃO QUE ENTREGAMOS PARA OUTRA FUNÇÃO EXECUTAR
//Quem decide a hora de executar é quem recebeu, não quem entregou.

function executarTarefa(nome, aoConcluir) {
  console.log(`Iniciando: ${nome}`);
  aoConcluir();
  console.log(`Concluído: ${nome}`);
}

executarTarefa("Pintura", () => {
  console.log("Aplicando a tinta...");
});

executarTarefa("Limpeza", () => {
  console.log("Passando o pano...");
});

console.log("--------------------------------------------------");

//ERRO CLÁSSICO: callback  x  callback()
function dizerOla() {
  return "Olá!";
}

function receber(funcao) {
  console.log("recebi: ", funcao);
}

//ERRADO - com parênteses você CHAMA a função e entrega o resultado
receber(dizerOla());

//CORRETO - sem parênteses você ENTREGA a função
receber(dizerOla);

/**
 * Regra prática:
 * com parênteses  -> você chama a função agora
 * sem parênteses  -> você entrega a função para ser chamada depois
 *
 * Analogia: dar a receita para alguém cozinhar depois é diferente
 * de entregar o bolo pronto.
 */
