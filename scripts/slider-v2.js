// Controlador
let control = document.getElementsByClassName('controller');
let images = document.getElementsByClassName('slide');
let myTiming = 4000;
let myCounting = 0;

// Controles automáticos
function controles() {
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
        controles();
    }
    else {
        function nuevoControl(conteo) {
            // Agrega uno más al conteo
            for (let i = conteo; i < control.length; i++) {
                if (control[i].classList.contains('active')) { myCounting++; }
                else { break; }
            }
            control[myCounting].classList.add('active');
            setTimeout(controles, myTiming);
        }
        // Si no tiene ninguna clase agregada, reiniciar cuenta
        if (control[0].classList.contains('active')) {
            setTimeout(nuevoControl(myCounting), myTiming);
            myCounting = 0; // Reestablecer cuenta a cero
        }
        // Ejecutar código casi inmediato
        else {
            setTimeout(nuevoControl,5);
        }
    }
}

// Imagen
function heroImagenes() {
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
        setTimeout(agregarClases, myTiming);

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


setTimeout(controles(),myTiming);
setTimeout(heroImagenes(),myTiming);