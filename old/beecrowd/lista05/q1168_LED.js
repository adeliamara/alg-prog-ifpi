import fs from 'fs'
const lines = fs.readFileSync('arquivo1168.txt', 'utf-8').split('\r\n')

function main() {

    const qtd_de_vezes = lines[0]

    for (let i = 1; i <= qtd_de_vezes; i++) {
        // calcular o numero de leds de toda string
        const quantidade_de_led = quantidade_de_leds_string(String(lines[i]))

        console.log(`${quantidade_de_led} leds`)
    }
}

function retorna_quantidade_de_leds(numero) {

    if (numero === 0 || numero === 9 || numero === 6) {
        return 6
    } else if (numero === 2 || numero === 3 || numero === 5) {
        return 5
    } else if (numero === 1) {
        return 2
    } else if (numero === 8) {
        return 7
    } else if (numero === 4) {
        return 4
    } else if (numero === 7) {
        return 3
    }
}

function quantidade_de_leds_string(string) {

    let quantidade_de_leds = 0

    for (let numero of string) {
        quantidade_de_leds += retorna_quantidade_de_leds(Number(numero))
    }

    return quantidade_de_leds
}


main()
