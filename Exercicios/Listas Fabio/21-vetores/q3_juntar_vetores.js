import { createNewArray, preencherVetor, showVetor } from './\array_utils.js';
import { get_number_positive } from './\io_utils.js'


function main() {
    const tamanho = get_number_positive('Insira o tamanho do vetor: ')
    var vetor_a = createNewArray(tamanho)
    var vetor_b = createNewArray(tamanho)

    console.log('****Preencha o vetor A****')
    preencherVetor(vetor_a)
    console.log('****Preencha o vetor B****')
    preencherVetor(vetor_b)

    const vetor_c = concatenarVetores(vetor_a, vetor_b) 

    showVetor('Este é o vetor A:', vetor_a)
    showVetor('Este é o vetor B:', vetor_b)
    showVetor('Este é o vetor C:', vetor_c)


}

function concatenarVetores(vetor_a, vetor_b){
    const tamanho = vetor_a.length
    let vetor_c = createNewArray(tamanho*2)
    for (let index = 0; index < tamanho * 2; index++) {
        if(index<tamanho){
            vetor_c[index] = vetor_a[index]
            continue
        }
        vetor_c[index] = vetor_b[index - tamanho]
    }
    return vetor_c
}

main()