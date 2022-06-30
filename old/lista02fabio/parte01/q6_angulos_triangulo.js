import {input} from './\io_utils.js'

function main() {
    const angles = input('Digite os três angulos separados por espaço: ')

    const [angle_a, angle_b, angle_c] = angles.split(' ').map(Number)

    if(check_triangle(angle_a, angle_b, angle_c)){
        console.log('É um triangulo!')
        if (acute_triangle(angle_a, angle_b, angle_c)){
            console.log(`\t É um triangulo acutangulo!`)
        } else if(right_angle_triangle(angle_a, angle_b, angle_c)){
            console.log(`\t É um trinagulo retangulo!`)
        } else if(obtuse_triangule(angle_a, angle_b, angle_c)){
            console.log(`\t É um trinagulo obtusangulo!`)
        } else { 
            console.log(`Outro tipo de triangulo!`)
        }
    } else{   
        console.log('Não é triangulo')
    }
}
function check_triangle(a,b,c){
    return a + b + c === 180
}

function acute_triangle(a, b, c){
    return a < 90 && b < 90 && c < 90
}

function right_angle_triangle(a,b,c){
    return a === 90 || b === 90 || c === 90
}

function obtuse_triangule(a,b,c){
    return a > 90 || b > 90 || c >90
}


main()
