const datos = {
    email: '',
    paper: ''
}

const email = document.querySelector('#email');
email.addEventListener('input', leerInputs);

const paper = document.querySelector('#paper');
paper.addEventListener('input', leerInputs);

function leerInputs(evento) {
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const {email, paper} = datos;

    if(email === '' || paper === '') {
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