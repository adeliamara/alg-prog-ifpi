import {input} from './\io_utils.js'


function main(){
    let turno = input('Insira o turno M - manha, V - vespertino, N - noturno: ')
    turno = turno.toLowerCase()
    let result = ''
    
    if(turno === 'm'){
        result = 'Bom dia!'
    }else if(turno === 'v'){
        result = 'Boa tarde!'
    }else if(turno ===  'n'){
        result = 'Boa noite!'
    }else{
        result = 'turno inválido'
    }

    console.log(result)

}

main()