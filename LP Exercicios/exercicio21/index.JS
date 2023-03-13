let numero01 = document.getElementById('numero01');
let numero02 = document.getElementById('numero02');
let btn = document.getElementById('btn');
let div = document.getElementById('app');


function escrever() {
    let maisum = parseInt(numero01.value) + 1;
    let menosum = parseInt(numero02.value) - 1;

    div.innerHTML = `O primeiro número digitado foi ${numero01.value} e ele acrescido de +1 fica ${maisum}, o segundo número digitado foi ${numero02.value} e ele decrescido de -1 fica ${menosum}.`;
}

btn.addEventListener('click', escrever);