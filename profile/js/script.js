function enviarMensagem() {
    var nome =document.getElementById("idNome");

    if(nome.value !="") {
        alert("Obrigada, sr(a) " + nome.value + ", sua mensagem foi enviada com sucesso!");
    }
}