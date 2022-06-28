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

export function setValueArray(value, array){
    fillArrayRandomNumber(value, value, array)
}

export const selectSizeArray = array => array.length