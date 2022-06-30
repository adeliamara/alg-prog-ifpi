import { input } from "./\io_utils.js"


function main() {
    const coordenadas = input('Insira as coordenadas x y: ')

    const [x, y] = coordenadas.split(' ').map(Number)

    const result = verifica_quadrante(x, y)

    console.log(result)
}

function verifica_quadrante(x, y) {
    if (x === 0 && y === 0) {
        return 'Origem'
    } else if (x === 0) {
        return 'Eixo Y'
    } else if (y === 0) {
        return 'Eixo X'
    } else if (x > 0 && y > 0) {
        return 'Q1'
    } else if (x < 0 && y > 0) {
        return 'Q2'
    } else if (x < 0 && y < 0) {
        return 'Q3'
    }
    return 'Q4'
}

main()