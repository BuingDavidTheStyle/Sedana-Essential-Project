/* MOHAMMAD - page accueil */



//paramètres slideshow
let slideIndex = 1;
let autoplayInterval;

function ensureLoginModal() {
    // Avoid duplicate
    if (document.querySelector('.login-btn') && document.getElementById('D') && document.getElementById('overlay')) return;

    const isEN = (localStorage.getItem('lang') || 'fr') === 'en';

    // Create login button if missing
    let loginBtn = document.querySelector('.login-btn');
    if (!loginBtn) {
        loginBtn = document.createElement('button');
        loginBtn.className = 'login-btn';
        loginBtn.type = 'button';
        loginBtn.textContent = isEN ? 'Log in' : 'Se Connecter';
        loginBtn.addEventListener('click', toggleLogin);
        const header = document.querySelector('header');
        if (header) header.insertAdjacentElement('afterend', loginBtn);
        else document.body.prepend(loginBtn);
    }

    // Create overlay if missing
    if (!document.getElementById('overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.className = 'overlay';
        overlay.addEventListener('click', toggleLogin);
        document.body.appendChild(overlay);
    }

    // Create modal if missing
    if (!document.getElementById('D')) {
        const article = document.createElement('article');
        article.id = 'D';
        article.className = 'float';
        article.innerHTML = `
        <div class="centero">
            <h1 id="je_suis_differents"> ${isEN ? 'Log in' : ' Se Connecter'}</h1>
            <form method="post">
                <button type="button" class="close-btn" onclick="toggleLogin()">×</button>

                <div class="txt_field">
                    <input type="text" required>
                    <span> </span>
                    <label>${isEN ? 'Email address *' : 'Adresse électronique *'}</label>
                </div>

                <div class="txt_field">
                    <input type="password" required>
                    <span> </span>
                    <label>${isEN ? 'Password *' : ' Mot de passe *'}</label>
                </div>

                <div class="forgot">${isEN ? 'Having trouble logging in?' : " probleme d'identification ?"}</div>
                <input type="submit" value="${isEN ? 'Log in' : 'Login'}">
                <div class="users_signup">
                    ${isEN ? 'Sign up' : "S'inscrire"} <a href="#">${isEN ? 'Here' : 'Ici'}</a>
                </div>
            </form>
        </div>`;
        // Insert after login button
        const btnRef = document.querySelector('.login-btn');
        if (btnRef) btnRef.insertAdjacentElement('afterend', article);
        else document.body.appendChild(article);
    }
}

function showLangToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.setAttribute('role', 'status');
    toast.style.cssText = [
        'position:fixed',
        'bottom:24px',
        'right:24px',
        'background:#111',
        'color:#fff',
        'padding:12px 16px',
        'border-radius:10px',
        'box-shadow:0 8px 24px rgba(0,0,0,0.25)',
        'opacity:0',
        'transform:translateY(10px)',
        'transition:opacity .25s, transform .25s',
        'z-index:10001',
        'font-size:14px',
        'font-weight:600'
    ].join(';');
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 250);
    }, 2200);
}

function applyLang(lang) {
    // html lang
    document.documentElement.setAttribute('lang', lang);

    // Search placeholder
    const searchInput = document.querySelector('.search-bar input[name="q"]');
    if (searchInput) searchInput.placeholder = lang === 'en' ? 'Search for a product...' : 'Rechercher un produit...';

    // Navbar labels
    document.querySelectorAll('.navbar a.navbar_link').forEach(a => {
        const href = a.getAttribute('href') || '';
        if (href.includes('accueil')) a.textContent = lang === 'en' ? 'Home' : 'Accueil';
        if (href.includes('histoire')) a.textContent = lang === 'en' ? 'Our Story' : 'Histoire';
        if (href.includes('produits')) a.textContent = lang === 'en' ? 'Products' : 'Produits';
        if (href.includes('contact')) a.textContent = lang === 'en' ? 'Contact' : 'Contact';
    });

    // Login button
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) loginBtn.textContent = lang === 'en' ? 'Log in' : 'Se Connecter';

    // Login modal labels
    const title = document.getElementById('je_suis_differents');
    if (title) title.textContent = lang === 'en' ? 'Log in' : ' Se Connecter';
    const labels = document.querySelectorAll('#D .txt_field label');
    if (labels && labels.length >= 2) {
        if (lang === 'en') {
            labels[0].textContent = 'Email address *';
            labels[1].textContent = ' Password *';
        } else {
            labels[0].textContent = 'Adresse électronique *';
            labels[1].textContent = ' Mot de passe *';
        }
    }
    const forgot = document.querySelector('#D .forgot');
    if (forgot) forgot.textContent = lang === 'en' ? 'Having trouble logging in?' : " probleme d'identification ?";
    const submit = document.querySelector('#D input[type="submit"]');
    if (submit) submit.value = lang === 'en' ? 'Log in' : 'Login';
    const signup = document.querySelector('#D .users_signup');
    if (signup) signup.innerHTML = lang === 'en' ? 'Sign up <a href="#">Here</a>' : `S'inscrire <a href="#">Ici</a>`;

    // Main section header (if present)
    const h2except = document.getElementById('except');
    if (h2except) h2except.innerHTML = lang === 'en' ? `Let’s Get to Know Each Other Better <span>⚜️​</span>` : ` Faisons plus ample connaissance <span>⚜️​</span>`;
}

function ensureLoginBackgroundCSS() {
    if (document.getElementById('login-bg-css')) return;
    const st = document.createElement('style');
    st.id = 'login-bg-css';
    st.textContent = `
      #D.float{background-image:url('images/ylangblanc.png') !important;background-size:cover;background-position:center;background-repeat:no-repeat;}
      body.dark-mode #D.float{background-image:url('images/ylangnoir.png') !important;}
    `;
    document.head.appendChild(st);
}

document.addEventListener("DOMContentLoaded", () => {
    ensureLoginModal();
    ensureLoginBackgroundCSS();

    // Appliquer la langue sauvegardée
    const savedLang = localStorage.getItem('lang') || currentLang || 'fr';
    currentLang = savedLang;
    applyLang(currentLang);

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

/* --- FOOTER DYNAMIQUE (corrigé) --- */
function initFooter() {
    const footer = document.querySelector("footer");
    if (!footer) return;

    let scrollTimeout;

    // footer visible au départ
    footer.style.bottom = "0";

    window.addEventListener("scroll", () => {
        footer.style.bottom = "-150px";

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            footer.style.bottom = "0";
        }, 150);
    });
}

// On l’active au chargement initial
initFooter();



/* DAVID - page histoire */

function toggleLogin() {
    const form = document.getElementById('D');
    const overlay = document.getElementById('overlay');
    form.classList.toggle('active');
    overlay.classList.toggle('active');
}

function handleSubmit(e) {
    e.preventDefault();
    alert('Formulaire soumis !');
}

// Fermer avec la touche Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const form = document.getElementById('D');
        const overlay = document.getElementById('overlay');
        if (form.classList.contains('active')) {
            toggleLogin();
        }
    }
});




// paramètres du mode clair/sombre
function switchMode() {

    // appliquer ou retirer le mode sombre
    document.body.classList.toggle("dark-mode");

    let moon = document.getElementById("moon");

    // Lune ↔ Soleil
    if (moon.classList.contains("moon")) {
        moon.classList.remove("moon");
        moon.classList.add("sun");
    } else {
        moon.classList.remove("sun");
        moon.classList.add("moon");
    }
    /* Style mais non
    const gradientSection = document.getElementById("gradient");

    if (document.body.classList.contains("dark-mode")) {
        gradientSection.style.backgroundImage = "url('images/ylangnoir.png')";
    } else {
        gradientSection.style.backgroundImage = "url('images/ylangblanc.png')";
    }*/


}



/* CLEMENT - page produits */

//slide pour ateliers
let Cindex = 0;
const Cslides = document.querySelectorAll('.Cslide');

function showCslide(i) {
    Cslides.forEach(slide => slide.classList.remove('Cactive'));
    Cslides[i].classList.add('Cactive');
}

function nextCslide() {
    Cindex = (Cindex + 1) % Cslides.length;
    showCslide(Cindex);
}

function prevCslide() {
    Cindex = (Cindex - 1 + Cslides.length) % Cslides.length;
    showCslide(Cindex);
}

document.querySelector('.Cnext').addEventListener('click', nextCslide);
document.querySelector('.Cprev').addEventListener('click', prevCslide);

// Auto défilement 5 secondes
setInterval(nextCslide, 5000); //en ms

//catalogue

// Listes des produits par catégorie
const CcatalogueProduits = {
    bougies: [
        { img: "images/bougie1.jpg",
            desc: { fr: "Bougie parfumée coco sauvage", en: "Wild coconut scented candle" },
            prix: 10 ,
            nom: {fr:"Bougie Coco",en:"Coconut candle"} },

        { img: "images/bougie2.jpg",
            desc: { fr: "Bougie parfumée pomme sauvage", en: "Wild apple scented candle" },
            prix: 10 ,
            nom: {fr:"Bougie Coco",en:"Coconut candle"} },

        { img: "images/bougie3.jpg",
            desc: { fr: "Bougie parfumée coco sauvage", en: "Wild coconut scented candle" },
            prix: 10 ,
            nom: {fr:"Bougie Coco",en:"Coconut candle"} },

        { img: "images/bougie4.jpg",
            desc: { fr: "Bougie parfumée banane sauvage", en: "Wild banana scented candle" },
            prix: 10 ,
            nom: {fr:"Bougie Coco",en:"Coconut candle"} },

        { img: "images/candlejar.png",
            desc: { fr: "Bougie parfumée coco sauvage", en: "Wild coconut scented candle" },
            prix: 10 ,
            nom: {fr:"Bougie Coco",en:"Coconut candle"} }
    ],

    sel_de_bain: [
        { img: "images/bath_salt.png",
            desc: { fr: "Bougie parfumée coco sauvage", en: "Wild coconut scented candle" },
            prix: 10 ,
            nom: {fr:"Bougie Coco",en:"Coconut candle"}}
    ],

    diffuseurs: [
        { img: "images/diffiuser.jpg",
            desc: { fr: "diffuseur", en: "diffuser" },
            prix: 10 ,
            nom: {fr:"diffuseur",en:"diffuser"} },

        { img: "images/diffuseur2.jpg",
            desc: { fr: "diffuseur", en: "diffuser" },
            prix: 10 ,
            nom: {fr:"diffuseur",en:"diffuser"}  }

    ],

    huile_essentiels: [
        { img: "images/essentialOil.jpg",
            desc: { fr: "huile essentiels parfumée", en: "scented essential oil" },
            prix: 10 ,
            nom: {fr:"huile esseniels",en:"essential oil"} }
    ],

    pots: [
        { img: "images/pot1.jpg",
            desc: { fr: "pots pourrit", en: "pots rot" },
            prix: 10 ,
            nom: {fr:"pots pourrit",en:"pots rot"}},

        { img: "images/pot2.jpg",
            desc: { fr: "Bougie parfumée coco sauvage", en: "Wild coconut scented candle" },
            prix: 10 ,
            nom: {fr:"Bougie Coco",en:"Coconut candle"}}
    ]
};

// Sélection des boutons et de la zone d'affichage
const Cbuttons = document.querySelectorAll(".Ccat-btn");
const Czone = document.getElementById("Cproduits-zone");

// Action lors du clic sur un bouton
Cbuttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Reset du bouton actif
        Cbuttons.forEach(b => b.classList.remove("Cactive"));
        btn.classList.add("Cactive");

        // Récupérer la catégorie
        const cat = btn.dataset.cat;
        const produits = CcatalogueProduits[cat];

        // Génération HTML
        let html = `<div class="Cproduits-grid">`;

        produits.forEach(p => {
            html += `
        <div class="Cproduit">
            <img class="Cprod-img"
                 src="${p.img}"
                 data-nom="${p.nom[lang]}"
                 data-desc="${p.desc[lang]}"
                 data-prix="${p.prix}">
            <p>${p.desc[lang]}</p>
        </div>
    `;
        });



        html += `</div>`;

        // Injection dans la zone
        Czone.innerHTML = html;
        document.addEventListener("click", e => {
            if (e.target.classList.contains("Cprod-img")) {
                const img = e.target;
                const produit = {
                    img: img.src,
                    nom: img.dataset.nom,
                    desc: img.dataset.desc,
                    prix: img.dataset.prix
                };
                openCpopup(produit);
            }
        });


    });
});
function activateCataloguePopups() {
    document.querySelectorAll(".Cprod-img").forEach(img => {
        img.addEventListener("click", () => {
            const produit = {
                img: img.src,
                nom: img.dataset.nom,
                desc: img.dataset.desc,
                prix: img.dataset.prix
            };
            openCpopup(produit);
        });
    });
}
activateCataloguePopups();

//
// document.addEventListener("click", (e) => {
//     if (e.target.classList.contains("Cprod-img")) {
//
//         const img = e.target;
//
//         const produit = {
//             img: img.src,
//             nom: img.dataset.nom,
//             desc: img.dataset.desc,
//             prix: img.dataset.prix
//         };
//
//         openCpopup(produit);
//     }
// });

// function CshowSlides(n) {
//     const slides = document.getElementsByClassName("CmySlides");
//     const dots = document.getElementsByClassName("Cdot");
//
//     if (slides.length === 0) return; //si ya pas de slide
// }
// LOTS D’IMAGES
/* LOTS D’IMAGES */

/* --- Définition des lots --- */
const lotA = [
    "images/diffiuser.jpg",
    "images/candlejar.png",
    "images/essentialOil.jpg"
];

const lotB = [
    "images/bougie1.jpg",
    "images/bougie2.jpg",
    "images/bougie3.jpg"
];

/* --- Injecter les images dans la bande défilante --- */
function loadImages(images) {
    const track = document.getElementById("CsliderTrack");
    track.innerHTML = ""; // Reset

    // Lot original
    images.forEach(src => createSlide(src, track));

    // Duplicata pour boucle infinie
    images.forEach(src => createSlide(src, track));

    // Reset animation pour re-lancer proprement
    track.style.animation = "none";
    void track.offsetWidth;
    track.style.animation = "";
}

/* --- Création d’un slide --- */
function createSlide(src, container) {
    const div = document.createElement("div");
    div.className = "CsliderA-slide";

    const img = document.createElement("img");
    img.src = src;

    div.appendChild(img);
    container.appendChild(div);
}

/* --- Boutons A & B --- */
document.getElementById("lotA").addEventListener("click", () => loadImages(lotA));
document.getElementById("lotB").addEventListener("click", () => loadImages(lotB));

// Charger Lot A par défaut
loadImages(lotA);

/* ---------------------------
        SECTION PAIEMENT
---------------------------- */

document.getElementById("btn-payer").addEventListener("click", () => {
    document.getElementById("formulaire-paiement").classList.remove("hidden");
});

/* ---------------------------
        POPUP + PANIER
---------------------------- */

// Variables popup
let panier = [];
let produitActuel = null;

// Sélecteurs popup
const Cpopup = document.getElementById("Cpopup");
const CpopupImg = document.getElementById("Cpopup-img");
const CpopupNom = document.getElementById("Cpopup-nom");
const CpopupDesc = document.getElementById("Cpopup-desc");
const CpopupPrix = document.getElementById("Cpopup-prix");
const CaddPanier = document.getElementById("Cadd-panier");
const Cclose = document.getElementById("Cclose");

// --- OUVERTURE POPUP ---
function openCpopup(produit) {
    produitActuel = produit;

    CpopupImg.src = produit.img;
    CpopupNom.textContent = produit.nom[lang];
    CpopupDesc.textContent = produit.desc[lang];
    CpopupPrix.textContent = produit.prix + " €";

    Cpopup.classList.remove("hidden");


}

// --- FERMETURE POPUP ---
Cclose.addEventListener("click", () => {
    Cpopup.classList.add("hidden");
});
Cpopup.addEventListener("click", (e) => {
    if (e.target === Cpopup) Cpopup.classList.add("hidden");
});

// --- AJOUT AU PANIER ---
CaddPanier.onclick = () => {
    panier.push(produitActuel);
    updatePanier();
    Cpopup.classList.add("hidden");
};

// --- Mise à jour du panier ---
function updatePanier() {
    const info = document.getElementById("panier-info");

    info.innerHTML = `<strong>${panier.length} article(s) :</strong><br><br>`;

    panier.forEach((p, index) => {
        info.innerHTML += `
            <div style="margin-bottom:10px; display:flex; align-items:center; gap:10px;">
                <img src="${p.img}" style="width:50px; height:50px; object-fit:cover; border-radius:8px;">
                <span>${p.nom} - ${p.prix} €</span>
                <button class="Cremove-btn" data-index="${index}"
                    style="margin-left:auto; background:red; border:none; color:white; border-radius:6px; padding:4px 8px; cursor:pointer;">
                    ❌
                </button>
            </div>
        `;
    });

    document.querySelectorAll(".Cremove-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            panier.splice(btn.dataset.index, 1);
            updatePanier();
        });
    });
}

