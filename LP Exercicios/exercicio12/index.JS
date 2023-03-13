let valorTexto = prompt('Digite um número: ');
let numero = parseFloat(valorTexto);
let raizQuadrada = Math.sqrt(numero);
let raizCubica = Math.cbrt(numero); //também pode ser feito dessa forma Math.pow(numero, 1/3)

document.write(`O número digitado foi ${numero}  Sua raiz cubica é ${raizCubica} Sua raiz quadrada é ${raizQuadrada}`);