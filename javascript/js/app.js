const enlace = document.querySelector('.navegacion a');
enlace.textContent = 'nuevo-enlace.html';

const nuevoEnlace = document.createElement('A');
nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = 'Nuevo Enlace';
nuevoEnlace.classList.add('navegacion__enlace');

const nav = document.querySelector('.navegacion');
nav.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

// console.log(1);
// window.addEventListener('load', function() { // load espera a que todo el HTML este listo
//     console.log(2);
// })

// window.onload = function() {
//     console.log(3);
// }

// console.log(4);
// window.addEventListener('load', imprimir)
// window.onload = function(){
//     console.log(3);
// }
// document.addEventListener('DOMContentLoaded', function() {
//     console.log(5);
// })
// console.log(4);
// function imprimir() {
//     console.log(2);
// }

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
nombre.addEventListener('input', leerInputs);

const email = document.querySelector('#email');
email.addEventListener('input', leerInputs);

const mensaje = document.querySelector('#mensaje');
mensaje.addEventListener('input', leerInputs);

function leerInputs(evento) {
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios', false);
        return;
    }

    mostrarError('Mensaje enviado correctamente', true);
})

function mostrarError (mensaje, ver) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    if(ver) {
        error.classList.add('exito');
    }
    error.classList.add('error');
    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 3000);
}