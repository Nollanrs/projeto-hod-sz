
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagen");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {

    botao.addEventListener("click", () => {
        console.log("clicou no botão");
        desativarBotaoSelecionado();


        botao.classList.add("selecionado");

        esconderImagenAtiva();

        mostrarImagen(indice);

        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");
        mostrarInformacoes(indice);

    });
});

function mostrarImagen(indice) {
    imagens[indice].classList.add("ativa");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderImagenAtiva() {
    const imagenAtiva = document.querySelector(".ativa");
    imagenAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
