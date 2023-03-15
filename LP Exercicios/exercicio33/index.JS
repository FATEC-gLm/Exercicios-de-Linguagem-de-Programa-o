const baseMaior = document.getElementById('baseMaior');
const baseMenor = document.getElementById('baseMenor');
const altura = document.getElementById('altura');
const btn = document.getElementById('btn');
const divResultado = document.getElementById('resultado');

//função para calcular a área
function calcularArea(b, B, h) {
    const area = ((b + B) + h) / 2;
    return area.toFixed(2);
}

//função para validar os valores
function validarValores(b, B, h) {
    if (!isNaN(b) && !isNaN(B) && !isNaN(h) && b > 0 && B > 0 && h > 0) {
        return true;
    }
    else {
        return false;
    }
}

//função para exibir os resultados
function exibirResultado(area) {
    const resultado = `<p>O valor da base menor inserido é ${baseMenor.value}, o valor da base maior é ${baseMaior.value}, o valor da altura é ${altura.value} e sua área é ${area}<p>`;
    divResultado.innerHTML = resultado;
}

//função para exibir tudo
function calcular() {
    const b = parseFloat(baseMenor.value);
    const B = parseFloat(baseMaior.value);
    const h = parseFloat(altura.value);

    if (validarValores(b, B, h)) {
        const area = calcularArea(b, B, h);
        exibirResultado(area);
    }
    else {
        alert('Os valores inseridos precisam ser maiores que 0');
    }
}

btn.addEventListener('click', calcular);