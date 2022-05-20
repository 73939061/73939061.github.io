const serviciosContenido = document.querySelector('.serviciosContenido')
const conMedica = document.querySelector('#conMedica')
const desMedica = document.querySelector('#desMedica')
const derMedica = document.querySelector('#derMedica')


document.addEventListener('DOMContentLoaded', mostrarConMedica);
conMedica.addEventListener('click', mostrarConMedica);
desMedica.addEventListener('click', mostrarDesMedica);
derMedica.addEventListener('click', mostrarDerMedica);

function mostrarConMedica() {
    limpiarHTML();
    contenp1 = 'Aquí tratamos a tu mascota con mucho amor y cariño, ofrecemos evaluación de signos vitales, respiratorios y observación física detallada. Contamos con los mejores profesionales dispuestos a darla toda por tu mascota.'
    const pConMedica = document.createElement('p')
    const imgConMedica = document.createElement('img')
    imgConMedica.classList.add('imgSer')
    imgConMedica.src = '../IMAGENES/imgServicio/imagen2.jpg'
    pConMedica.textContent = contenp1
    pConMedica.classList.add('parraMedica')
    serviciosContenido.insertBefore( pConMedica, serviciosContenido.children[0] );
    serviciosContenido.insertBefore( imgConMedica, serviciosContenido.children[1] );
}

function mostrarDesMedica() {
    limpiarHTML();
    contenp2 = 'Contamos con los mejores productos del mercado usados en el tratamiento y control de parásitos internos, tambien hacemos uso de comprimidos para el tratamiento de parásitos externos tales como pulgas, garrapatas y otros que ponen en peligro la vida de tu mascota'
    const pDesMedica = document.createElement('p')
    const imgDesMedica = document.createElement('img')
    imgDesMedica.classList.add('imgSer')
    imgDesMedica.src = '../IMAGENES/imgServicio/imagen3.jpg'
    pDesMedica.textContent = contenp2
    pDesMedica.classList.add('parraMedica')
    serviciosContenido.insertBefore( pDesMedica, serviciosContenido.children[0] );
    serviciosContenido.insertBefore( imgDesMedica, serviciosContenido.children[1] );
}

function mostrarDerMedica( ) {
    limpiarHTML();
    contenp3 = 'Ofrecemos consultas y tratamientos especializados para mascotas con problemas en la piel, incluimos diferentes técnicas y tecnología de punta que hacen de estos procedimientos los más seguros.'
    const pDerMedica = document.createElement('p')
    const imgDerMedica = document.createElement('img')
    imgDerMedica.classList.add('imgSer')
    imgDerMedica.src = '../IMAGENES/imgServicio/imagen4.jpg'
    pDerMedica.textContent = contenp3
    pDerMedica.classList.add('parraMedica')
    serviciosContenido.insertBefore( pDerMedica, serviciosContenido.children[0] );
    serviciosContenido.insertBefore( imgDerMedica, serviciosContenido.children[1] );
}

function limpiarHTML() {
    while ( serviciosContenido.firstChild ) {
        serviciosContenido.removeChild( serviciosContenido.firstChild )  
    }
}