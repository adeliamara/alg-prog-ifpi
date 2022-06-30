//12.Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const salario_atual = Number(input('Insira o salário atual: '));

    //processamento
    const novo_salario = salario_atual * 1.25;

    //resultado
    print(`O novo salário é de ${novo_salario} reais`);

}


main()