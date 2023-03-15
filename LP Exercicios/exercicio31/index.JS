const raio = document.getElementById('raio');
const btn = document.getElementById('btn');
const div = document.getElementById('app');

function calcular() {
    if (!isNaN(raio.value) && raio.value > 0) {
        const area = parseFloat(Math.PI) * parseFloat(Math.pow(raio.value, 2));
        const perimetro = (parseFloat(Math.PI) * parseFloat(raio.value)) * 2;

        div.innerHTML = `<p>O valor do raio de uma circunferência inserido foi ${raio.value}, então sua área fica ${area.toFixed(2)}, e seu perimetro é ${perimetro.toFixed(2)}<p>`
    }
    else {
        div.innerHTML =`Por favor, inserir um valor valido`
    }
}

btn.addEventListener('click', calcular);