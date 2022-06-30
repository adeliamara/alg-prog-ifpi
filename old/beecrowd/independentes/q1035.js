import {print, input} from './\io_utils.js';


function main(){
    const linha = input('Entre com os numeros A, B, C, D: ')
    const elementos = linha.split(' ')

    const A = Number(elementos[0])
    const B = Number(elementos[1])
    const C = Number(elementos[2])
    const D = Number(elementos[3])

    let aceitos = 0

    if(B>C && D>A){
        if(C+D > A+B){
            if (C>=0 && D>=0){
                if(A%2==0){
                    console.log('Valores aceitos')
                }
                else  console.log('Valores não aceitos')

            }
            else  console.log('Valores não aceitos')
        }
        else  console.log('Valores não aceitos')
    }
    else  console.log('Valores não aceitos')

    


}

main()