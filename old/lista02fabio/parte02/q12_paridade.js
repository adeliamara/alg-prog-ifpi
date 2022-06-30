import {input} from './/io_utils.js'

function main(){
    const num = input('Insira um numero: ')

    if(check_even(num)){
        console.log(`${num} é par`)
    }else{
        console.log(`${num} é impar`)
    }
}

function check_even(num){
    return  num%2 === 0
} 

main()