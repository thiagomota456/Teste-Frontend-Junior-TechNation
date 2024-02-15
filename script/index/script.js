function setMenu(menuName){
    document.querySelector("#menu-selected").innerHTML = menuName;
}

function toggleClass(event) {
    clearListaColunaEsquerda();
    marcarListaColunaEsquerda(event.currentTarget);
    setMenu(clickedLink.textContent.trim());
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

function toggleClasscListaColapse(event) {
    clearListaColapse();
    marcarListaColapse(event.target.closest("li"));
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

function setConteudo(pagePath){
    documen.querySelector('#conteudo') = "";
    $("#conteudo").load(pagePath);
}

window.addEventListener('load', function() {

    if (!sessionStorage.getItem('primeiraVez')) {
        //Carregar pagina no data
        $("#conteudo").load("../../nodata.html");
        
        //Limpar seleções
        const selected = document.querySelectorAll('.selected-lista-coluna-esquerda');
        selected.forEach(item => {
            item.classList.remove('selected-lista-coluna-esquerda');
            item.querySelector('a').classList.remove('colorir-link');
        });

        var elementoSelecionadoAnteriormente = document.getElementById("item-da-lista-colapse-selecionado");
        if (elementoSelecionadoAnteriormente) {
            elementoSelecionadoAnteriormente.removeAttribute("id");
        }

        sessionStorage.setItem('primeiraVez', 'true');
        
    } else {
        //console.log('A página está sendo recarregada.');
    }
});

function buscarTexto(elementoPai, texto) {
    var elementos = elementoPai.querySelectorAll('li');
    var resultados = [];

    elementos.forEach(function(elemento) {
        var conteudo = elemento.textContent || elemento.innerText;
        if (conteudo.indexOf(texto) !== -1) {
            resultados.push(elemento);
        }
    });

    return resultados;
}

//Inicilização defalt por enqquanto
//$("#conteudo").load("../../lista_de_notas_emitidas.html");
//$("#conteudo").load("../../dashboard.html");
$("#conteudo").load("../../nodata.html");