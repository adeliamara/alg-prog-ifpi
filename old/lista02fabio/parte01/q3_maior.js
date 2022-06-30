import {print, input} from './\io_utils.js';

function main(){
    //entrada
    const numeros = input('Entre com os numeros a e b:')

    //processamento
    const [a,b] = numeros.split(' ').map(Number)
    if(a != b){
        const maior = verificar_maior(a,b)
        console.log(`O maior é: ${maior}`)
    }else{
        console.log('São iguais')
    }
}

function verificar_maior(a,b){
    if(a>b){
        return a
    } 
    return b 
}

main()
