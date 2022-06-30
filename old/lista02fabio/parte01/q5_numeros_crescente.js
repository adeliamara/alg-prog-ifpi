import {print, input} from './\io_utils.js';

function main(){
    //entrada
    let numeros = input('Entre com tres numeros (separe com espaço):')

       //processamento
       let num = numeros.split(' ').map(Number)
       numeros = numeros.split(' ').map(Number)
       num = num.sort((a,b)=> a-b)
  
      //resultado
      console.log(`${num[0]}`)
      console.log(`${num[1]}`)
      console.log(`${num[2]}`)
      console.log(``)

      console.log(`${numeros[0]}`)
      console.log(`${numeros[1]}`)
      console.log(`${numeros[2]}`)
  
  
  
  }
  




main()
