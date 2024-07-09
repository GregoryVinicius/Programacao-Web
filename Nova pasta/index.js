document.addEventListener("DOMContentLoaded", () => {
    verificarTema();
    verificarLocalizacaoStorage();
    apresentarCurriculo();
    lerCurriculo();
});

function verificarLocalizacaoStorage(){
    const localizacao = localStorage.getItem('localizacao');
    if(localizacao){
        document.getElementById("localizacao").value = localizacao;
    } else{
        getLocalizacao();
    }
}

function getLocalizacao(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
        fetch(`https://geocode.xyz/${lat},${long}?geoit=json`).then(response=>response.json()).then(data=>{
            const localizacao = data.region || data.city || `${lat},${long}`;
            document.getElementById("localizacao").value=localizacao;
            localStorage.setItem("localizacao", localizacao);
        }).catch(error=>console.error("Alguma coisa deu errado", error));
    });
    }
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

function gerarCV(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const localizacao = document.getElementById("localizacao").value;
    const experiencia = document.getElementById("experiencia").value;
    const habilidades = document.getElementById("habilidades").value;
    const curriculo = {nome, email, telefone, localizacao, experiencia, habilidades};
    console.log(curriculo);
    localStorage.setItem("curriculo", JSON.stringify(curriculo));
    apresentarCurriculo(curriculo);
}

function apresentarCurriculo(data){
    const template = document.getElementById('templateCurriculo').contentEditable.cloneNode(true);
    template.querySelector(".nome").textContent = data.nome;
    template.querySelector(".email").textContent = data.email;
    template.querySelector(".telefone").textContent = data.telefone;
    template.querySelector(".localizacao").textContent = data.localizacao;
    template.querySelector(".experiencia").textContent = data.experiencia;
    template.querySelector(".habilidade").textContent = data.habilidade;

    const mostrarCurriculo = document.getElementById("mostraCurriculo");
    mostrarCurriculo.innerHTML = "";
    mostrarCurriculo.appendChild(template);
}

function lerCurriculo(){
    const curriculo = JSON.parse(localStorage.getItem("curriculo"));
    if(curriculo){
        apresentarCurriculo(curriculo);
    }
}

function copiar(){
    const curriculo = document.getElementById("mostrarCurriculo").textContent;
    navigator.clipboard.writeText(curriculo).then(()=>{
        alert("Conteudo copiado para a área de trasferência")
    }).catch(error=>{
        console.error("erro ao copiar", error);
        alert("Erro ao copiar o conteúdo");
    })
}