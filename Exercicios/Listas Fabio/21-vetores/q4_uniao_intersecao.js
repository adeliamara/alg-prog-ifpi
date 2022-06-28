import { createNewArray, preencherVetor, showVetor, unirVetores, intersecaoVetores } from './\array_utils.js';
import { get_number_positive } from './\io_utils.js'


function main() {
    const tamanho_a = get_number_positive('Insira o tamanho do vetor A: ')
    const tamanho_b = get_number_positive('Insira o tamanho do vetor B: ')
    var vetor_a = createNewArray(tamanho_a)
    var vetor_b = createNewArray(tamanho_b)

    console.log('****Preencha o vetor A****')
    preencherVetor(vetor_a)
    console.log('****Preencha o vetor B****')
    preencherVetor(vetor_b)

    const vetor_c = unirVetores(vetor_a, vetor_b) 
    const vetor_d = intersecaoVetores(vetor_a, vetor_b) 


    showVetor('Este é o vetor A:', vetor_a)
    showVetor('Este é o vetor B:', vetor_b)
    showVetor('Este é o vetor C:', vetor_c)
    showVetor('Este é o vetor D:', vetor_d)

}



main()