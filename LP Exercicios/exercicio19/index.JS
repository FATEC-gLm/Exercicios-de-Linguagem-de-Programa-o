let raio = parseInt(prompt('Digite o valor do raio: '));
let altura = parseInt(prompt('Digite o valor da altura: '));

let areaCircunferencia = Math.PI * Math.pow(raio,2);
let volume = areaCircunferencia * altura;

document.write(`A área da base é: ${areaCircunferencia} <br>`);
document.write(`O volume do cilindro é: ${volume}`);