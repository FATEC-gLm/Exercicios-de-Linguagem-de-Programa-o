const salario = document.getElementById('salario');
const quilowatts = document.getElementById('quilowatts');
const btn = document.getElementById('btn');
const divResultado = document.getElementById('resultado');


function calcular() {
    const valorSalario = parseFloat(salario.value);
    const valorQuilowatts = parseFloat(quilowatts.value);

    //valor em reais de cada quilowatt
    const valorUnitario = valorSalario / (100*7);
   

    //valor em reais a ser pago
    const valorReal = valorUnitario * valorQuilowatts;
  

    //valor com desconto de 10%
    const valorDesconto = valorReal * 0.1;


    //resultados

   const resultado1 = `<p>O valor do salário mínimo inserido foi R$ ${valorSalario}, o valor do quilowatts inserido foi ${valorQuilowatts} kW e seu valor em real para cada unidade de quilowatts é R$${valorUnitario.toFixed(2)}.</p>`
   const resultado2 = `<p>O valor do salário mínimo inserido foi R$ ${valorSalario}, o valor do quilowatts inserido foi ${valorQuilowatts} kW e o valor total a ser pago em reais fica R$ ${valorReal.toFixed(2)}.</p>`
   const resultado3 = `<p>O valor do salário mínimo inserido foi R$ ${valorSalario}, o valor do quilowatts inserido foi ${valorQuilowatts} kW e o novo valor após o desconto de 10% fica R$${valorDesconto.toFixed(2)}.</p>`

   divResultado.innerHTML = `${resultado1} <br> ${resultado2} <br> ${resultado3}.`
}

btn.addEventListener('click', calcular);