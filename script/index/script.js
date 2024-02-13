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

function toggleClasscListaColapse(event) {
    var elementoSelecionadoAnteriormente = document.getElementById("item-da-lista-colapse-selecionado");
    if (elementoSelecionadoAnteriormente) {
        elementoSelecionadoAnteriormente.removeAttribute("id");
    }
    
    var elementoClicado = event.target.parentElement;
    elementoClicado.id = "item-da-lista-colapse-selecionado";
}

function setConteudo(pagePath){

    documen.querySelector('#conteudo') = "";
    $("#conteudo").load(pagePath);
}

//Inicilização defalt por enqquanto
//$("#conteudo").load("../../lista_de_notas_emitidas.html");
//$("#conteudo").load("../../dashboard.html");
$("#conteudo").load("../../nodata.html");