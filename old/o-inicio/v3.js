import {print, input} from './\io_utils.js';

function main() {

    var N = Number(input('Digite um numero inteiro positivo '));

    if(N%1 != 0){
        print('Você não digitou um inteiro. Execute novamente para digitar um numero inteiro positivo ');
    }
    else {    
        print('Somando de 1 a ' + N + '...');
        var soma = (N+1)*(N/2);
        print('Soma = ' + soma);
    }
}

main()

