import {loadfile, get_number, get_number_on_range, get_text, enter_to_continue} from './utils.js'

function main() {
    const [OPTION_MIN, OPTION_MAX] = [0, 6]
    let menu = '**** menu ****'
    menu += '\n1 - Palavras com mais de N letras'
    menu += '\n2 - Mostrar e Contar palavras sem uma determinada letra'
    menu += '\n3 - Palavras sem várias letras proibidas'
    menu += '\n4 - Palavras com apenas as letras obrigatorias'
    menu += '\n5 - Palavras com todas as letras obrigatorias'
    menu += '\n6 - Palavras em ordem alfabética'


    menu += '\n\n0 - Sair'

    const words = loadfile().split('\n')

    console.log(`${words.length} carregadas!`)

    // estado anterior
    console.log(menu)
    let option = get_number_on_range('> ', OPTION_MIN, OPTION_MAX)
    while (option !== 0) { // cond. de continuidade
        // trabalho
        if (option === 1) {
            show_and_count_words_with_more_than_n_letter(words)
        } else if (option === 2) {
            show_and_count_words_without_specific_letter(words)
        } else if (option === 3) {
            show_and_count_words_without_blocked_letters(words)
        }
        else if (option === 4) {
            show_and_count_words_with_only_mandatory_letters(words)
        }
        else if (option === 5) {
            show_and_count_words_with_all_mandatory_letters(words)
        }
        else if (option === 6) {
            show_and_count_words_in_abecedarian(words)
        }

        // convergencia dos dados
        enter_to_continue()
        console.log(menu)
        option = get_number_on_range('> ', OPTION_MIN, OPTION_MAX)
    }

    console.log('Fim!')
}

function show_and_count_words_with_more_than_n_letter(words) {
    const letter_qtd = get_number('A palavra deve ter mais que quantas letras? ')
    let counter = 0
    for (let word of words) {
        if (word.length > letter_qtd) {
            console.log(word)
            counter++
        }
    }

    const percentage = (counter / words.length) * 100
    console.log(`Existem ${counter} (${percentage.toFixed(3)}%) com mais de ${letter_qtd} letras`)

}

function show_and_count_words_without_specific_letter(words) {
    const blocked_letter = get_text('Qual a letra proibida? ')
    let counter = 0

    for (let word of words) {
        if (has_no_specific_letter(word, blocked_letter)) {
            console.log(word)
            counter++
        }
    }
    const percentage = (counter / words.length) * 100
    console.log(`Existem ${counter} (${percentage.toFixed(3)}%) sem a letra ${blocked_letter}`)

}

function has_no_specific_letter(word, blocked_letter) {

    for (let letter of word) {
        if (letter === blocked_letter) {
            return false
        }
    }
    return true
}



function show_and_count_words_without_blocked_letters(words) {
    const blocked_letter = get_text('Quais as letra proibidas? ')
    let counter = 0

    for (let word of words) {
        if (avoids(word, blocked_letter)) {
            console.log(word)
            counter++
        }

    }
    const percentage = (counter / words.length) * 100
    console.log(`Existem ${counter} (${percentage.toFixed(3)}%) sem as letras ${blocked_letter}`)

}

function avoids(word, blocked_letter) {
    for (let character of blocked_letter) {
        if (contains(word, character)) {
            return false
        }
    }
    return true
}

function contains(word, letter) {
    for (let character of word) {
        if (letter === character) {
            return true
        }
    }
    return false
}



function show_and_count_words_with_only_mandatory_letters(words) {
    const mandatory_letters = get_text('Quais as letra obrigatórias? ')
    let counter = 0


    for (let word of words) {
        if (use_only(word, mandatory_letters)) {
            counter++
            console.log(word)
        }
    }

    const percentage = (counter / words.length) * 100
    console.log(`Existem ${counter} (${percentage.toFixed(3)}%) que contem apenas as letras ${mandatory_letters}`)
}

const use_only = (word, mandatory_letters) => {
    for (let letter of mandatory_letters) {
        if (!contains(word, letter)) {
            return false
        }
    }
    for (let character of word) {
        if (!contains(mandatory_letters, character)) {
            return false
        }
    }
    return true
}



function show_and_count_words_with_all_mandatory_letters(words) {
    const mandatory_letters = get_text('Quais as letra obrigatórias? ')
    let counter = 0

    for (let word of words) {
        if (use_all(word, mandatory_letters)) {
            counter++
            console.log(word)
        }
    }

    const percentage = (counter / words.length) * 100
    console.log(`Existem ${counter} (${percentage.toFixed(3)}%) que contem apenas as letras ${mandatory_letters}`)
}

function use_all(word, mandatory_letters) {
    for (let letter of mandatory_letters) {
        if (!contains(word, letter)) {
            return false
        }
    }
    return true
}


function show_and_count_words_in_abecedarian(words) {
    let counter = 0
    for (let word of words) {
        if (is_abecedarian(word)) {
            counter++
            console.log(word)
        }
    }

    const percentage = (counter / words.length) * 100
    console.log(`Existem ${counter} (${percentage.toFixed(3)}%) que estão em ordem alfabética`)
}
function is_abecedarian(word) {
    for (let indice in word) {
        if (word[indice] < word[indice - 1]) {
            return false
        }
    }
    return true
}



main()