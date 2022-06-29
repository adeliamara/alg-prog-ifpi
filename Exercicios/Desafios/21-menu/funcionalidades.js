import {
    sortArrayBubble, createNewArray, fillArray,
    fillArrayRandomNumber,  map_vetor_com_valor,
    embaralharArray, setValueArray
} from "./array_utils.js";

import {
    get_number, get_number_in_range, get_number_positive, get_random_number,
    get_text, input, loadFile
} from "./io_utils.js";



export function initialize_array() {
    show_menu_create()
    let option = get_number_in_range('Insira um numero entre 1 e 3: ', 1, 3)

    if (option === 3) {
        console.log('Insira o titulo do arquivo! Lembre: os dados devem ser separados por quebra de linha. ')
        const arquivo = get_text('> ')
        const data = loadFile(arquivo + '.txt')
        return data.split('\r\n').filter(String).map(Number)
    } else {
        const tamanho = get_number_positive('Escolha o tamanho do vetor: ')
        let vetor = createNewArray(tamanho)
        const minimo = get_number('Insira o valor minimo: ')
        const maximo = get_number('Insira o valor maximo: ')
        if (option === 1) {
            fillArrayRandomNumber(minimo, maximo, vetor)
            return vetor
        }
        fillArray(minimo, maximo, vetor)
        return vetor
    }

}

export function countAndShowNegativeNumber(array) {
    let counter = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 0) {
            console.log(array[index])
            counter++
        }
    }
    return counter
}

export function countAndShowPositiveNumber(array) {
    let counter = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] > 0) {
            console.log(array[index])
            counter++
        }
    }
    return counter
}

export function updateArrayWithRules(array) {
    show_menu_rules_update()

    const option = get_number_in_range('opcao selecionada: ', 1, 6)
    let valor

    if (option === 1) {
        valor = get_number('insira a constante de multiplicao: ')
        console.log('antes da alteração:', array)
        map_vetor_com_valor(array, produto, valor)
        console.log(`vetor * ${valor} = `, array)
    } else if (option === 2) {
        valor = get_number('insira o expoente: ')
        console.log('antes da alteração:', array)
        map_vetor_com_valor(array, exponencial, valor)
        console.log(`vetor ^ ${valor} = `, array)
    } else if (option === 3) {
        valor = get_number('insira o denominador: ')
        console.log('antes da alteração:', array)
        map_vetor_com_valor(array, divisao, valor)
        console.log(`vetor ^ ${valor} = `, array)
    } else if (option === 4) {
        const minimo = get_number('insira o valor minimo: ')
        const maximo = get_number('insira o valor maximo: ')

        console.log('antes da alteração:', array)
        for (let index = 0; index < array.length; index++) {
            if (array[index] < 0) {
                array[index] = get_random_number(minimo, maximo)
            }
        }
        console.log(`novo vetor = `, array)

    } else if (option === 5) {
        const ordenacao = input('insira asc - para ascedente ou desc - para descente: ')
        sortArrayBubble(array, ordenacao)
        console.log(`novo vetor = `, array)

    }
    else if (option === 6) {
        embaralharArray(array)
        console.log(`novo vetor = `, array)

    }
}


const produto = (item, constanteMultiplicacao) => item * constanteMultiplicacao
const exponencial = (item, expoente) => item ** expoente
const divisao = (item, denominador) => item / denominador

export function resetarVetor(vetor) {
    const newValue = get_number('Insira o novo valor para o vetor: ')
    setValueArray(newValue, vetor)
}


export const show_menu = () => console.log(" \n****** Insira a opcao desejada ******* \n \
\t 1 - Inicializar vetor numérico \n \
\t 2 - Exibir vetor \n \
\t 3 - Resetar o vetor com um valor padrao \n \
\t 4 - Ver quantidade de itens no vetor \n \
\t 5 - Ver menor e maiores valores e suas posicoes \n \
\t 6 - Ver media do vetor \n \
\t 7 - Ver soma dos itens do do vetor \n \
\t 8 - Ver e contar a quantidade de negativos  \n \
\t 9 - Ver e contar a quantidade de positivos \n \
\t 10 - Aplicar regras a um vetor \n \
\t 11 - Adicionar novos elementos \n \
\t 12 - Remover itens iguais a valor \n \
\t 13 - Remover itens por posicao \n \
\t 14 - Editar itens por posicao \n \
\t 15 - Salvar arquivo \n \
\t 0 - Sair \n \
\n ")


export const show_menu_create = () => console.log("****** Insira a opcao desejada ******* \n \
\t 1 - Preencher Vetor com numeros aleatórios \n \
\t 2 - Preencher Vetor manualmente \n \
\t 3 - Preencher vetor com arquivo \
\n ")


export const show_menu_rules_update = () => console.log("****** Insira a opcao desejada ******* \n \
\t 1. Multiplicar por um valor \n \
\t 2. Elevar a um valor (exponenciação) \n \
\t 3. Reduzir a uma fração (pedir  a fração fração ex: ⅕) \n \
\t 4. Substituir valores negativos por um número aleatórios da uma faixa(min, max) \n \
\t 5. Ordenar valores (reverse?) \n \
\t 6. Embaralhar valores\n ")