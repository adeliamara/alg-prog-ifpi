import { input} from './\io_utils.js';

function main(){
    const pass = input('Entre com a senha: ')

    if(valid_pass(pass)){
        console.log('Senha válida, acesso permitido')
    }else{
        console.log('Senha inválida, acesso não permitido')
    }
}

const valid_pass = senha => senha === 1234

main()