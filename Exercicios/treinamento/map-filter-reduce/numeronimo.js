function main(){

    const texto = 'Every developer likes to mix kubernetes and javascript'
    console.log(abreviar(texto))
}


const SelectLetraPosicaoN = (text,n) => text.split(' ').map(word => word[n]).join('');

function abreviar(texto){
    let novo_texto = ''

    texto = texto.split(' ')

    for(let palavra of texto){
        palavra.length >= 4 ? 
        novo_texto+= SelectLetraPosicaoN(palavra,0)+(palavra.length-2)+SelectLetraPosicaoN(palavra,palavra.length-1)
        : novo_texto += palavra
        novo_texto+= ' '
    }
 
    return novo_texto
}


/* forma sugerida 

const input = 'Every developer likes to mix kubernetes and javascript';

  const createNumeronym = (word) => word[0] + (word.length - 2) +  word[word.length - 1];

  input
  .split(' ')
  .map(function(word) {
    if(word.length >= 4) {
      return createNumeronym(word);
    }
    return word;
  })
  .join(' ');

*/
main()