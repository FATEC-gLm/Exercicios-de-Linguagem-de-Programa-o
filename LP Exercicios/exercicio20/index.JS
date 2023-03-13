let raio = parseFloat(prompt(`Digite o valor do raio: `));
let area = 4 * Math.PI * Math.pow(raio,2);
let volume = (4 * Math.PI * Math.pow(raio,3)) / 3;

document.write(`O raio da esfera é ${raio} <br> `);
document.write(`A área da esferá é ${area} <br>`);
document.write(`O volume da área é ${volume}`);