const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const btn = document.getElementById('btn');
const divResultado = document.getElementById('resultado');

function calcularMedia(n1, n2, n3) {
    const media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / (3);
    return media.toFixed(2);
}

function aprovadoReprovado(media) {
    return media >= 7.5 ? "Aprovado" : "Reprovado";
}


function calcular() {
    const n1 = parseFloat(nota1.value);
    const n2 = parseFloat(nota2.value);
    const n3 = parseFloat(nota3.value);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n3 >= 0 && n3 <= 10) {

        const media = calcularMedia(n1, n2, n3);
        const resultado = `<p>As notas inseridas foram ${n1}, ${n2} e ${n3} e sua média é ${media} e o aluno está <strong> ${aprovadoReprovado(media)}</strong>.</p>`

        divResultado.innerHTML = resultado;
    } else {
        divResultado.innerHTML = `Digite um valor entre 0 e 10 que seja valido.`
    }
}

btn.addEventListener('click', calcular);