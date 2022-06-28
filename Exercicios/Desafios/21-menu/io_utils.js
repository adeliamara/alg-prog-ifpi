import prompt from 'prompt-sync'
import * as fs from 'fs'

export const input = prompt({
    sigint: false
})


export function loadFile(arquivo) {
    try {
        const data = fs.readFileSync(arquivo, 'utf-8')
        return data
    } catch (error) {
        console.error(error)
    }
}

export function get_number(mensagem) {
    let value = Number(input(mensagem))
    if (isNaN(value)) {
        console.log('Favor digite um valor numérico: ')
        value = get_number(mensagem)
    }
    return value
}

export function get_number_positive(mensagem){
    let number = get_number(mensagem)
    
    while (!(number > 0)){
        console.log(`O número (${number}) nao é positivo. Digite um numero positivo: `)
        number = get_number(mensagem)
    }

    return number

}

export function get_number_negative(mensagem){
    let number = get_number(mensagem)
    
    while (!(number < 0)){
        console.log(`O número (${number}) nao é positivo. Digite um numero positivo: `)
        number = get_number(mensagem)
    }

    return number

}

export function get_number_in_range(mensagem, minimo, maximo){
    let number = get_number(mensagem)
    
    while (number < minimo || number > maximo){
        console.log(`O número (${number}) nao esta dentro do intervalo [${minimo}, ${maximo}]. Digite um numero dentro do intervalo: `)
        number = get_number(mensagem)
    }

    return number

}

export function get_random_number(min = 0, max = 100){
    return Math.floor(Math.random() * (max - min)) + min
}
