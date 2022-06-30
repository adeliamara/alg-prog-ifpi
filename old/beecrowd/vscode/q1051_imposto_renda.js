import {print, input} from './\io_utils.js';

function main(){
    const salario = Number(input('Entre com o salario '));
    let residual = 0
    let imposto_renda = 0

    if(salario>4500){
        imposto_renda = (salario-4500)*0.28
        residual = 4500
    } else residual = salario
    if(residual >3000){
        imposto_renda = imposto_renda + (residual - 3000)*0.18
        residual = 3000
    }
    if(residual>2000 ){
        imposto_renda = imposto_renda + (residual - 2000)*0.08
        residual = 2000
    }
    if(salario <=2000){
        console.log('Isento')
    } else console.log(`R$ ${imposto_renda.toFixed(2)}`)


}

main()