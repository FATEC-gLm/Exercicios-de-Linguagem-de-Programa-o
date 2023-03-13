let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let btn = document.getElementById('btn');
let div = document.getElementById('app');

function escrever() {
    let soma = parseInt(numero1.value) + parseInt(numero2.value);
    let sub = parseInt(numero1.value) - parseInt(numero2.value);
    let mult = parseInt(numero1.value) * parseInt(numero2.value);
    let divisao = parseInt(numero1.value) / parseInt(numero2.value);
    let media = (parseInt(numero1.value) + parseInt(numero2.value)) / 2;

    let resultado = `Os números digitados foram ${numero1.value} e ${numero2.value}. <br>`;
    resultado += `A soma dos números é ${soma}. <br>`;
    resultado += `A subtração dos números é ${sub}. <br>`;
    resultado += `A multiplicação dos números é ${mult}. <br>`;
    resultado += `A divisão dos números é ${divisao}. <br>`;
    resultado += `A média dos números é ${media}. <br>`;

    div.innerHTML = resultado;

}

btn.addEventListener('click', escrever);