let raio = prompt('Digite o valor do raio: ');
let area = parseFloat(Math.PI * (Math.pow(raio, 2)));
let perimetro = parseFloat(2 * Math.PI * raio);

document.write(`O valor digitado do raio da circunferência foi: ${raio}. <br>`);
document.write(`O valor da área da circunferência é: ${area}. <br>`);
document.write(`O valor do perimetro da circunferencia é: ${perimetro}. `);