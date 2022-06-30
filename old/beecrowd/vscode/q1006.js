    
   import {print, input} from './\io_utils.js';

   function main(){
       const A = Number(input('Entre com o numero a '));
       const B = Number(input('Entre com o numero b '));
       const C = Number(input('Entre com o numero c '));

    
       const MEDIA = (A *2 + B *3 +C * 5)/10 

       console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
      
   }
   
   main() 