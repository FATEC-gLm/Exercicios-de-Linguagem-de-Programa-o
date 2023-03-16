const base = document.getElementById('base');
const altura = document.getElementById('altura');
const btn = document.getElementById('btn');
const divResultado = document.getElementById('resultado');


function calculoArea(b, h) {
    const area = (b * h) / 2;
    return area.toFixed(2);
}

function validarValores(b, h) {
    if (!isNaN(b) && !isNaN(h) && b > 0 && h > 0) {
        return true;
    }
    else {
        return false;
    }
}

function exibirResultado(area) {
    const resultado = `<p>O valor da base inserido é ${base.value} e o valor da altura inserido foi ${altura.value} então sua àrea fica ${area}<p>`;

    divResultado.innerHTML = resultado;
}

function calcular(){
    const b = parseFloat(base.value);
    const h = parseFloat(altura.value);

    if(validarValores(b, h)) {
        const area = calculoArea(b, h);
        exibirResultado(area);
    }

    else{
        alert('Por favor, inserir um número valido.');
    }
}

btn.addEventListener('click', calcular);