//ESCOPO LÉXICO
//Uma função enxerga as variáveis do lugar ONDE ELA FOI ESCRITA,
//não de onde ela é chamada.

const nivel1 = "global";

function externa() {
  const nivel2 = "externa";

  function interna() {
    const nivel3 = "interna";

    //a função interna enxerga os três níveis
    console.log("interna enxerga nivel1: ", nivel1);
    console.log("interna enxerga nivel2: ", nivel2);
    console.log("interna enxerga nivel3: ", nivel3);
  }

  interna();

  //mas a externa NÃO enxerga o que foi declarado dentro da interna
  try {
    console.log(nivel3);
  } catch (erro) {
    console.log("erro esperado: ", erro.message);
  }
}

externa();

/**
 * Uma função consegue acessar:
 * - as suas próprias variáveis
 * - as variáveis da função que a contém
 * - as variáveis globais
 *
 * O caminho contrário não existe.
 *
 * No dia a dia: um cômodo enxerga o que está na casa inteira,
 * mas a casa não enxerga o que você guardou dentro da gaveta do quarto.
 */
