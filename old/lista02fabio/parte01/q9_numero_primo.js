import { input } from "./io_utils.js";

function main(){
    const num = input('Insira um numero de 0 a 100:')

    if(prime_number(num)){
        console.log(`${num} é um numero primo`)
    }else{
        console.log(`${num} não é um numero primo`)

    }
}

function prime_number(num){
    for(let i = 2; i < num/2; i++){
        if(num%i == 0){
            return false
        }
    }
    return true
}

main()