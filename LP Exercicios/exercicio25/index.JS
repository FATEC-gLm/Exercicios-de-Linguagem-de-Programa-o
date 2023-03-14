const numero = document.getElementById('numero');
const btn = document.getElementById('btn');
const div = document.getElementById('app');

function calcular() {
    //verificando se o valor é um número e maior que zero
    if (!isNaN(numero.value) && numero.value > 0) {
        const lado = parseFloat(numero.value);
        const area = lado ** 2;
        const perimetro = lado * 4;

        div.innerHTML = `O valor do lado do quadrado inserido foi ${lado}, com isso sua área fica ${area} e seu perimetro é ${perimetro}.`;
    }
    else { 
        //informa ao usuario que o valor inserido é inválido
        div.innerHTML='Por gentileza, digite um valor valido'; }
}
btn.addEventListener('click', calcular);