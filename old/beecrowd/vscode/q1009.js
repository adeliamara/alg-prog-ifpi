import {print, input} from './\io_utils.js';

function main(){
    const nome_vendedor = input('Entre com o nome do funcionario ');
    const salario_fixo = Number(input('Entre com o salario '));
    const total_vendas = Number(input('Entre com o total das vendas em dinheiro '));

    const salario = salario_fixo + total_vendas *0.15
    
    console.log(`TOTAL = R$ ${salario.toFixed(2)}`);

}

main()