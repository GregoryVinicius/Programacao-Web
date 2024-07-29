document.addEventListener("DOMContentLoaded", () => {
    verificarTema();    
});

async function consultarRepositorios(){
    const nomeUsuario = document.getElementById("inputNomeUsuario").value;

    const listaRepositorios = document.getElementById("listaRepositorios");

    const status = document.getElementById("status");
    
    listaRepositorios.innerText='';

    if(!nomeUsuario){
        alert("Informar o nome do usuário");
        return;
    }

    const url = `https://api.github.com/users/${nomeUsuario}/repos`;

    status.innerText="Carregando...";

    try{
        const resposta = await fetch(url);
        console.log("antes da promisse")

        if(!resposta.ok){
            alert("Erro ao realizar a consulta");
            return;
        }

        const repositorios = await resposta.json();

        repositorios.forEach(element => {
            const itemLista = document.createElement('li');
            itemLista.textContent = element.name;
            listaRepositorios.appendChild(itemLista);
        });

        console.log("Apôs a promisse");
    } catch (error){

    }
    
status.innerText("");
}

function verificarTema() {
    const temaArmazenado = localStorage.getItem('tema');
    if (temaArmazenado) {
        document.body.setAttribute("data-tema", temaArmazenado);
    }
};

function alterarTema() {
    const tema = document.body.getAttribute("data-tema");
    const novoTema = tema == "dark" ? "ligth" : "dark";
    document.body.setAttribute("data-tema", novoTema);
    localStorage.setItem("tema", novoTema);
}

function copiarTelefone(){
    const telefone = "44988182089";
    navigator.clipboard.writeText(telefone).then(()=>{
        alert("Telefone copiado para a área de trasferência")
    }).catch(error=>{
        console.error("erro ao copiar", error);
        alert("Erro ao copiar o conteúdo");
    })
}

function copiarEmail(){
    const email = "gregoryclariano@gmail.com";
    navigator.clipboard.writeText(email).then(()=>{
        alert("E-mail copiado para a área de trasferência")
    }).catch(error=>{
        console.error("erro ao copiar", error);
        alert("Erro ao copiar o conteúdo");
    })
}

function regraDe3(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;

    const mult = num2 * num3;

    x = mult / num1;
    alert(x);
}

function fatorial(){
    let numFato = document.getElementById("numFato").value;

    for (let i = numFato - 1; i > 0; i--){
        numFato = numFato * i;      
    }
    alert(numFato);
}

function gerarNomeAleatorio() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const nomeCompleto = `${user.name.first} ${user.name.last}`;
            document.getElementById('nomeAleatorio').innerText = nomeCompleto;
        })
        .catch(error => console.error('Erro ao buscar nome:', error));
}

function openNav() {
    document.getElementById("sidebar").style.width = "40vw";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}