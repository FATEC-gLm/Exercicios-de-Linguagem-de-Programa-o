const numero1 = document.getElementById('numero1');
const btn = document.getElementById('btn');
const div = document.getElementById('app');

function escrever() {
    // Verifica se o valor inserido é um número
    if (!isNaN(numero1.value)) {
        const sucessor = parseInt(numero1.value) + 1;
        const antecessor = parseInt(numero1.value) - 1;
        div.innerHTML = `O número digitado foi ${numero1.value}, seu antecessor é ${antecessor} e seu sucessor é ${sucessor}.`;
    }
else {
    div.innerHTML = 'Por favor, digite um número válido';
}
}

btn.addEventListener('click', escrever);