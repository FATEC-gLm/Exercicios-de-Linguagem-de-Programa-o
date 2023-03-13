// Pergunta ao usuario os valores do raio maior e do raio menor
let raioMaior = parseFloat(prompt('Digite o valor do raio maior: '));
let raioMenor = parseFloat(prompt('Digite o valor do raio menor: '));

// Calculamos a área das duas circunferências
let areaMaior = Math.PI * raioMaior;
let areaMenor = Math.PI * raioMenor;

// Formula para calcular a area
let area = areaMaior - areaMenor;


console.log(`A área total é: ${area}`)