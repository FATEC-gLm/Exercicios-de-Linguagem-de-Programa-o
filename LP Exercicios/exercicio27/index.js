const numero = document.getElementById('numero');
const btn = document.getElementById('btn');
const div = document.getElementById('app');

function calcular(){
    if(!isNaN(numero.value) && numero.value >0){
        const raiz = parseInt(Math.sqrt(numero.value));
        
        div.innerHTML=`O número inserido foi ${numero.value} e sua raiz quadrada é ${raiz}.`;
    }
    else{
        div.innerHTML='Por gentileza inserir um número maior que 0.';
    }
}

btn.addEventListener('click', calcular);