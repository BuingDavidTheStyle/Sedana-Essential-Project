// ==========================
//  DICTIONNAIRE DES TEXTES
// ==========================
const translations = {
    fr: {
        //commun
        ContactNous: "Contactez-nous au + 44 73.42.36.85.84",
        Accueil: "Accueil",
        Histoire: "Histoire",
        Produits: "Produits",
        Contact: "Contact",
        Droit: "© 2025 Sedana Essential — Tous droits réservés",
        Partenaire: "Partenaire : Naraction",

        //Clément
        lienFormulaire: "<--  appuyer ici pour être dirigé vers le formulaire de participation aux ateliers",

        Panier: "Panier",
        PanierVide: "Panier vide ou X article(s) dans votre panier",
        BoutonCommander: "Commander et payer",
        SectionPaiement: "Section paiement en ligne",
        NumCarte: "Numéro de carte bancaire :",
        NumTel: "Numéro de téléphone :",
        BoutonPayer: "Payer maintenant",

        BoutonImageProduit: "Images produits",
        BoutonImageAtelier: "Images ateliers",

        BoutonBougies: "Bougies",
        BoutonFondants: "Fondants parfumés",
        BoutonDifuseur: "Diffuseurs",
        BoutonBrumes: "Brumes d'oreiller",
        BoutonPots: "Pots-pourris",

        SelectionBouton: "Sélectionnez une catégorie pour afficher les produits",

        btn_add_cart: "Ajouter au panier",

        //David

        //Mohammad
    },

    en: {
        ContactNous: "Contact us at + 44 73.42.36.85.84",
        Accueil: "Home",
        Histoire: "History",
        Produits: "Products",
        Contact: "Contact",
        Droit: "© 2025 Sedana Essential — All rights reserved",
        Partenaire: "Partner : Naraction",

        //Clément
        lienFormulaire: "<--  click here to be redirected to the workshop registration form",
        Panier: "Cart",
        PanierVide: "Empty cart or X item(s) in your cart",
        BoutonCommander: "Order and pay",
        SectionPaiement: "Online payment section",
        NumCarte: "Bank card number:",
        NumTel: "Phone number:",
        BoutonPayer: "Pay now",

        BoutonImageProduit: "Product images",
        BoutonImageAtelier: "Workshop images",

        BoutonBougies: "Candles",
        BoutonFondants: "Wax melts",
        BoutonDifuseur: "Diffusers",
        BoutonBrumes: "Pillow mists",
        BoutonPots: "Potpourris",

        SelectionBouton: "Select a category to display the products",
        btn_add_cart: "Add to cart",

        //David

        //Mohammad
    }
};


// =============================
//   FONCTION DE TRADUCTION
// =============================
function applyTranslation(lang) {

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");

        if (!translations[lang][key]) return;

        // Si la traduction contient du HTML → innerHTML
        if (translations[lang][key].includes("<")) {
            el.innerHTML = translations[lang][key];
        }
        // Sinon → textContent
        else {
            el.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("lang", lang);
}


// =============================
//  BOUTON BASCULE FR / EN
// =============================
let lang = localStorage.getItem("lang") || "fr";

function toggleLangC() {
    lang = lang === "fr" ? "en" : "fr";
    applyTranslation(lang);
}


// =============================
//   APPLIQUER AU CHARGEMENT
// =============================
document.addEventListener("DOMContentLoaded", () => {
    applyTranslation(lang);
});
