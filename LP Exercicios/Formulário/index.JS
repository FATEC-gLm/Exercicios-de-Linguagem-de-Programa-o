// Capturando dados
let nome = document.getElementById('nome');
let idade = document.getElementById('idade');
let btn = document.getElementById('btn');
let div = document.getElementById('app');

// criando a função para exibir os dados
function escrever() {
    // Exibindo os elementros no console
    console.log(nome);
    console.log(idade);
    console.log(btn);
    console.log(app);

    // inserindo os dados formatados no componente DIV
    // para pegar o valor devemos utilizar '.value'
    div.innerHTML = `O nome digitado foi ${nome.value} e a idade digitada foi ${idade.value}`;

}

// vinculando o evento de clicar no botão para chamar a função escrever
btn.addEventListener('click', escrever);

