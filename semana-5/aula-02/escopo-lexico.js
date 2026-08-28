//ESCOPO LEXICO
//Uma funcao enxerga as variaveis do lugar ONDE ELA FOI ESCRITA,
//nao de onde ela e chamada.

const nivel1 = "global";

function externa() {
  const nivel2 = "externa";

  function interna() {
    const nivel3 = "interna";

    //a funcao interna enxerga os tres niveis
    console.log("interna enxerga nivel1: ", nivel1);
    console.log("interna enxerga nivel2: ", nivel2);
    console.log("interna enxerga nivel3: ", nivel3);
  }

  interna();

  //mas a externa NAO enxerga o que foi declarado dentro da interna
  try {
    console.log(nivel3);
  } catch (erro) {
    console.log("erro esperado: ", erro.message);
  }
}

externa();

/**
 * Uma funcao consegue acessar:
 * - as suas proprias variaveis
 * - as variaveis da funcao que a contem
 * - as variaveis globais
 *
 * O caminho contrario nao existe.
 *
 * No dia a dia: um comodo enxerga o que esta na casa inteira,
 * mas a casa nao enxerga o que voce guardou dentro da gaveta do quarto.
 */
