const raio = document.getElementById('raio');
const altura = document.getElementById('altura');
const btn = document.getElementById('btn');
const divResultado = document.getElementById('resultado')

function calcularBase(r) {
    const areadaBase = Math.PI * Math.pow(r, 2);
    return areadaBase.toFixed(2);
}

function calcularVolume(areadaBase, h) {
    const volume = areadaBase * h;
    return volume.toFixed(2);
}

function validarValores(r, h) {
    if (!isNaN(r) && !isNaN(h) && r > 0 && h > 0) {
        return true;
    }
    else {
        return false;
    }
}

function exibirResultado(areadaBase, volume) {
    const resultado = `<p>O valor do raio inserido ${raio.value} e o valor da altura inserido foi ${altura.value}, sua area da base é ${areadaBase} e seu volume fica ${volume}<p>`

    divResultado.innerHTML= resultado;
}

function calcular() {
    const r = parseFloat(raio.value);
    const h = parseFloat(altura.value);

    if(validarValores(r, h)){
        const areadaBase = calcularBase(r);
        const volume = calcularVolume(areadaBase, h);
        exibirResultado(areadaBase, volume);
    }
    else {
        alert('Inserir valor valido !!!');
    }
}

btn.addEventListener('click', calcular);