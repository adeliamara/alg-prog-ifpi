function main() {
    const gets = require("prompt-sync")();

    let N = Number(gets('Digite um numero inteiro positivo '));

    if(N%1 != 0){
        console.log('Você não digitou um inteiro. Execute novamente para digita um numero inteiro positivo ');
    }
    else {    
        console.log('Somando de 1 a ' + N + '...');
        var soma = (N+1)*(N/2);
        console.log('Soma = ' + soma);
    }
}

main()