let lado = prompt('Digite o valor do Lado de um quadrado: ');
let area = (parseInt(lado) * parseInt(lado));
let perimetro = (parseInt(lado) + parseInt(lado) + parseInt(lado) + parseInt(lado));

document.write(`O valor do lado do quadrado é ${lado} <br>`);
document.write(`Sua área é ${area} <br>`);
document.write(`Seu perimetro é ${perimetro}`);