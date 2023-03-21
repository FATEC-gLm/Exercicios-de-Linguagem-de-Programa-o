const base = document.getElementById('base');
const altura = document.getElementById('altura');
const btn = document.getElementById('btn');
const divResultado = document.getElementById('resultado');

function calcularArea(b, h) {
    const area = parseFloat(b * h) / 2;
    return area.toFixed(2);
}

function calcularHipotenusa(b, h) {
    const hipotenusa = parseFloat(Math.sqrt(Math.pow(b, 2) + Math.pow(h, 2)));
    return hipotenusa.toFixed(2);
}

function exibirResultado(area, hipotenusa) {
    const resultado = `<p>O valor da base do triangulo retangulo inserido foi ${base.value} e o valor da su altura inserido foi ${altura.value}, então sua área é ${area} e sua hipotenusa fica ${hipotenusa}.</p>`

    divResultado.innerHTML = resultado;
}

function calcular() {
    const b = parseFloat(base.value);
    const h = parseFloat(altura.value);

    if (!isNaN(b) && !isNaN(h) && b > 0 && h > 0) {
        const area = calcularArea(b, h);
        const hipotenusa = calcularHipotenusa(b, h);
        const resultado = exibirResultado(area, hipotenusa);
    } else {
        alert('Por gentileza inserir um valor que seja maior que 0')
    }

}

btn.addEventListener('click', calcular);