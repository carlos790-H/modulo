import { somar } from "./somar.mjs";
import { multiplicar } from "./multiplicar.mjs";
import { menos } from "./menos.mjs";
import { divisao } from "./divisao.mjs";
import { pontenciacao } from "./potenciacao.mjs";



const numero1 = 5;
const numero2 = 3;

const resultadoSoma = somar(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);
const resultadomenos = menos(numero1, numero2);
const resultadodivisao = divisao(numero1, numero2);
const resultadopontenciacao = pontenciacao(numero1, numero2);



console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} * ${numero2} = ${resultadoMultiplicacao}`);
console.log(`${numero1} - ${numero2} = ${resultadomenos}`);
console.log(`${numero1} / ${numero2} = ${resultadodivisao}`);
console.log(`${numero1} ^ ${numero2} = ${resultadopontenciacao}`);