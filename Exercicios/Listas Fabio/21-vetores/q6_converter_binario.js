import { createNewArray,showVetor, fillArrayRandomNumber } from './\array_utils.js';


function main() {
    var vetor_a = createNewArray(8)

    fillArrayRandomNumber(0,1,vetor_a)
    showVetor('', vetor_a)
   
    const decimal = converteBinario2Decimal(vetor_a)
    console.log(`${vetor_a}_2 = ${decimal}_10`)
}

function converteBinario2Decimal(array){
    let sum = 0
    const tamanho = array.length
    for (let index = 0; index < tamanho; index++) {
        sum +=  (array[tamanho - index - 1]) * 2 ** index
    }
    return sum
}


main()