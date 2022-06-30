
/*Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.*/
import { print, input } from './\io_utils.js';

function main() {
    const linha = input('digite linha 1')
    const elementos = linha.split(' ')
    const A = Number(elementos[0]);
    const B = Number(elementos[1]);
    const C = Number(elementos[2]);
    const PI = 3.14159;

    const area_tri = A * C / 2
    const area_circ = PI * C ** 2
    const area_trap = (A + B) * C / 2
    const area_quad = B ** B
    const area_ret = A * B

    console.log(`TRIANGULO: ${area_tri.toFixed(3)}`)
    console.log(`CIRCULO: ${area_circ.toFixed(3)}`)
    console.log(`TRAPEZIO: ${area_trap.toFixed(3)}`)
    console.log(`QUADRADO: ${area_quad.toFixed(3)}`)
    console.log(`RETANGULO: ${area_ret.toFixed(3)}`)

}

main()