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

function regraDe3(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;

    const mult = num2 * num3;

    x = mult / num1;
    alert(x);
}

function openNav() {
    document.getElementById("sidebar").style.width = "40vw";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}