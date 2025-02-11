function cambiarColor(elemento) {
    elemento.style.backgroundColor = '#ffcccb';
}

function restaurarColor(elemento) {
    elemento.style.backgroundColor = 'white';
}

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function cambiarTexto(elemento, nuevoTexto) {
    elemento.innerText = nuevoTexto;
}

function agrandar(elemento) {
    elemento.style.transform = 'scale(1.1)';
}

function restaurarTamanio(elemento) {
    elemento.style.transform = 'scale(1)';
}

function resaltar(elemento) {
    elemento.style.border = '2px solid blue';
}

function quitarResalto(elemento) {
    elemento.style.border = 'none';
}

function cambiarFondo(event, elemento) {
    event.preventDefault();
    elemento.style.backgroundColor = '#ffccfb';
}