import { createNewArray, preencherVetor, showVetor } from './\array_utils.js';
import { get_number_positive } from './\io_utils.js'


function main() {
    const tamanho = get_number_positive('Insira o tamanho do vetor: ')
    var vetor_a = createNewArray(tamanho)
    var vetor_b = createNewArray(tamanho)

    console.log('****Preencha o vetor****')
    preencherVetor(vetor_a)

    for (let index = tamanho-1; index >= 0; index--) {
        vetor_b[tamanho - 1 - index] = vetor_a[index]
    }

    showVetor('Este é o vetor A:', vetor_a)

    showVetor('Este é o vetor B:', vetor_b)

}

main()