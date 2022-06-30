import { input } from './\io_utils.js';

function main() {
    const numero = input('Entre com um numero de 4 digitos: ')

    if (numero.length !== 4) {
        console.log("Por favor, digite um numero de quatro digitos")
    } else {
        const par1 = Number(numero[0] + numero[1])
        const par2 = Number(numero[2] + numero[3])

        if (Number(numero) === Math.pow((par1 + par2),2)) {
            console.log(`${numero} eh quadrado perfeito`)
        } else {
            console.log(`${numero} nao eh quadrado perfeito`)

        }
    }

}

main()