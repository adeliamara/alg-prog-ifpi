import { input} from './\io_utils.js';

function main(){
    const graus = Number(input('Insira a quantidade de graus: '))

    //processamento
    let valor_graus = graus

    if(graus>360){
        valor_graus = graus %360
    }
    if(graus <0){
        valor_graus = 360 + graus %360
    }

    const quadrante = calcular_quadrante(valor_graus)
    console.log(`${graus} está no ${quadrante}° quadrante`)

}

function calcular_quadrante(g){
    if(g>270){
        return 4
    }else if(g>180){
        return 3
    }else if(g>90){
        return 2
    }
    return 1
}

main()