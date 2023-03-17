const raio = document.getElementById('raio');
const btn = document.getElementById('btn');
const divResultado = document.getElementById('resultado');

function calcularArea(r) {
    const area = Math.PI * Math.pow(r, 2) * 4;
    return area.toFixed(2);
}

function calcularVolume(r) {
    const volume = (4 * Math.PI * Math.pow(r, 3)) / 3;
    return volume.toFixed(2);
}

function validarValores(r) {
    if (!isNaN(r) && r > 0) {
        return true;
    }
    else {
        return false;
    }
}

function exibirResultado(area, volume) {
    const resultado = `<p> O valor inserido para o raio foi ${raio.value}, então sua área fica ${area} e seu volume é ${volume}<p>`;

    divResultado.innerHTML = resultado;
}

function calcular() {
    const r = parseFloat(raio.value);

    if (validarValores(r)) {
        const area = calcularArea(r);
        const volume = calcularVolume(r);
       exibirResultado(area, volume);
    }
    else{
    alert('Insira um valor valido !!!');
    }
}

btn.addEventListener('click', calcular);