import { print, input } from './\io_utils.js'


function main() {
    const nota1 = Number(input('N1: '))
    const nota2 = Number(input('N2: '))

    const media = calcule_media(nota1, nota2)
    if (aprovado(media)) {
        if (media === 10) {
            console.log('Aprovado com distinção')
        } else {
            console.log('Aprovado')
        }
    } else {
        console.log('Reprovado')
    }


}


const aprovado = nota => nota >= 7

const calcule_media = (n1, n2) => (n1 + n2) / 2



main()