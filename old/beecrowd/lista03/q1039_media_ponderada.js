import { input } from "./\io_utils.js"


function main() {
  const numero = input('Insira as notas: ')

  const [n1, n2, n3, n4] = numero.split(' ').map(Number)
  let media = (n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10

  let status = situacao(media)

  console.log(`Media: ${media.toFixed(1)}`)
  console.log(status)

  if (status === 'Aluno em exame.') {
    const nota_final = Number(input())
    console.log(`Nota do exame: ${nota_final.toFixed(2)}`)
    media = (media + nota_final) / 2
    if (media_eh_menor_que_5(media)) {
      console.log('Aluno reprovado.')
    } else {
      console.log('Aluno aprovado.')
    }
    console.log(`Media final: ${media.toFixed(1)}`)
  }

}


const media_eh_menor_que_5 = media => media < 5
const media_eh_maior_ou_igual_7 = media => media >= 7


function situacao(media) {
  if (media_eh_menor_que_5(media)) {
    return 'Aluno reprovado.'
  } else if (media_eh_maior_ou_igual_7(media)) {
    return 'Aluno aprovado.'
  }
  return 'Aluno em exame.'
}

main()