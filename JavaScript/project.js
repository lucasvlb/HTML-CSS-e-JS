
const entrada = document.getElementById('add');
const botao = document.getElementById('add');
const lista = document.getElementById('saida');
const itens =  [];

botao.addEventListener('click', function (){
    let valorEntrada = entrada.value;
    itens.push(valorEntrada);
    console.log(itens);
    saida();

});

function saida(){
    let valorEntrada = entrada.value;
    lista.innerHTML = "";
for (let i = 0; i < itens.length; i++){
    let li = document.createElement("li");
    li.textContent = valorEntrada;
    lista.appendChild(li);
}}

/*botao.addEventListener('mouseover', function (){

    entrada.value = "Voce passou por mim.";

})