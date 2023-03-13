let base = prompt('Digite o valor da base');
let altura = prompt('Digite o valor da Altura');
let area = (parseInt(base) * parseInt(altura));
let perimetro = ((parseInt(base) * 2) + (parseInt(altura) * 2));

document.write(`O valor da base do retângulo digitado foi ${base} e o valor da altura digitado foi ${altura} <br>`);
document.write(`A área do retângulo é ${area} <br>`);
document.write(`O perímetro do retângulo é ${perimetro}`);