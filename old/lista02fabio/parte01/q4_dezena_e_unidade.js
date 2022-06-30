import {print, input} from './\io_utils.js';

function main(){
    //entrada
    const numero = input('Entre com os numero: ')

    //processamento
    const [dezena,unidade] = numero
    if(dezena != unidade){
        console.log(`São diferentes!`)
    }else{
        console.log('São iguais')
    }
}


main()