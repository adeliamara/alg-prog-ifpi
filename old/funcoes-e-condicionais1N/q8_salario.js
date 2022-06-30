import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const valor_hora = Number(input('Insira o valor hora: '))
    const horas_trabalhadas = Number(input('Insira o numero de horas trabalhadas: '))

    const salario = valor_hora * horas_trabalhadas

    const valor_IR = calculaIR(salario)
    const valor_INSS = salario * 0.1
    const desconto_FGTS = salario * 0.11

    const total_descontos = valor_IR + valor_INSS

    const salario_com_descontos = salario - total_descontos

    console.log(`Salario = R$ ${salario.toFixed(2)}`)
    console.log(`Valor IR = R$ ${valor_IR.toFixed(2)}`)
    console.log(`Valor INSS = R$ ${valor_INSS.toFixed(2)}`)
    console.log(`total descontos = R$ ${total_descontos.toFixed(2)}`)
    console.log(`Desconto FGTS = R$ ${desconto_FGTS.toFixed(2)}`)
    console.log(`Salario com descontos = R$ ${salario_com_descontos.toFixed(2)}`)
}

function calculaIR(salario){
    if(salario>2500){
        return 0.2 * salario
    }else if(salario===1500){
        return salario * 0.1
    }else if(salario>900){
        return salario * 0.05
    }
    return 0
}


main()