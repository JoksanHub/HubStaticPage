// Variables
let currentPage = 0;
let control = document.getElementsByClassName('controller');
let images = document.getElementsByClassName('slide');
let myImagesArray = Array.prototype.slice.call(images);

// Temas
const themes = [
    'Seguridad Industrial',
    'Bioseguridad',
    'Ciberseguridad',
    'Seguridad en el hogar'
];

// Text typing
const mySpeed = 60; // Velocidad al escribir letra por letra
let countCharacter = 0; // Conteo de caracteres
var myTheme = document.getElementById('tema'); // Ubicación del tema
let myTiming = 4000; // Tiempo entre diapositivas

function timeout() {
    startTyping();
    controles();
    
    // Comenzar a escribir
    setTimeout(()=>{
        // Sumarle uno más al tema actual para avanzar al siguiente slide
        images[currentPage].classList.remove('active');
        currentPage++; // Avaza a la siguiente diapositiva
        if (currentPage !== themes.length) {
            images[currentPage].classList.add('active');
        } else {
            images[0].classList.add('active');
        }
        deleteTyping(); // Borrar contenido dentro de etiqueta
        sliderImages(); // Avanza a la siguiente imagen

        // Si legó al límite de las palabras, reiniciar el contador
        if (currentPage == themes.length) {
            // Start again
            currentPage = 0;
            controlReset(); // Resetea controles
            timeout();
            return;
        }
        timeout();
    }, myTiming);
}

// Ejecutar la función en base al número de la diapositiva
timeout();

// Cambiar de página
function changeSliderPage(num) {
    // Change number
    deleteTyping();
    currentPage = num;
    console.log(currentPage);
    timeout();
}

// Empezar a escribir el tema
function startTyping() {
    // Cálculo de tiempo restante para pasar al siguiente slide
    // Ejecutar función en caso de que no haya llegado al límite de caracteres del tema
    if(countCharacter < themes[currentPage].length) {
        // Añade una letra hasta completar la palabra
        myTheme.innerHTML += themes[currentPage].charAt(countCharacter); // Añade un caracter
        countCharacter++; // Añade a la cuenta para añadir los próximos caracteres

        setTimeout(startTyping,mySpeed); // Reinicia la función para continuar escribiendo los temas
    }
}
// Borrar contenido dentro de etiqueta
function deleteTyping() {
    countCharacter = 0; // Reiniciar contador de caracteres
    myTheme.innerHTML = ''; // Borrar el contenido dentro de la etiqueta
}

// Controles automáticos
function controles() {
    if (currentPage == 0) {
        setTimeout( function(){
            control[currentPage].classList.add('active');
        }, 5);
    } else {
        control[currentPage].classList.add('active');
    }
}

// Resetea las clases 'active' en controladores
function controlReset() {
    for (let i = 0; i < control.length; i++) {
        control[i].classList.remove('active');
    }
}

// Cambiar imágenes del slider
function sliderImages() {
    if(images[currentPage] == images.length) {
        images[currentPage].classList.remove('active');
        images[0].classList.add('active');
    }
}