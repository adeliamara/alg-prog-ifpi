import { input} from './\io_utils.js';

function main(){
    const altura = Number(input('Insira a altura em metros, usando o ponto para separar casas decimais: '))
    const peso = Number(input('Insira o peso em kg, usando o ponto para separar casas decimais: '))

    const calc_imc = (peso, altura) => peso / (altura * altura)
    const imc = calc_imc(peso, altura)
    const classificacao_imc = classificar_imc(imc)

    console.log(`O IMC ${imc.toFixed(2)} é classificado como ${classificacao_imc}`)
}
    
function classificar_imc(imc){
    if(imc<25){
        return 'Normal'
    }else if (imc>=25 && imc<30){
        return 'Obesidade'
    }
    return 'Obsidade morbida'
}
main()