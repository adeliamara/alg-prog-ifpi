/*Implemente um programa denominado combinador, que recebe duas strings e deve combiná-las, 
alternando as letras de cada string, começando com a primeira letra da primeira string, 
seguido pela primeira letra da segunda string, em seguida pela segunda letra da primeira string,
 e assim sucessivamente. As letras restantes da cadeia mais longa devem ser adicionadas ao fim 
 da string resultante e retornada.

Entrada
A entrada contém vários casos de teste. A primeira linha contém um inteiro N que indica a
 quantidade de casos de teste que vem a seguir. Cada caso de teste é composto por uma linha
  que contém duas cadeias de caracteres, cada cadeia de caracteres contém entre 1 e 50 caracteres inclusive.

Saída
Combine as duas cadeias de caracteres da entrada como mostrado no exemplo abaixo e exiba a cadeia resultante*/

import fs from 'fs'
import { resourceUsage } from 'process'
const lines = fs.readFileSync('arquivo1238.txt', 'utf-8').split('\r\n')


function main() {
  const qtd_casos_teste = lines[0]
  let string1 = ''
  let string2 = ''
  let result = ''

  for (let index = 1; index <= qtd_casos_teste; index++) {
    string1 = lines[index].split(' ')
    string2 = string1[1]
    string1 = string1[0]
    result = alternador_de_letras(string1, string2)
    console.log(result)
  }

}

function alternador_de_letras(string1,string2){
  let menorString = ''
  let maiorString = ''
  let result = ''
  if(string1.length < string2.length) {
    menorString = string1
    maiorString = string2
  }else{
    menorString = string2
    maiorString = string1
  }

  for(let index in menorString){
      result = result + string1[index] + string2[index]
    }
  for(let index2 = menorString.length; index2 < maiorString.length; index2++){
      result = result + maiorString[index2]
  }

  return result
  

 


}

main()







