const raioMenor = document.getElementById('raioMenor');
const raioMaior = document.getElementById('raioMaior');
const btn = document.getElementById('btn');
const divResultado = document.getElementById('resultado');

//função para calcular a área da circunferencia menor
function calcularMenor(r) {
    const areaMenor = Math.PI * Math.pow(r, 2);
    return areaMenor.toFixed(2);
}

//função para calcular a área da circunferencia maior
function calcularMaior(R) {
    const areaMaior = Math.PI * Math.pow(R, 2);
    return areaMaior.toFixed(2);
}

//função para calcular a área total
function calcularArea(areaMenor, areaMaior) {
    const area = areaMenor - areaMaior;
    return area.toFixed(2);
}

//função para validar os valores
function validarValores(r, R) {
    if (!isNaN(r) && !isNaN(R) && r > 0 && R > 0) {
        return true;
    }
    else {
        return false;
    }
}

//função para exibir o resultado
function exibirResultado(areaMenor, areaMaior, area){
    const resultado = `<p>Os valores dos raios inseridos foram ${raioMenor.value} e ${raioMaior.value}, sua área da circunferencia menor é ${areaMenor} e sua área da circunferência maior é ${areaMaior}, então sua área total será ${area}.<p>`

    divResultado.innerHTML = resultado;
}

//função para calcular tudo
function calcular(){
    const r = parseFloat(raioMenor.value);
    const R = parseFloat(raioMaior.value);

    if(validarValores(r, R)){
        const areaMenor = calcularMenor(r);
        const areaMaior = calcularMaior(R);
        const area = calcularArea(areaMenor, areaMaior);
        exibirResultado(areaMenor, areaMaior, area);
    }

    else {
        alert('Por favor, digite um valor valido');
    }
}

btn.addEventListener('click', calcular);