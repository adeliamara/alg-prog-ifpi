import {input} from './\io_utils.js'

function main(){
    let qtdPares = Number(input('insira a qtd de pares:'))
    let par = input('insira o par: ')
    par = par.split(' ').map(Number)
    let numerador = par[0]
    let denominador = par[1]
    let result


    for(let i=0; i<qtdPares; i++){
        if(divisao_valida(denominador)){
            result = numerador/denominador
            console.log(result.toFixed(1))
        }else{
            console.log('divisao impossivel')
        }
        par = input('insira o par: ')
        par = par.split(' ').map(Number)
        numerador = par[0]
        denominador = par[1]
    }



}

const divisao_valida = denominador => denominador !== 0



main()