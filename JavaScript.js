/* MOHAMMAD - page accueil */

//paramètres slideshow
let slideIndex = 1;
let autoplayInterval;

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    startAutoplay();
});

// Boutons flèches slideshow
function plusSlides(n) {
    showSlides(slideIndex += n);
    resetAutoplay();
}

// Points slideshow
function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoplay();
}

// Affiche le slide demandé
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // Réinitialise tous les slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("hide-left");
    }

    // Gère le slide précédent (qui part à gauche)
    let previous = slideIndex - 2;
    if (previous < 0) previous = slides.length - 1;
    slides[previous].classList.add("hide-left");

    // Active le slide courant
    slides[slideIndex - 1].classList.add("active");

    // Mise à jour des dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }
    dots[slideIndex - 1].classList.add("active-dot");
}

// Autoplay toutes les 5 secondes
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
}

// Quand l’utilisateur interagit avec les flèches du slideshow:
function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
}

/*Footer*/
const footer = document.querySelector("footer");
let scrollTimeout;

// Footer visible dès le chargement
footer.style.bottom = "0";

window.addEventListener("scroll", () => {

    // Cache le footer pendant le scroll
    footer.style.bottom = "-150px";

    clearTimeout(scrollTimeout);

    // Quand on arrête de scroller → on le montre après un petit délai
    scrollTimeout = setTimeout(() => {
        footer.style.bottom = "0";
    }, 150);

});


/* DAVID - page histoire */

// paramètres du mode clair/sombre
function switchMode() {
    document.body.classList.toggle('dark');
    let moon = document.getElementById ("moon");
    if(moon.className=="moon"){
        moon.className="sun";
        document.body.style.backgroundColor = "#141D26";
        document.body.style.color = "#fff";
    }
    else {
        moon.className ="moon";
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }
    // mettre à jour le label texte immédiatement
    updateModeLabel();
}

// Met à jour le label texte indiquant le mode (clair / sombre)
function updateModeLabel(){
    const label = document.getElementById('mode-label');
    if(!label) return;
    if(document.body.classList.contains('dark')){
        label.textContent = 'Mode sombre';
    } else {
        label.textContent = 'Mode clair';
    }
}

// Initialiser le label au chargement
document.addEventListener('DOMContentLoaded', () => {
    updateModeLabel();
});


/* CLEMENT - page produits */

/* FARES - page contact */
