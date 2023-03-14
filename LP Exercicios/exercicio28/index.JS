const numero = document.getElementById('numero');
const btn = document.getElementById('btn');
const div = document.getElementById('app');

function calcular (){
    if (!isNaN(numero.value) && numero.value > 0){
        const potencia2 = parseInt(Math.pow(numero.value,2));
        const potencia3 = parseInt(Math.pow(numero.value,3));
        const potencia4 = parseInt(Math.pow(numero.value,4));
        const potencia5 = parseInt(Math.pow(numero.value,5));

        div.innerHTML=`O número digitado foi ${numero.value}, e seu valor elevado a 2 é ${potencia2}, seu valor elevado a 3 é ${potencia3}, e seu valor elevado a 4 é ${potencia4} e seu valor elevado a 5 é ${potencia5}.`;
    }
    else {
        div.innerHTML='Por favor, digite um número maior que <strong>0</strong>.';
    }
}

btn.addEventListener('click', calcular);