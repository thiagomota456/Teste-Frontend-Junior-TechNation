function toggleClass(event) {

    const selected = document.querySelectorAll('.selected-lista-coluna-esquerda');
    selected.forEach(item => {
        item.classList.remove('selected-lista-coluna-esquerda');
        item.querySelector('a').classList.remove('color-black');
    });
    
    const target = event.currentTarget.parentElement;
    target.classList.add('selected-lista-coluna-esquerda');
    target.querySelector('a').classList.add('color-black');
    console.log("toggleClass");

    selecionaOMenuDaNavBar();
}

//$("#conteudo").load("../../lista_de_notas_emitidas.html");
$("#conteudo").load("../../dashboard.html");