import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numero_a = get_number('Digite um numero a: ')
    const numero_b = get_number('Digite um numero b: ')

    const mdc = calcula_mdc(numero_a, numero_b)
    console.log(`MDC eh: ${mdc}`)

}

function calcula_mdc(a, b){
    let num = 1
    let index = a
    if(a > b){
        index = b
    }
    while(a%index !== 0 || b%index !==0 ){
        index--
    }
    return index
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