let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let numero3 = document.getElementById('numero3');
let numero4 = document.getElementById('numero4');
let numero5 = document.getElementById('numero5');
let btn = document.getElementById('btn');
let div = document.getElementById('app');

function escrever(){
    let soma = parseInt(numero1.value) + parseInt(numero2.value) + parseInt(numero3.value) + parseInt(numero4.value) + parseInt(numero5.value);

    div.innerHTML=`Os números digitados foram ${numero1.value}, ${numero2.value}, ${numero3.value}, ${numero4.value}, ${numero5.value} e sua soma é ${soma}`
}

btn.addEventListener('click', escrever);