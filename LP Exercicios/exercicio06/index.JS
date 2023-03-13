let num1 = prompt("Digite um número: ");
let num2 = prompt('Digite um número: ');
let soma = (parseInt(num1) + parseInt(num2));
let sub = (parseInt(num1) - parseInt(num2));
let mult = (parseInt(num1) * parseInt(num2));
let div = (parseInt(num1) / parseInt(num2));
let media = (soma / 2);

document.write(`Os números digitados foram ${num1} e ${num2} <br>`);
document.write(`A soma dos números ${num1} e ${num2} é ${soma} <br>`);
document.write(`A subtração dos números ${num1} e ${num2} é ${sub} <br>`);
document.write(`A multiplicação dos números ${num1} e ${num2} é ${mult} <br>`);
document.write(`A divisão dos números ${num1} e ${num2} é ${div} <br>`);
document.write(`A média dos números ${num1} e ${num2} é ${media}`)
