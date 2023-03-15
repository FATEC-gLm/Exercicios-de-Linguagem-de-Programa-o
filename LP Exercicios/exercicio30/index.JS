const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const nota4 = document.getElementById('nota4');
const btn = document.getElementById('btn');
const div = document.getElementById('app');

function calcular() {

    const mediaPonderada = ((parseFloat(nota1.value) * 1) + parseFloat((nota2.value) * 2) + parseFloat((nota3.value) * 3) + parseFloat((nota4.value) * 4)) / (1 + 2 + 3 + 4);
    
    const mensagem = `<p>As notas inseridas foram ${nota1.value}, ${nota2.value}, ${nota3.value}, ${nota4.value}<p>
    <p> E sua média ponderada foi ${mediaPonderada}<p>`;
    
    div.innerHTML= mensagem;

}

btn.addEventListener('click', calcular);