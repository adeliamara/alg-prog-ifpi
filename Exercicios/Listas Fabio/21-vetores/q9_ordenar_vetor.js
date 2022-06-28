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



main()