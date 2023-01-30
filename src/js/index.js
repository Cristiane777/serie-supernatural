
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDOVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

// identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () =>{
    // abrir a modal na tela
    alternarModal();
    video.setAttribute("src", linkDOVideo);
});



// identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", ()=>{
    // fechar modal
    alternarModal();
    video.setAttribute("src", "");
});








