const numero = document.getElementById('numero');
const btn = document.getElementById('btn');
const div = document.getElementById('app');

function calcular() {
    if (!isNaN(numero.value) && numero.value > 0) {
        const raizQuadrada = parseFloat(Math.sqrt(numero.value));
        const raizCubica = parseFloat(Math.pow(numero.value, 1 / 3));
        const saida = `<p>O número digitado foi ${numero.value}<p>
                       <p>Sua raiz cúbica é ${raizCubica}<p>
                       <p>Sua raiz quadrada é ${raizQuadrada}<p>`;

        div.innerHTML = saida;
    }
    else{
        div.innerHTML = 'Digite um número maior que 0.';
    }
}

btn.addEventListener('click', calcular);