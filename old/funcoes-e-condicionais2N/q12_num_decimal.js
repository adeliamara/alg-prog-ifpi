import { input } from './\io_utils.js'


function main() {
    const num = Number(input('Insira um numero: '))

    if(isFloat(num)){
        console.log('É decimal')
    }else{
        console.log('Nao é decimal')
    }
}

function isFloat(num){
    if(!isNaN(num)){
        return parseInt(num) != parseFloat(num)    
    }
    return false
}

main()