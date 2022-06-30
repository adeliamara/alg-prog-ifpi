import {input} from './\io_utils.js';

function main(){
    //entrada
    const numeros = input('Entre com os 5 numeros separados por espaço:')

    //processamento
    const maior = verificar_maior(numeros)
    const menor = verificar_menor(numeros)
    console.log(`${maior} é o maior e ${menor} é o menor`)
}

function verificar_maior(numeros){
    let num = numeros.split(' ').map(Number)
    num = num.sort((a,b)=> b-a)
    return num[0]
}

function verificar_menor(numeros){
    let num = numeros.split(' ').map(Number)
    num = num.sort((a,b)=> a-b)
    return num[0]
}


main()
