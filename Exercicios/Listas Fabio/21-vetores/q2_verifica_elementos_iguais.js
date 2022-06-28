import { createNewArray, preencherVetor } from "./array_utils.js"
import { get_number_positive } from "./io_utils.js"


function main(){
    const tamanho =  get_number_positive('Insira o tamanho do vetor: ')

    const vetor_a = createNewArray(tamanho)
    preencherVetor(vetor_a)

    if(ha_elementos_repetidos(vetor_a)){
        console.log('Ha elementos repetidos')
    }else{
        console.log('Não ha elementos repetidos')
    }
}

function ha_elementos_repetidos(array){
    let ha_repeticao = false
    let item_comparado = ''
    for (let index = 0; index < array.length; index++) {
        item_comparado = array[index]
        for (let j = index + 1; j < array.length; j++) {
            if(item_comparado === array[j]){
                return true
            }
        }
    }

    return ha_repeticao
}
main()