import {input} from './\io_utils.js'

function main() {
    const sides = input('Digite os três laods separados por espaço: ')

    const [side_a, side_b, side_c] = sides.split(' ').map(Number)

    if(check_triangle(side_a, side_b, side_c)){
        console.log('É um triangulo:')
        if (equilateral_triangle(side_a, side_b, side_c)){
            console.log(`\tequilatero!`)
        } else if(isosceles_triangle(side_a, side_b, side_c)){
            console.log(`\tisosceles!`)
        } else if(scalene_triangule(side_a, side_b, side_c)){
            console.log(`\tescaleno!`)
        } else { 
            console.log(`Outro tipo de triangulo!`)
        }
    } else{   
        console.log('Não é triangulo')
    }
}
function check_triangle(a,b,c){
    return a + b > c && a + c > c && b + c > a
}

function equilateral_triangle(a, b, c){
    return a === b && b === c
}

function isosceles_triangle(a,b,c){
    return a == b && c !== b ||  a == c && c !== b ||b == c && c !== a
}

function scalene_triangule(a,b,c){
    return a !== b && b !== c
}


main()
