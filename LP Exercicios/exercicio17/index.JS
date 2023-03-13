//Pergunta ao usuario os valores de b e h
let b = parseFloat(prompt('Digite o valor da base: '))
let h = parseFloat(prompt('Digite o valor da altura: '));

//Formula para calcular a área da base
let areaBase = (b * 2) / 2;

//Formula para calcular o volume do triângulo
let volume = areaBase * h;

//Mostra o volume para o usuario
document.write(`O volume do triângulo é: ${volume}`);