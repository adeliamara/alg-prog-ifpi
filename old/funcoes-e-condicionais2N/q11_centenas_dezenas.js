import { input } from './\io_utils.js'


function main() {
    const num = input('Insira o numero: ')

    const unidade = num[2]
    const dezena = num[1]
    const centena = num[0]

    if (centena == 1) {
        if (dezena == 1) {
            if (unidade == 1) {
                console.log(`${centena} centena, ${dezena} dezena e ${unidade} unidade`)
            } else {
                console.log(`${centena} centena, ${dezena} dezena e ${unidade} unidades`)
            }
        } else {
            if (unidade == 1) {
                console.log(`${centena} centena, ${dezena} dezenas e ${unidade} unidade`)
            } else {
                console.log(`${centena} centena, ${dezena} dezena e ${unidade} unidades`)
            }
        }
    } else if (centena > 1) {
        if (dezena == 1) {
            if (unidade == 1) {
                console.log(`${centena} centenas, ${dezena} dezena e ${unidade} unidade`)
            } else {
                console.log(`${centena} centenas, ${dezena} dezena e ${unidade} unidades`)
            }
        } else {
            if (unidade == 1) {
                console.log(`${centena} centenas, ${dezena} dezenas e ${unidade} unidade`)
            } else {
                console.log(`${centena} centenas, ${dezena} dezenas e ${unidade} unidades`)
            }
        }
    } else if (centena == 0) {
        if (dezena == 1) {
            if (unidade == 1) {
                console.log(`${dezena} dezena e ${unidade} unidade`)
            } else {
                console.log(`${dezena} dezena e ${unidade} unidades`)
            }
        } else if (dezena == 0) {
            if (unidade == 1) {
                console.log(`${unidade} unidade`)
            } else {
                console.log(`${unidade} unidades`)
            }
        } else {
            if (unidade == 1) {
                console.log(`${dezena} dezenas e ${unidade} unidade1`)
            } else {
                console.log(`${dezena} dezenas e ${unidade} unidades`)
            }
        }



    }
}


    main()