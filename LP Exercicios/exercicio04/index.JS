let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');

document.write('O primeiro número digitado foi:', num1,'<br>');
document.write('O segundo número digitado foi:', num2,'<br>');

let soma = (parseInt(num1) + 1);
let sub = (parseInt(num2) - 1);

document.write('O primeiro número com o acréscimo de uma unidade ficará: ', soma , '<br>');
document.write('O segundo número decrescido de uma unidade ficará: ', sub);