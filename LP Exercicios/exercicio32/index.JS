const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');
const valorC = document.getElementById('valorC');
const btn = document.getElementById('btn');
const divResultado = document.getElementById('resultado');


//Função para calcular o volume
function calcularVolume(a, b, c) {
    const volume = a * b * c;
    return volume.toFixed(2);
}

//Função para validar os valores
function validarValores(a, b, c) {
    if (!isNaN(a) && !isNaN(b) && !isNaN(b) && a > 0 && b > 0 && c > 0) {
        return true;
    } else {
        return false;
    }
}

//Função para exibir os resultados
function exibirResultado(volume) {
    const resultado = `<p> Os valores dos lados do paralelepípedo inseridos foram lado A ${valorA.value}, lado B ${valorB.value}, lado C ${valorC.value} e seu volume é ${volume} </p>`;
    divResultado.innerHTML = resultado;
}

//função para exibir tudo
function calcular() {
    const a = parseFloat(valorA.value);
    const b = parseFloat(valorB.value);
    const c = parseFloat(valorC.value);

    if (validarValores(a, b, c)) {
        const volume = calcularVolume(a, b, c);
        exibirResultado(volume);
    }
    else {
        alert('Os valores inseridos devem ser maiores que zero');
    }
}

btn.addEventListener('click', calcular)




