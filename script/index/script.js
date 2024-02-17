function setMenu(menuName){
    document.querySelector("#menu-selected").innerHTML = menuName;
}

function toggleClass(event, page, script) {
    elementoClicado = event.currentTarget; 
    clearListaColunaEsquerda();
    marcarListaColunaEsquerda(elementoClicado);
    setMenu(elementoClicado.textContent.trim());
}

function marcarListaColunaEsquerda(clickedLi){
    var clickedLink = clickedLi.querySelector('a');
    clickedLi.classList.add('selected-lista-coluna-esquerda');
    clickedLink.classList.add('colorir-link');
}

function clearListaColunaEsquerda(){
    var lis = document.querySelectorAll('#lista-coluna-esquerda li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('selected-lista-coluna-esquerda');
        lis[i].querySelector('a').classList.remove('colorir-link');
    }
}

function toggleClasscListaColapse(event, page, script) {
    elementoClicado = event.target.closest("li");
    clearListaColapse();
    marcarListaColapse(elementoClicado);
    setMenu(elementoClicado.textContent.trim());
}

function marcarListaColapse(elementoClicado){
    elementoClicado.id = "item-da-lista-colapse-selecionado";
}

function clearListaColapse(){
    var elementoSelecionadoAnteriormente = document.getElementById("item-da-lista-colapse-selecionado");
    if (elementoSelecionadoAnteriormente) {
        elementoSelecionadoAnteriormente.removeAttribute("id");
    }
}