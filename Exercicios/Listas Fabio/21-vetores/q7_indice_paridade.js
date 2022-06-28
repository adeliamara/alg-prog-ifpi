import { createNewArray, showVetor, fillArrayRandomNumber } from './\array_utils.js';
import { get_number_positive } from './io_utils.js';


function main() {
    const tamanho = get_number_positive('Insira o tamanho do vetor: ')
    var vetor_a = createNewArray(tamanho)
    var vetor_b = createNewArray(tamanho)

    fillArrayRandomNumber(0, 10, vetor_a)
    showVetor('vetor a:', vetor_a)

    preencherVetorParidade(vetor_a, vetor_b)
    showVetor('vetor b:', vetor_b)

}


function preencherVetorParidade(vetor_a, vetor_b) {
    
    for (let index = 0; index < vetor_a.length; index++) {
        if (elementoEhPar(vetor_a[index])) {
            vetor_b[index] = 0
        } else {
            vetor_b[index] = 1
        }
    }
}


const elementoEhPar = elemento => elemento % 2 === 0

main()