var carta;

function pulsada(elem) {
    elem.className += " girada";
    //elem.claddList.add("girada");
    elem.children[0].style = "z-index: 10";
    elem.children[1].style = "z-index: 0";

    let giradas = document.getElementsByClassName("girada");

    for (let i = 0; i < giradas.length; i++) {
        if (giradas[i].attributes[1].value == elem.attributes[1].value) {
            elem.className += " correcta";
            giradas[i].className += " correcta";
        } else {
            //remover class girada
        }
        
    }
}


function compara(carta2) {
    if (carta == carta2) {
        
    }
}