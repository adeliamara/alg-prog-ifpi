import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numero = get_number('Digite um numero a: ')

    const result = realizar_divisoes_sucessivas(numero, 2)
    console.log(result)

}

function realizar_divisoes_sucessivas(numero, divisor){
    while(numero >= 1){
        numero = numero/2
    }
    return numero
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