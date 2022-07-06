// Slider - Hub Members

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('myCard');
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    // Remueve la clase active a todas las páginas
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(' active', '');
    }
    // Añade la clase active a la página activada
    slides[slideIndex-1].className += ' active';
    switch(slideIndex) {
        case 1:
            slides[0].style.gridArea = 'card-1';
            slides[1].style.gridArea = 'card-2';
            slides[2].style.gridArea = 'card-3';
            slides[3].style.gridArea = 'card-4';
            break;
        case 2:
            slides[0].style.gridArea = 'card-4';
            slides[1].style.gridArea = 'card-1';
            slides[2].style.gridArea = 'card-2';
            slides[3].style.gridArea = 'card-3';
            break;
        case 3:
            slides[0].style.gridArea = 'card-3';
            slides[1].style.gridArea = 'card-4';
            slides[2].style.gridArea = 'card-1';
            slides[3].style.gridArea = 'card-2';
            break;
        case 4:
            slides[0].style.gridArea = 'card-2';
            slides[1].style.gridArea = 'card-3';
            slides[2].style.gridArea = 'card-4';
            slides[3].style.gridArea = 'card-1';
    }
}