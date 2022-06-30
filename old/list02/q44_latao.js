//Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
//quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
//pelo usuário.


import {input, print} from './\io_utils.js'

function main(){
    //enter
    const brass_kg = input('Enter a number to represent o kg of gold:')

    //processing
    const copper_kg = brass_kg *  0.7
    const zinc_kg = brass_kg * 0.3
  
    //result
    print(`it takes ${copper_kg} Kg of copper and the ${zinc_kg} Kg of the zinc`)   
    
}

main()