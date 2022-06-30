import {print, input} from './\io_utils.js';


function main(){
    const linha1 = input('digite os tres elementos na linha ')
    const linha2 = input('digite os tres elementos na linha ')
    const elementos1 = linha1.split(' ')
    const elementos2 = linha2.split(' ')
    const peca = Number(elementos1[0]);
    const qtd_peca1 = Number(elementos1[1]);
    const valor_peca1 = Number(elementos1[2]);
    const peca2 = Number(elementos2[0]);
    const qtd_peca2 = Number(elementos2[1]);
    const valor_peca2 = Number(elementos2[2]);

    const valor = qtd_peca1* valor_peca1 +  qtd_peca2* valor_peca2
    
    console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`);

}

main()