import { input} from './\io_utils.js';

function main(){
    const lados = input('Entre com os lados do triangulo separados por espaço: ')
    const [lado1, lado2, lado3] = lados.split(' ').map(Number)

    let result = 0

    if(eh_triangulo_valido(lado1,lado2,lado3)){
        result = verifique_hipotenusa_cateros(lado1,lado2,lado3)
    }else{
        result = 'Nao eh triangulo valido'
    }

    console.log(result)

}

function eh_triangulo_valido(l1,l2,l3){
    return l1*l1 + l2*l2 === l3*l3 || l1*l1 + l3*l3 === l2*l2 || l2*l2 + l3*l3 === l1*l1
}

function verifique_hipotenusa_cateros(l1,l2,l3){
    if(l1*l1 + l2*l2 === l3*l3){
        return `hiotenusa: ${l3} e catetos: ${l2} e ${l1}`
    }else if(l1*l1 + l3*l3 === l2*l2){
        return `hiotenusa: ${l2} e catetos: ${l3} e ${l1}`
    }
    return `hiotenusa: ${l1} e catetos: ${l3} e ${l2}`
}
main()