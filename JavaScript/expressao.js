function expressao(parametro){
    console.log(parametro)
    document.getElementById('tela').value += parametro;

}
function limpar(){
    document.getElementById('tela').value = null;
}

function resultado(){
    try{
        let expressao = document.getElementById('tela').value;
        let resultado = eval(expressao);
        document.getElementById('tela').value = resultado;
    }catch (error){
        document.getElementById('tela').value = "Erro";
    }
}

