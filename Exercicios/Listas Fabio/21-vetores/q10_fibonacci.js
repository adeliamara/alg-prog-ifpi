import { createNewArray, fillArrayRandomNumber, showVetor } from './\array_utils.js';
import { get_number_positive } from './io_utils.js';


function main() {
    const tamanho = get_number_positive('Insira o tamanho do vetor: ')
    var vetor = createNewArray(tamanho)

    fillArrayWithFibonacci(vetor)

    showVetor('sequencia de fibonacci: ', vetor)
}

function fillArrayWithFibonacci(array){
    array[0] = 0
    array[1] = 1
    for(let i = 2; i < array.length; i++){
        array[i] = array[i-1] + array[i-2]
    }
}

main()