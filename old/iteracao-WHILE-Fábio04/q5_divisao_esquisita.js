import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numeroX = get_number('Digite um numero X: ')
    const numeroN = get_number('Digite um numero N: ')

    realizar_e_imprimir_divisoes_sucessivas(numeroX,numeroN)
    
}

function realizar_e_imprimir_divisoes_sucessivas(X, N){
    let result_divisao = 0
    for(let index = N; index >2; index--){
        result_divisao = X/N
        console.log(`${X}/${N} = ${result_divisao}`)
        X = result_divisao
    }
}

function get_number(msg) {
    let value = Number(input(msg))
    if (isNaN(value)) {
        console.log('Favor digite um valor numérico')
        value = get_number(msg)
    }
    return value
}


main()