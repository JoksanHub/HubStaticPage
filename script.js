// Controlador
let control = document.getElementsByClassName("controller");
let images = document.getElementsByClassName("slide");
let my_timing = 4000;
let myCounting = 0;

// Controles automáticos
function empezar() {
    // Si todos los controladores tienen la clase active, borrar la clase active
    if (control[control.length-1].classList.contains('active')) {
        // Resetea las clases 'active' en controladores
        function resetClass() {
            for (let i = 0; i < control.length; i++) {
                control[i].classList.remove('active');
            }
        }
        resetClass();
        // Resetear la cuenta de las imágenes
        myCounting = 0;
        // Reiniciar slider
        empezar();
    }
    else {
        function addImages(conteo) {
            // Agrega uno más al conteo
            for (let i = conteo; i < control.length; i++) {
                if (control[i].classList.contains('active')) { myCounting++; }
                else { break; }
            }
            control[myCounting].classList.add('active');
            setTimeout(empezar, my_timing);
        }
        // Si no tiene ninguna clase agregada, reiniciar cuenta
        if (control[0].classList.contains('active')) {
            setTimeout(addImages(myCounting), my_timing);
            myCounting = 0; // Reestablecer cuenta a cero
        }
        // Ejecutar código casi inmediato
        else {
            setTimeout(addImages,5);
        }
    }
}

// Imagen
function naming() {
    let myImagesArray = Array.prototype.slice.call(images);
    let myImagePosition = 0;
    // Ejecutar función
    positionImage();

    function positionImage() {
        // Descubre donde se ubica la clase 'active'
        for (let i = 0; i < images.length; i++) {
            if(myImagesArray[i].classList.contains('active')) {
                myImagePosition = i;
                break;
            }
        }
        setTimeout(agregarClases, my_timing);

        function agregarClases() {
            if(images[myImagePosition] == images.length) {
                images[myImagePosition].classList.remove('active');
                // Reset myImagePosition
                myImagePosition = 0;
                images[0].classList.add('active');
                // Resetear función
                positionImage();
            }
            else {
                // Eliminar clase 'active' de la imagen actual
                images[myImagePosition].classList.remove('active');
                // Agregar clase 'active' de la próxima imagen
                if(myImagePosition < images.length-1) { images[myImagePosition+1].classList.add('active'); }
                else { images[0].classList.add('active'); }
                // Resetear función
                positionImage();
            }
        }
    }
}

// Text typing
const speed = 50;
let temaCountCharacter = 0;
let temaSelected = 0;
const temas = [
    'Seguridad Industrial',
    'Bioseguridad',
    'Ciberseguridad',
    'Seguridad en el hogar'
];
var mi_tema = document.getElementById('tema');

function typeWriter() {
    // Si ya han pasado todos los temas, reinciarlos
    if(temaSelected > temas.length-1) {
        temaSelected = 0;
        typeWriter();
        return;
    }
    // Calculo de tiempo restante para pasar al siguiente slide
    let newTiming = my_timing - (temas[temaSelected].length * speed);
    // Ejecutar función que añade caracteres mientras haya caracteres por agregar
    if(temaCountCharacter < temas[temaSelected].length) {
        // Añade una letra hasta completar la palabra
        mi_tema.innerHTML += temas[temaSelected].charAt(temaCountCharacter);
        temaCountCharacter++;

        setTimeout(typeWriter,speed);
        return;
    }
    if(temaCountCharacter == temas[temaSelected].length) {
        function my_funcion() {
            temaCountCharacter = 0;
            temaSelected++;
            setTimeout(typeWriter,speed);
            mi_tema.innerHTML = '';
            return;
        }
        setTimeout(my_funcion,newTiming);
    }
}
typeWriter();

/*
function action() {
  if (isRemoving) {
    if (str.innerText.length > 0) {
      str.innerText = str.innerText.substr(0, str.innerHTML.length - 1);
      setTimeout( action, speed2 );
      return;
    }
    isRemoving = false;
    i++;
    if (i >= messages.length) {
      i = 0;
    }
    setTimeout( action, speed );
    return;
  }
  var message = messages[i];
  str.innerText = message.substr(0, str.innerHTML.length + 1);
  if (str.innerText.length === message.length) {
    isRemoving = true;
  }
  setTimeout( action, isRemoving ? speed2 : speed );
}

setTimeout( action, speed );*/

setTimeout(empezar(),my_timing);
setTimeout(naming(),my_timing);



/*let slideIndex = 1;
//showSlides(slideIndex); // Se ejecuta la función :D
var time = 3000; // Tiempo del slider

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide"); // Imágenes
    let controller = document.getElementsByClassName("controller"); // Controlador
    // Si 
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    // Ocultar imágenes que no deberían verse
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].className += " active";

    // Reemplazar clase activa por inactiva
    for (i = 0; i < controller.length; i++) {
        controller[i].className = controller[i].className.replace(" active", "");
    }
    controller[slideIndex-1].className += " active";

    setTimeout(newJeje, time);

    function newJeje() {
        console.log(slideIndex++);
    }
}
function nextImage() {
    console.log(slideIndex++);
}*/