import { createNewArray, fillArray, fillArrayRandomNumber, showVetor, setValueArray, selectSizeArray } from "./array_utils.js";
import { get_number, get_number_in_range, get_number_positive, input, loadFile } from "./io_utils.js";


function main() {
    let option = 1
    let vetor = []


    while (option !== 0) {
        show_menu()
        option = get_number_in_range('Opcao selecionada: ', 0, 25)

        if (option === 1) {
            vetor = initialize_array()
        } else if (option === 2) {
            showVetor(vetor)
        } else if (option === 3) {
            resetarVetor(vetor)
        } else if (option === 4) {
            console.log(selectSizeArray(vetor))
        } else if (option === 5) {
             const [posicao_maior, maior_elemento] = SelectLargerValueAndPosition(vetor)
    const [posicao_menor, menor_elemento] = SelectSmallerValueAndPosition(vetor)

    console.log(`Menor valor: ${menor_elemento}`)
    console.log(`Posicao: ${posicao_menor}`)
    console.log(`Maior valor: ${maior_elemento}`)
    console.log(`Posicao: ${posicao_maior}`)
        } else if (option === 6) {
            const media = mediaCalculator(vetor)
            console.log(media)
        } else if (option === 7) {
            const sum = sumCalculator(vetor)
            console.log(sum)
        } else if (option === 8) {
            console.log(`O total de numeros negativos eh: ${countAndShowNegativeNumber(vetor)}`)
        } else if (option === 9) {
            console.log(`O total de numeros positivos eh: ${countAndShowPositiveNumber(vetor)}`)
        } else if(option === 10){
            updateArrayWithRules(vetor)
        }

        input('> Aperte ENTER para continuar...')
        console.clear()
    }
}



function initialize_array() {
    show_menu_create()
    let option = get_number_in_range('Insira um numero entre 1 e 3: ', 1, 3)

    if (option === 3) {
        console.log('Insira o titulo do arquivo! Lembre: os dados devem ser separados por quebra de linha. ')
        const data = loadFile('arquivo.txt')
        return data.split('\r\n')
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

function resetarVetor(vetor) {
    const newValue = get_number('Insira o novo valor para o vetor: ')
    setValueArray(newValue, vetor)
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

const sumCalculator = array => array.reduce((soma, itemAtual) => soma += itemAtual, 0)

const mediaCalculator = array => sumCalculator(array) / array.length

//filter 
function countAndShowNegativeNumber(array){
    let counter = 0
    for (let index = 0; index < array.length; index++) {
        if(array[index] < 0){
            console.log(array[index])
            counter++
        }            
    }
    return counter
}

function countAndShowPositiveNumber(array){
    let counter = 0
    for (let index = 0; index < array.length; index++) {
        if(array[index] > 0){
            console.log(array[index])
            counter++
        }            
    }
    return counter
}

function updateArrayWithRules(array){
    show_menu_rules_update()
}

const show_menu = () => console.log(" \n****** Insira a opcao desejada ******* \n \
\t 1 - Inicializar vetor numérico \n \
\t 2 - Exibir vetor \n \
\t 3 - Resetar o vetor com um valor padrao \n \
\t 4 - Ver quantidade de itens no vetor \n \
\t 5 - Ver menor e maiores valores e suas posicoes \n \
\t 6 - Ver media do vetor \n \
\t 7 - Ver soma dos itens do do vetor \n \
\t 8 - Ver e contar a quantidade de negativos  \n \
\t 9 - Ver e contar a quantidade de positivos \n \
\n ")


const show_menu_create = () => console.log("****** Insira a opcao desejada ******* \n \
\t 1 - Preencher Vetor com numeros aleatórios \n \
\t 2 - Preencher Vetor manualmente \n \
\t 3 - Preencher vetor com arquivo \
\n ")


const show_menu_rules_update = () => console.log("****** Insira a opcao desejada ******* \n \
\t 1. Multiplicar por um valor \n \
\t 2. Elevar a um valor (exponenciação) \n \
\t 3. Reduzir a uma fração (pedir  a fração fração ex: ⅕) \n \
\t 4. Substituir valores negativos por um número aleatórios da uma faixa(min, max) \n \
\t 5. Ordenar valores (reverse?) \n \
\t 6. Embaralhar valores\n ")

main()