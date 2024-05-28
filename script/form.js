

const datos = {
    email: '',
    tipo: 'Seleccione',
    paper: '',
    recibo: '',
    archivo: '',
    ficha : '',
    factura: '',
    rfc: '',
    archivoRFC: '',
    nombre: '',
    domicilio: '',
    colonia: '',
    cp: '',
    ciudad: '',
    estado: ''
}

const email = document.querySelector('#email');
email.addEventListener('input', leerInputs);

const tipo = document.querySelector('#tipo');
tipo.addEventListener('input', leerInputs);

const paper = document.querySelector('#paper');
paper.addEventListener('input', leerInputs);

const id2 = document.querySelector('#id2');
id2.addEventListener('input', leerInputs);

const constancia = document.querySelector('#constancia');
constancia.addEventListener('input', leerInputs);

const archivo = document.querySelector('#archivo');
archivo.addEventListener('input', leerInputs);

const recibo = document.querySelector('#recibo');
recibo.addEventListener('input', leerInputs);

const ficha = document.querySelector('#ficha');
ficha.addEventListener('input', leerInputs);

const factura = document.querySelector('#factura');
factura.addEventListener('input', leerInputs);

const siFacturo = document.querySelector('#siFacturo');
factura.addEventListener('input', leerInputs);

const rfc = document.querySelector('#rfc');
rfc.addEventListener('input', leerInputs);

const archivoRFC = document.querySelector('#archivoRFC');
archivoRFC.addEventListener('input', leerInputs);

const nombre = document.querySelector('#nombre');
nombre.addEventListener('input', leerInputs);

const domicilio = document.querySelector('#domicilio');
domicilio.addEventListener('input', leerInputs);

const colonia = document.querySelector('#colonia');
colonia.addEventListener('input', leerInputs);

const cp = document.querySelector('#cp');
cp.addEventListener('input', leerInputs);

const ciudad = document.querySelector('#ciudad');
ciudad.addEventListener('input', leerInputs);

const estado = document.querySelector('#estado');
estado.addEventListener('input', leerInputs);

tipo.addEventListener('change', function() {
    if (tipo.value === 'investigador') {
        id2.style.display = 'block';
        constancia.style.display = 'none';
    } else {
        id2.style.display = 'none';
        constancia.style.display = 'block';
    }
});

factura.addEventListener('change', function() {
    if (factura.value === 'si') {
        siFacturo.style.display = 'block';
    } else {
        siFacturo.style.display = 'none';
    }
});

function leerInputs(evento) {
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}
const registro = document.querySelector('#registro');

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const {email, tipo, paper, archivo, recibo, ficha, factura, rfc, archivoRFC, nombre, domicilio, colonia, cp, ciudad, estado} = datos;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email format
    if (!emailRegex.test(email)) {
        mostrarError('Email escrito incorrectamente', false);
    }

    if(email === '' || tipo === '' || paper === '' || archivo === '' || recibo === 'seleccione' || ficha === '' || factura === '') {
        mostrarError('Todos los campos son obligatorios', false);
        return;
    }

    if(factura === 'si' && (rfc === '' || archivoRFC === '' || nombre === '' || domicilio === '' || colonia === 'seleccione' || cp === '' || ciudad === '' || estado === '')) {
        mostrarError('Todos los datos de facturacion son obligatorios', false);
        return;
    }

    if(archivo.length > 0 && archivo[0].size > 3 * 1024 * 1024) {
        mostrarError('El archivo es muy pesado', false);
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
    registro.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 3000);
}