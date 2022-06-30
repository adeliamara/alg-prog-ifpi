import { input } from './\io_utils.js'

function main() {

    let lines = input('> ')

        const [variacao, limite] = lines.split(' ').map(Number)


        let result = ''
        let last = 0
        let limite_linha = 0
        for (let i = 1; last < limite; i += variacao) { //incrementa a variacao
            result = ''
            limite_linha = i + variacao
            for (let j = i; j < limite_linha; j++) {

                last = j;

                if (j === (i + variacao - 1)) result += j
                else result += j + " "

            }
            console.log(result)

        }


}

    main()