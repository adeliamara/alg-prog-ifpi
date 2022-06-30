//Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
//fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

import {print, input} from './\io_utils.js';

function main(){
    //entrada
    const qtd_anos = Number(input('Digite o o número de anos: '));
    const qtd_cigarro_dia = Number(input('Digite o número de cigarros fumados por dia: '));
    const preco_carteira = Number(input('Digite o valor da carteira de cigarros: '));


    //processamento;=
    const dias = qtd_anos * 365 + Math.floor(qtd_anos/4)
    const qtd_cigarros_total = dias * qtd_cigarro_dia;
    var valor = preco_carteira * Math.floor(qtd_cigarros_total/20)
    if (qtd_cigarros_total % 20 != 0){
        valor = valor + preco_carteira;
    }


    //resultado
    print(`O total gasto é =  ${valor}`);

}

main()

