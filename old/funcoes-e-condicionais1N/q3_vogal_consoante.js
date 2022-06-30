import {print, input} from './\io_utils.js'


function main(){
    let letter = get_only_letter('Insira a letra: ')
    let tipo
    if(eh_vogal(letter)){
        tipo = 'vogal'
    }else{
        tipo = 'consoante'
    }

    console.log(`${letter} é ${tipo}`)



}


const eh_vogal = letter => {
    let letter_lowercase = letter.toLowerCase() 
    return letter_lowercase === 'a' || letter_lowercase === 'e' || letter_lowercase === 'i'|| letter_lowercase === 'o' || letter_lowercase === 'u'
}


function get_only_letter(msg){
    const digits = 'abcdedfghijklmnopqrstuvxzyz'
    let letter = input(msg)
    let letter_lowercase = letter.toLowerCase()
    console.log(letter_lowercase)
    let is_letter = false
    for(let char of digits){
        if(char === letter_lowercase){
            is_letter = true
        }
    }
    if(is_letter){
        return letter
    }
    else{
        get_only_letter(msg)
    }
}


main()