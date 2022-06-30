   
   import {print, input} from './\io_utils.js';

   function main(){
       const A = Number(input('Entre com o numero a '));
       const B = Number(input('Entre com o numero b '));
       const C = Number(input('Entre com o numero c '));
       const D = Number(input('Entre com o numero d '));

       const diferenca = (A *B - C * D)
    
       console.log(`DIFERENCA = ${diferenca}`);
      
   }
   
   main() 