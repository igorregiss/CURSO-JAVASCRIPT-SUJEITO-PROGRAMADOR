
var area = document.getElementById('area')

function entrar(){
    var nome = prompt("Digite seu nome");

    if(nome == '' || nome == null){
        alert("Ops, algo deu errado!");
        area.innerHTML = "Clique no botão para acessar...";
    }else{
        area.innerHTML = "Bem vindo " + nome + " ";
    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da conta"
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);
    }
}

function sair(){
    alert("Até mais");
    area.innerHTML = "Você saiu!"
}

function mediaAluno(media1,media2){

    var media = (nota1 + nota2) / 2;
    if(media >= 7){
        alert("Aluno aprovado com a média: " + media);
    }else if(media < 7){
        alert("Aluno reprovado com média: " + media)
    }
}

function aluno( nome, curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;
    
}