import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

export function enter_to_continue(){
    input('<enter> to continue...')
    console.clear()
}

export function loadfile(){
    try{
        const data = fs.readFileSync('palavras.txt', 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}

export function get_text(msg){
    const value = input(msg)
    if (value.length === 0){
        console.log('Texto vazio. Digite algo.')
        return get_text(msg)
    }
    return value
}

export function get_number(msg){
    let value = Number(input(msg))
    if (isNaN(value)){
        console.log('Favor digite um valor numérico')
        value = get_number(msg)
    }
    return value
}
export function get_number_on_range(msg, min, max){
    let number = get_number(msg)
    
    while (!(number >= min && number <= max)){
        console.log(`O número (${number}) está fora da faixa [${min}-${max}]`)
        number = get_number(msg)
    }

    return number

}

