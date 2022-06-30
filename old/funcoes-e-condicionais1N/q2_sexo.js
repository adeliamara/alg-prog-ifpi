import prompt from 'prompt-sync'

const input = prompt({sigint: false})


function main(){
    const sexo = input('Insira o sexo do bebê: ')
    let tipo
    if(eh_feminino(sexo)){
        tipo = 'Sexo Feminino'
    }else if(eh_masculino(sexo)){
        tipo =  'Sexo Masculino'
    }else{
        tipo = 'Sexo inválido'
    }

    console.log(`${sexo} - ${tipo}`)



}


const eh_feminino = sexo => sexo === 'F' 

const eh_masculino = sexo => sexo === 'M' 
main()