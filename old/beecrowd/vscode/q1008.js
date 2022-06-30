import {print, input} from './\io_utils.js';

function main(){
    
    const num_funcionario = Number(input('Entre com o numero do funcionario '));
    const horas_trabalhadas = Number(input('Entre com a quantidade de horas trabalhadas '));
    const valor_hora = Number(input('Entre com o valor da hora '));

    const salario = horas_trabalhadas * valor_hora
    
    console.log(`NUMBER = ${num_funcionario}`);
    console.log(`SALARY = U$ ${salario.toFixed(2)}`);

}

main()