import {input} from './\io_utils.js';

function main(){

    //entrada
    const numeros = input('Digite os numeros separados por espaço: ')

    const average = calc_average(numeros)
    console.log(average)

}

function calc_average(n){
    const numeros = n.split(' ').map(Number)  
    const soma = numeros.reduce((acumulado, elemento_atual)=> acumulado + elemento_atual,0)
    return soma/numeros.length
}


main()
