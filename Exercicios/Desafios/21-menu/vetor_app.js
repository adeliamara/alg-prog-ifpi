import {
     showVetor, selectSizeArray,
    SelectSmallerValueAndPosition, SelectLargerValueAndPosition,
    sumCalculator, mediaCalculator,
    embaralharArray, removerItensIguaisAValor,
    removerItensPorPosicao, editarValorPorPosicao,
} from "./array_utils.js";

import {
    get_number, get_number_in_range, get_number_positive, get_random_number,
    get_text, input, loadFile, writeFile
} from "./io_utils.js";

import {resetarVetor, initialize_array, countAndShowNegativeNumber, countAndShowPositiveNumber,updateArrayWithRules, show_menu} from "./funcionalidades.js"


function main() {
    let option = 1
    let vetor = []

    while (option !== 0) {
        show_menu()
        option = get_number_in_range('Opcao selecionada: ', 0, 25)

        if (option === 1) {
            vetor = initialize_array()
        } else {
            if (vetor.length === 0) console.log('Cuidado! O vetor ainda não foi inicializado. Alguns operações podem nao funcionar. ')
            if (option === 2) {
                showVetor(vetor)
            } else if (option === 3) {
                resetarVetor(vetor)
            } else if (option === 4) {
                console.log('total de elementos = ' + selectSizeArray(vetor))
            } else if (option === 5) {
                const [posicao_maior, maior_elemento] = SelectLargerValueAndPosition(vetor)
                const [posicao_menor, menor_elemento] = SelectSmallerValueAndPosition(vetor)
                console.log(`Menor valor: ${menor_elemento}`)
                console.log(`Posicao: ${posicao_menor}`)
                console.log(`Maior valor: ${maior_elemento}`)
                console.log(`Posicao: ${posicao_maior}`)
            } else if (option === 6) {
                const media = mediaCalculator(vetor)
                console.log(`media = ${media}`)
            } else if (option === 7) {
                const sum = sumCalculator(vetor)
                console.log(`soma = ${sum}`)
            } else if (option === 8) {
                console.log(`O total de numeros negativos eh: ${countAndShowNegativeNumber(vetor)}`)
            } else if (option === 9) {
                console.log(`O total de numeros positivos eh: ${countAndShowPositiveNumber(vetor)}`)
            } else if (option === 10) {
                updateArrayWithRules(vetor)
            } else if (option === 11) {
                let novo_valor = get_number('Insira um novo valor para o vetor')
                vetor.push(novo_valor)
                showVetor(vetor)
            } else if (option === 12) {
                removerItensIguaisAValor(vetor)
            } else if (option === 13) {
                removerItensPorPosicao(vetor)
            } else if (option === 14) {
                editarValorPorPosicao(vetor)
            } else if (option === 15) {
                let title = get_text('Insira o titulo do arquivo: ')
                writeFile(title, "txt", vetor.toString())
            } else {
                writeFile("salvo automaticamente", "txt", vetor.toString())
            }
        }


        input('> Aperte ENTER para continuar...')
        console.clear()
    }
}





main()