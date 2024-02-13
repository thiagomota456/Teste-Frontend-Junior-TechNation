function toggleClass(event) {

    const selected = document.querySelectorAll('.selected-lista-coluna-esquerda');
    selected.forEach(item => {
        item.classList.remove('selected-lista-coluna-esquerda');
        item.querySelector('a').classList.remove('colorir-link');
    });
    
    const target = event.currentTarget.parentElement;
    target.classList.add('selected-lista-coluna-esquerda');
    target.querySelector('a').classList.add('colorir-link');
    console.log("toggleClass");

}

//$("#conteudo").load("../../lista_de_notas_emitidas.html");
$("#conteudo").load("../../dashboard.html");