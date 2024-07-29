document.addEventListener("DOMContentLoaded", () => {
    verificarTema();    
});

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

function fatorial(){
    let numFato = document.getElementById("numFato").value;

    for (let i = numFato - 1; i > 0; i--){
        numFato = numFato * i;      
    }
    alert(numFato);
}

function openNav() {
    document.getElementById("sidebar").style.width = "40vw";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}