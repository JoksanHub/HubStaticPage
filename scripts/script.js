// Menú del Navbar
function toggleMenu() {
    // Activa y desactiva la clase active
    document.getElementById('navbar-mb').classList.toggle('active');
    document.getElementById('navbar').classList.toggle('active');
}

// Esconder Navbar al hacer scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.backgroundColor = "#060D24";
        document.getElementById("navbar-mb").style.position = "fixed";
    } else {
        document.getElementById("navbar").style.position = "absolute";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar-mb").style.position = "absolute";
    }
}






// Cierre de modal
var modal = document.getElementsByClassName("modal");

// Cuando el usuario hace click fuera de un modal, este se cierra
window.onclick = function(event) {
    for (let i = 0; i < modal.length; i++) {
        if (event.target == modal[i]) {
            window.location.href = './#';
        }
    }
}





// Esconder Navbar al hacer scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.backgroundColor = "#060D24";
        document.getElementById("navbar-mb").style.position = "fixed";
    } else {
        document.getElementById("navbar").style.position = "absolute";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar-mb").style.position = "absolute";
    }
}