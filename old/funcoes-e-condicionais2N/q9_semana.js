import {input} from "./\io_utils.js"

function main(){
    const num = Number(input('Insira o dia (ex: 1 - Domingo, 2 - Segunda...): '))

    const dia = select_dia(num)

    console.log(dia)
}


const select_dia = num => {
    if(num === 1){
        return 'Domingo'
    }else if(num===2){
        return 'Segunda'
    }else if(num === 3){
        return 'Terça'
    }else if(num === 4){
        return 'Quarta'
    }else if(num === 5){
        return 'Quinta'
    }else if(num === 6){
        return 'Sexta'
    }else if(num === 7){
        return 'Sábado'
    }else{
        return 'Valor inválido'
    }
}

main()