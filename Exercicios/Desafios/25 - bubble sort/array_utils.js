import { get_number, get_random_number } from "./io_utils.js"

export function createNewArray(tamanho) {
    const vetor = new Array(tamanho)

    return vetor
}

/** 
 * prenche e retorna o vetor
 * */
export function preencherVetor(array) {
    for (let index = 0; index < array.length; index++) {
        array[index] = get_number(`\t > Insira o elemento da posicao ${index} do vetor: `)
    }
    return array
}


export function showVetor(text, array) {
    console.log(text)
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

export function fillArrayRandomNumber(minimo, maximo, array) {
    for (let index = 0; index < array.length; index++) {
        array[index] = get_random_number(minimo, maximo)
    }
    return array
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