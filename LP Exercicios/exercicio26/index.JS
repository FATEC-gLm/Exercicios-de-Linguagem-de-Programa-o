const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const btn = document.getElementById('btn');
const div = document.getElementById('app');

function calcular() {
    if (!isNaN(numero1.value) && numero1.value > 0 && (numero2.value) && numero2.value > 0) {
        const base = parseFloat(numero1.value);
        const altura = parseFloat(numero2.value);
        const area = parseFloat(base) * parseFloat(altura);
        const perimetro = (parseFloat(base) * 2) + (parseFloat(altura) * 2);

        div.innerHTML =`O valor da base do retângulo inserido foi ${base}, o valor da altura do retângulo inserido foi ${altura}, então sua base fica ${area} e seu perimetro fica ${perimetro}. `;
    }
    else {
        div.innerHTML='Por gentileza, digite um valor valido para <strong>Base</strong> e <strong>Altura</strong> do retângulo.';
    }
}

btn.addEventListener('click', calcular);