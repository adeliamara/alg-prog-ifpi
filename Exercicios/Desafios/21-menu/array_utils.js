import { get_number, get_number_in_range, get_random_number, input } from "./io_utils.js"

export function createNewArray(tamanho) {
    const vetor = new Array(tamanho)

    return vetor
}

/** 
 * prenche e retorna o vetor
 * */
export function fillArray(minimo, maximo, array) {
    for (let index = 0; index < array.length; index++) {
        array[index] = get_number_in_range(`\t > Insira o elemento da posicao ${index} do vetor: `, minimo, maximo)
    }
    return array
}

export function fillArrayRandomNumber(minimo, maximo, array) {
    for (let index = 0; index < array.length; index++) {
        array[index] = get_random_number(minimo, maximo)
    }
    return array
}


export function showVetor(array) {
    console.log(array)
}


/** 
 * @param operacao 
 * operacao a ser mapeada
 * */
export function map_vetor(vetor, operacao) {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = operacao(vetor[i])
    }

    return vetor
}

/** 
 * @param operacao 
 * operacao a ser mapeada
 * @param valor 
 * valor utilizado na operacao
 * */
export function map_vetor_com_valor(vetor, operacao, valor) {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = operacao(vetor[i], valor)
    }

    return vetor
}

export function unirVetores(vetor_a, vetor_b) {
    const tamanho_a = vetor_a.length
    const tamanho_b = vetor_b.length
    let vetor_c = createNewArray(tamanho_a + tamanho_b)
    for (let index = 0; index < vetor_c.length; index++) {
        if (index < tamanho_a) {
            vetor_c[index] = vetor_a[index]
            continue
        }
        vetor_c[index] = vetor_b[index - tamanho_a]
    }
    return vetor_c
}

export function intersecaoVetores(vetor_a, vetor_b) {
    let vetor_c = []
    for (let index = 0; index < vetor_a.length; index++) {
        for (let j = 0; j < vetor_b.length; j++) {
            if (vetor_a[index] === vetor_b[j]) {
                if (!ehElementoDoVetor(vetor_a[index], vetor_c)) {
                    vetor_c.push(vetor_a[index])
                }
            }
        }
    }
    return vetor_c
}


export function ExcluirElementosVazios(vetor) {
    const filtered = vetor.filter(i => i)
    return filtered
}

export function excluirRepeticoes(array) {
    let item_comparado = ''
    for (let index = 0; index < array.length; index++) {
        item_comparado = array[index]
        for (let j = index + 1; j < array.length; j++) {
            if (item_comparado === array[j]) {
                array.splice(index, 1)
            }
        }
    }
}

export function ehElementoDoVetor(elemento, vetor) {
    for (let index = 0; index < vetor.length; index++) {
        if (elemento === vetor[index]) {
            return true
        }

    }
    return false
}

export function setValueArray(value, array) {
    fillArrayRandomNumber(value, value, array)
}

export const selectSizeArray = array => array.length


/** 
*modifica o vetor original 
*/
export function sortArrayBubble(array, ordem = 'asc') {

    let comparador = ordem === 'asc' ? eh_maior : eh_menor
    let ocorreuTroca = false
    let auxiliar
    let contador = 0

    for (let index = 0; index < array.length; index++) {
        ocorreuTroca = false
        for (let j = 0; j < array.length - index; j++) {
            contador += 1

            if (comparador(array[j], array[j + 1])) {
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
}

const eh_maior = (v1, v2) => v1 > v2
const eh_menor = (v1, v2) => v1 < v2

function resetarVetor(vetor) {
    const newValue = get_number('Insira o novo valor para o vetor: ')
    setValueArray(newValue, vetor)
}

export function SelectSmallerValueAndPosition(array) {
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

export function SelectLargerValueAndPosition(array) {
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

export const sumCalculator = array => array.reduce((soma, itemAtual) => soma += itemAtual, 0)

export const mediaCalculator = array => sumCalculator(array) / array.length

export function embaralharArray(array) {
    let index
    let aux
    for (let i = 0; i < array.length; i++) {
        index = get_random_number(0, array.length - 1)
        aux = array[i]
        array[i] = array[index]
        array[index] = aux
    }
    console.log(array)
    return array

}

export function removerItensIguaisAValor(array) {
    const valor_removido = get_number('Insira o numero a ser removido: ')
    let tamanho = array.length
    let index = 0
    while (index !== tamanho) {
        if (array[index] === valor_removido) {
            array.splice(index, 1)
        } else {
            index++
        }
    }

    console.log(array)

    return array
}

export function removerItensPorPosicao(array, quantidade = 1) {
    const posicao_removida = get_number('Insira a posicao a ser removida: ')

    for (let index = 0; index < array.length; index++) {
        if (index === posicao_removida) {
            array.splice(index, quantidade)
        }
    }
    console.log(array)

    return array
}

export function editarValorPorPosicao(array) {
    const posicao_editada = get_number('Insira a posicao a ser editada: ')
    const novo_valor = get_number('Insira o novo valor na posicao: ')

    array[posicao_editada] = novo_valor
    console.log(array)

    return array
}


