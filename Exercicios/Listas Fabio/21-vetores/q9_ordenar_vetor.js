import { createNewArray, fillArrayRandomNumber, showVetor } from './\array_utils.js';
import { get_number_positive } from './io_utils.js';


function main() {
    const tamanho = get_number_positive('Insira o tamanho do vetor: ')
    var vetor = createNewArray(tamanho)

    fillArrayRandomNumber(-10,10,vetor)
    showVetor('vetor original:', vetor)

    sortArrayBooble(vetor)
    showVetor('vetor ordenado:', vetor)

}


/** 
*modifica o vetor original 
*/
function sortArrayBooble(array) {
    let ocorreuTroca = false
    let auxiliar
    let contador = 0

    for (let index = 0; index < array.length; index++) {
        ocorreuTroca = false
        for (let j = 0; j < array.length - index; j++) {
            contador += 1

            if (array[j] > array[j + 1]) {
                auxiliar = array[j]
                array[j] = array[j + 1]
                array[j + 1] = auxiliar
                ocorreuTroca = true
            }
        }

        if (!ocorreuTroca) {
            break
        }

    }
    console.log(` rodou ${contador} vezes`)
}

main()