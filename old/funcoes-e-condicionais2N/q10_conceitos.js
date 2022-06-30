import { input } from './\io_utils.js'


function main() {
    const nota1 = Number(input('N1: '))
    const nota2 = Number(input('N2: '))

    const media = calcule_media(nota1, nota2)

    if (media_invalida(media)) {
        console.log('Media invalida')
    } else {
        const conceito = select_conceito(media)
        if (conceito === 'D' || conceito === 'E') {
            console.log(`conceito: ${conceito} - Reprovado`)
        } else {
            console.log(`conceito: ${conceito} - Aprovado`)
        }
    }
}
    


const calcule_media = (n1, n2) => (n1 + n2) / 2

const media_invalida = media => media > 10 || media < 0

const select_conceito = media => {
    if (media > 10 || media < 0) {
        return 'Media invalida'
    } else if (media >= 9) {
        return 'A'
    } else if (media >= 7.5) {
        return 'B'
    } else if(media >= 6){
        return 'C'
    } else if(media >= 4){
        return 'D'
    } else{
        return 'E'
    }
}



main()