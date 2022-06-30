import prompt from 'prompt-sync'

const input = prompt({sigint: false})


function main(){
    const number = Number(input('Insira o numero: '))
    let tipo
    if(number === 0){
        tipo = 'neutro'
    }else if(eh_positivo(number)){
        tipo =  'positivo'
    }else{
        tipo = 'negativo'
    }

    console.log(`${number} é ${tipo}`)



}


const eh_positivo = number => number > 0
main()