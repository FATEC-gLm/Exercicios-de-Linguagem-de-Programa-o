let valorTexto = prompt('Digite um número: ');
let numero = parseFloat(valorTexto);
let potencia_2 = Math.pow(numero,2);
let potencia_3 = Math.pow(numero,3);
let potencia_4 = Math.pow(numero,4);
let potencia_5 = Math.pow(numero,5);

document.write(`O número digitado foi ${numero} e seu valor elavado a 2 é ${potencia_2}, elevado a 3 é ${potencia_3}, elevado a 4 ${potencia_4}, e elevado a 5 é ${potencia_5}`);