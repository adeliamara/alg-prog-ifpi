import { createNewArray,showVetor, fillArrayRandomNumber } from './\array_utils.js';


function main() {
    var vetor_a = createNewArray(20)

    fillArrayRandomNumber(0,100,vetor_a)
    showVetor('Este é o vetor A:', vetor_a)
   
    const sum = aplicar_somatorio_especial(vetor_a)
    console.log(sum)
}

function aplicar_somatorio_especial(array){
    let sum = 0
    const tamanho = array.length
    for (let index = 0; index < tamanho/2; index++) {
        sum +=  (array[index] - array[tamanho - index - 1]) ** 2
    }
    return sum
}


main()