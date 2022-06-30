import {print, input} from './\io_utils.js';

function main(){
    //entrada
    const numeros = input('Entre com os numeros: ')

    //processamento
    const [a,b,c] = numeros.split(' ').map(Number)
    const contagem = contar_numeros_iguais(a, b, c)

    //resultado
    console.log(`Existem ${contagem} números iguais`)


}

function contar_numeros_iguais(a, b, c){
    let contagem = 0
    if(a==b && b == c){
        return contagem = 3
    } else if(a==b || b == c || a == c ){
        return contagem = 2
    } 
    return contagem = 0
}




main()