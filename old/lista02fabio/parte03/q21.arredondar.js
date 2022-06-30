import { input} from './\io_utils.js';

function main(){
    const num = Number(input('digite o numero: '))

    const parte_fracionaria = Math.abs(num - Math.trunc(num))
    let resultado = 0

    if(parte_fracionaria>0.5){
        if(eh_positivo(num)){
            resultado = Math.trunc(num) + 1
        }else{
            resultado = Math.trunc(num) - 1
        }
    }else{
        resultado = Math.trunc(num)
    }

    console.log(resultado)
}

const eh_positivo = num => num >=0

main()