
import {input} from './\io_utils.js'

function main(){
        valida_senha("Insira a senha: ")
}

function valida_senha(msg){
    let senha = Number(input(msg))
    
    if(senha !== 2002){
        console.log(`Senha Invalida`)
        senha = valida_senha(msg)
    }else{
        console.log(`Acesso Permitido`)
    }
}

main()