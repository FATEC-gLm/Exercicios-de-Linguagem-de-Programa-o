// Pergunta ao usuário os valores de b, B e h 
let b = parseFloat(prompt('Digite um número: '));
let B = parseFloat(prompt('Digite um número: '));
let h = parseFloat(prompt('Digite um número: '));
// Calcula a área do trapézio usando a fórmula
let area = ((b + B) * h) / 2;

// Mostra a área do trapézio para o usuário
document.write(`Os valores digitados foram ${b}, ${B} e ${h}. <br>`);
document.write(`O valor da àrea é: ${area}. `);