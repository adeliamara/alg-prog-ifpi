import { input } from './\io_utils.js'

function main() {
    let dadoAtual = ''
    let numProva = -1
    let qtdNadadores = -1
    let nome = ''
    let classificacao = 0
    let tempo = 0
    let clube = ''
    let pontos_clubeA = 0
    let pontos_clubeB = 0
    let vencedor = ''

    while (numProva !== 0 || qtdNadadores !== 0) {
        dadoAtual = input('Digite o numero da prova e a quantidade de nadadores: ')
        dadoAtual = dadoAtual.split(' ').map(Number)
        numProva = dadoAtual[0]
        qtdNadadores = dadoAtual[1]
        
        for (let index = 0; index < qtdNadadores; index++) {
            nome = input('insira o nome: ')
            classificacao = Number(input('insira a classificao: '))
            tempo = input('insira o tempo: ')
            clube = input('insira o clube: ')

            if (clube === 'a') {
                pontos_clubeA += pontosPorColocacao(classificacao)
            }
            if (clube === 'b') {
                pontos_clubeB += pontosPorColocacao(classificacao)
            }
        }
    }
    if(pontos_clubeA>pontos_clubeB){
        vencedor = 'O vencedor é o clube A'
    }else if(pontos_clubeB>pontos_clubeA){
        vencedor= 'O vencedor é o clube B'
    }else{
        vencedor = 'Houve empate'
    }
    console.log(`Pontos Clube A: ${pontos_clubeA}`)
    console.log(`Pontos Clube B: ${pontos_clubeB}`)
    console.log(vencedor)
}



function pontosPorColocacao(classificacao) {

    if (classificacao === 1) {
        return 9
    } else if (classificacao === 2) {
        return 6
    } else if (classificacao === 3) {
        return 4
    } else if (classificacao === 4) {
        return 3
    }
}


main()