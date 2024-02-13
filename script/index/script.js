function setMenu(menuName){
    document.querySelector("#menu-selected").innerHTML = menuName;
}

function toggleClass(event) {
    var lis = document.querySelectorAll('#lista-coluna-esquerda li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('selected-lista-coluna-esquerda');
        lis[i].querySelector('a').classList.remove('colorir-link');
    }

    var clickedLi = event.currentTarget; 
    var clickedLink = clickedLi.querySelector('a');
    clickedLi.classList.add('selected-lista-coluna-esquerda');
    clickedLink.classList.add('colorir-link');
    setMenu(clickedLink.textContent.trim());
}

function toggleClasscListaColapse(event) {
    var elementoSelecionadoAnteriormente = document.getElementById("item-da-lista-colapse-selecionado");
    if (elementoSelecionadoAnteriormente) {
        elementoSelecionadoAnteriormente.removeAttribute("id");
    }
    
    var elementoClicado = event.target.closest("li");
    elementoClicado.id = "item-da-lista-colapse-selecionado";
    setMenu(elementoClicado.textContent.trim());
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

//Inicilização defalt por enqquanto
//$("#conteudo").load("../../lista_de_notas_emitidas.html");
//$("#conteudo").load("../../dashboard.html");
$("#conteudo").load("../../nodata.html");