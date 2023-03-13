let numero = prompt('Digite o valor do primeiro número: ')
let numero2 = prompt('Digite o valor do segundo número: ')
let numero3 = prompt('Digite o valor do terceiro número: ')
let numero4 = prompt('Digite o valor do quarto número: ')

let mediaPonderada = parseInt (((numero*1)+(numero2*2)+(numero3*3)+(numero4*4)) / (1+2+3+4));

document.write(`Os números digitados foram ${numero}, ${numero2}, ${numero3} e ${numero4}. <br>`);
document.write(`E sua média ponderada é: ${mediaPonderada}.`);