import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const valor = Number(input('insira o valor: '))
    const vetorN = new Array(10)
    console.log(vetorN)
    for(let index = 0; index < vetorN.length; index++){
        vetorN[index] = valor * Math.pow(2, index)
        console.log(`N[${index}] = ${vetorN[index]}`)
    }
}

main()