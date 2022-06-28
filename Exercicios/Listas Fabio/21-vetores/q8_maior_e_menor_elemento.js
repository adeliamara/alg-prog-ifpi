import { createNewArray, fillArrayRandomNumber, showVetor} from './\array_utils.js';
import { get_number_positive } from './io_utils.js';


function main() {
    const tamanho = get_number_positive('Insira o tamanho do vetor: ')
    var vetor = createNewArray(tamanho)

    fillArrayRandomNumber(0,10,vetor)
    showVetor('',vetor)

    const [posicao_maior, maior_elemento] = SelectLargerValueAndPosition(vetor)
    const [posicao_menor, menor_elemento] = SelectSmallerValueAndPosition(vetor)

    console.log(`Menor valor: ${menor_elemento}`)
    console.log(`Posicao: ${posicao_menor}`)
    console.log(`Maior valor: ${maior_elemento}`)
    console.log(`Posicao: ${posicao_maior}`)

}

function SelectSmallerValueAndPosition(array) {
    let menor = array[0]
    let posicao = 0
    for (let index = 1; index < array.length; index++) {
        if (array[index] < menor) {
            menor = array[index]
            posicao = index
        }
    }
    return [posicao, menor]
}

function SelectLargerValueAndPosition(array) {
    let maior = array[0]
    let posicao = 0
    for (let index = 1; index < array.length; index++) {
        if (array[index] > maior) {
            maior = array[index]
            posicao = index
        }
    }
    return [posicao, maior]
}

main()