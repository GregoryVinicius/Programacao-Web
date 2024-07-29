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