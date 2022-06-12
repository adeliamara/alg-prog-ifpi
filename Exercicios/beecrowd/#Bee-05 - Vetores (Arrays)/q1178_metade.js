import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const valor = Number(input('insira o valor: '))
    const vetorN = new Array(100)

    for (let index = 0; index < vetorN.length; index++) {
        vetorN[index] = Math.round(valor * Math.pow(2, -index)*10000)/10000
        gambiarraTratarNumero(vetorN, 28)
        console.log(`N[${index}] = ${vetorN[index].toFixed(4)}`)
    }
}

function gambiarraTratarNumero(vetorN, index) {
    const [parte_inteira, parte_decimal] = String(vetorN[index]).split('.')
    let novoElemento = parte_inteira + '.'
    if(parte_decimal !== undefined)
    if (parte_decimal.length > 4) {
        if (parte_decimal[5] === 5 && parte_decimal[5] === 0 || parte_decimal[5] === undefined) {
            for (let index = 0; index < 4; index++) {
                novoElemento += parte_decimal[index]
            }

        }
        novoElemento = Number(novoElemento)
        vetorN[index] = novoElemento
    }
}


main()