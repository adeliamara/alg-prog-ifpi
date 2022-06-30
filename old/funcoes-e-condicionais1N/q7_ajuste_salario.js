
import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const salario_atual = Number(input('Insira o salário atual: '));

    //processamento

    let novo_salario 
    let aumento
    let perncentual_ajuste
    if(salario_atual>0){
        if(salario_atual<=280){
        }else if(salario_atual <=700){
            perncentual_ajuste = 0.15
        }else if(salario_atual <=1500 ){
            perncentual_ajuste = 0.1
        }else{
            perncentual_ajuste = 0.05
        }
        aumento = salario_atual * perncentual_ajuste
        novo_salario = salario_atual + aumento
        console.log(`Salario antigo: ${salario_atual}`)
        console.log(`O salário novo terá ajuste de R$ ${aumento.toFixed(2)} (${perncentual_ajuste*100} %), resultando no novo salário R$ ${novo_salario.toFixed(2)}`)
    }
    else{
        console.log('Por favor, insira um salário valido')
    }
    

}


main()