import { input} from './\io_utils.js';

function main(){
    const ponto1 = input('Entre com as coordenadas na forma x1, y1: ')
    const ponto2 = input('Entre com as coordenadas na forma x2, y2: ')

    const [x1,y1] = ponto1.split(',').map(Number)
    const [x2,y2] = ponto2.split(',').map(Number)
    const altura = Math.abs(y1-y2)
    const largura = Math.abs(x1-x2)

    const area = calc_area_retangulo(altura, largura)

    console.log(`A área toda é: ${area}`)

}

const calc_area_retangulo = (altura, largura) => altura * largura

main()