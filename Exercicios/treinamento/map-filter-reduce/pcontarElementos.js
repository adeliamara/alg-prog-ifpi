function main(){
    const matriz = [
        ['a', 'b', 'c'],
        ['c', 'd', 'f'],
        ['d', 'f', 'g'],
        ['d', 'f', 'g'],
      ];
    
      console.log(count_elementos(matriz))
      
}


const count_elementos = matriz => matriz
.flat() //transforma numa camada acima, no caso array
.reduce((accumulator, currentValue) => { //valor atual sao as letras. acumulado eh a info q ja temos
    if(accumulator[currentValue]) {
      accumulator[currentValue] += 1;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {})


main()