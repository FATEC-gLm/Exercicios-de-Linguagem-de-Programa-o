const numero = document.getElementById('numero');
const btn = document.getElementById('btn');
const divResultado = document.getElementById('resultado');


function parImpar(n) {
    const parImpar = parseInt(n) % 2 === 0 ? "Par" : "Impar";
    return parImpar;
}

function exibirResultado(parImpar, n) {
    let resultado;

    if (parImpar === "par") {
        resultado = `O número inserido foi ${n} e ele é um número par, então sua potência elavada à 2 é ${n ** 2} `
    }
    else {
        resultado = `O número inserido foi ${n} e ele é um número impar, então sua potência elavada à 3 é ${n ** 3} `
    }
    return resultado;
}

function calcular() {
    const n = parseInt(numero.value);
    const resultadoParImpar = parImpar(n);
    const resultado = exibirResultado(resultadoParImpar, n);
    
    divResultado.innerHTML = resultado;
}

btn.addEventListener('click', calcular);
