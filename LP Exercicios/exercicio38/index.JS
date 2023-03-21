const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const nota4 = document.getElementById('nota4');
const btn = document.getElementById('btn');
const divResultado = document.getElementById('resultado');

function mediaPonderada(n1, n2, n3, n4) {
    const mp = ((parseFloat(n1) * 3) + parseFloat((n2) * 5) + parseFloat((n3) * 6) + parseFloat((n4) * 6)) / (3 + 5 + 6 + 6);
    return mp.toFixed(2);
}

function aprovadoReprovado(mp) {
    return mp >= 6 ? "Aprovado" : "Reprovado";
}
function calcular() {
    const n1 = parseFloat(nota1.value);
    const n2 = parseFloat(nota2.value);
    const n3 = parseFloat(nota3.value);
    const n4 = parseFloat(nota4.value);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4) && n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n3 >=0 && n3 <=10 && n4 >=0 && n4 <=10) {
       
        const mp = mediaPonderada(n1, n2, n3, n4);

        const resultado = `<p>As médias inseridas foram ${n1}, ${n2}, ${n3}, ${n4}, a sua média foi ${mp} e ele está ${aprovadoReprovado(mp)}</p>`
    
        divResultado.innerHTML = resultado;
    }
    else {
        divResultado.innerHTML = `<p> Os valores inseridos devem estar entre 0 e 10. </p>`
    }
}

btn.addEventListener('click', calcular);


