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
        Connaissance: "•Une histoire de passion pour la beauté naturelle,née de l'amour des plantes et de l'engagement envers un monde plus durable et ecologique.♻️ ",

        TitreHistoire: "Notre Histoire", // Corrigé pour correspondre à <h2>Notre Histoire <span>❤︎</span></h2>

        ile: "🌺 îles aux parfums 🌺",
        iledescript: "•Les « îles aux parfums », traduites dans les îles du Pérou, c’est ce que j’ai appris plus tard que l’île de ma famille était connue sous le nom de celle-ci. Dès ma toute première visite, cette belle île des Comores a laissé une empreinte indélébile sur ma vie et constitue la base de mon entreprise aujourd'hui. ",

        passion: "✈️❤️️ Une Passion Née d’un Voyage ✈️❤️️",
        passiondescript: "•Fabriquée avec des ingrédients de qualité, notre bougie parfumée diffuse une fragrance délicate et chaleureuse. Parfaite pour créer une ambiance cosy, elle accompagne vos moments de détente et enveloppe votre intérieur d’un parfum harmonieux. ",

        bienvenue: "✨ Bienvenue dans le monde du parfum ✨",
        bienvenuedescript: " •Nous sommes une petite entreprise familiale qui fait de grands pas en proposant une gamme de produits utilisant de l'YLANG YLANG provenant des Comores, en commençant par nos huiles. «Nous vous apportons les îles des parfums» est notre mission et SEDANA ESSENTIAL est notre véhicule pour y parvenir. Ayant vu et vécu les avantages incroyables d'utiliser cette glorieuse huile essentielle sur les cheveux, la peau et l'état d'esprit, d'un enfant à la mère, SEDANA ESSENTIAL veut que vous, notre client, nous rejoigniez dans un voyage de bien-être à travers la nature. ",

        notremission: "🌸 Notre Mission et Objectif 🌸",
        notremissiondescript: "•Mon objectif est de créer des produits nouveaux et originaux, fabriqués artisanalement à partir d'ingredients frais et naturels.L'objectif est d'éliminer les conservateurs artificiels et inutiles afin de garantir la pureté et l'accessibilité de nos produits à tous.",

        principalebienfaits: "LES PRINCIPALES BIENFAITS DU YLANG YLANG",


        TitreValeurs: "Nos Valeurs",
        TitreBienEtre: "Bien-être emotionelle",

        // Bienfaits (Titres des cartes)
        BienfaitNerveux: "🧘 Système Nerveux",
        DescBienfaitNerveux:"Le Ylang Ylang contient des esters et des monoterpènes qui agissent sur le système nerveux central, favorisant la détente et réduisant l'anxiété.",

        BienfaitHormonal: "🧬 Equilibre Hormonal",
        DescBienfaitHormonal:"Influence positive sur la production de sérotonine et de dopamine,contribuant à l'équilibre émotionnel.",

        BienfaitAntiMicrobien: "🦠🛡️ Propriétés Antimicrobiennes",
        DescBienfaitAntiMicrobien:"Les composés phénoliques de l'ylang-ylang possèdent des propriétés antibactériennes et antifongiques naturelles.",

        BienfaitCirculation: "❤️🩸 Circulation Sanguine",
        DescBienfaitCirculation:"Ses propriétés vasodilatatrices aident à réguler la tension artérielle et améliorer la circulation périphérique.",

        // Valeurs (Titres des cartes)
        ValeurAuthentique: "❤️Bien-être Authentique",
        DescValeurAuthentique:"Nous croyons que la vraie beauté vient de l'harmonie entre le corps et l'esprit, nourrie par la nature.",

        ValeurNaturel: "💯 100% Naturel",
        DescValeurNaturel:"Nos produits sont formulés exclusivement avec des ingrédients d'origine naturelle, sans substances chimiques nocives.",

        ValeurCommunaute: "😇Une Communauté Bienveillante😇",
        DescValeurCommunaute:"Nous cultivons une communauté basée sur le partage, l'entraide et la passion commune pour la beauté naturelle.",

        ValeurEco: "♻️🌏Eco-responsable",
        DescValeurEco:"Notre engagement environnemental se reflète dans nos emballages recyclables et nos pratiques durables.",

        ValeurQualite: "🛡️ 💪Qualite Prenium",
        DescValeurQualite:"Chaque produit est rigoureusement testé et certifié pour garantir une efficacité et une sécurité optimales.",

        ValeurExcellence: "🏆 Excellence Artisanale",
        DescValeurExcellence:"Nos formules sont créées avec le savoir faire traditionnel et les innovations les plus récentes.",

        // Bien-être émotionnel (Titres des cartes)
        BEE_Relaxation: "🧘‍♀️🧘‍♂️Relaxation Profonde",
        DescBEE_Relaxation:"Réduit le stress et favorise un sommeil réparateur grâce à ses propriétés sédatives naturelles.",

        BEE_Confiance: "💪Confiance en Soi",
        DescBEE_Confiance:"Stimule l'estime de soi et aide à retrouver l'harmonie intérieur et la joie de vivre.",

        BEE_Energie: "⚡⚡Energie Positive",
        DescBEE_Energie:"Combat la fatigue mentale et apporte une sensation de vitalité de d'optimisme.",

        BEE_Equilibre: "⚖️Equilibre Emotionnel ⚖️",
        DescBEE_Equilibre:"Harmonise les émotions et ajde à gérer les changements d'humeur naturellement.",

        //David (Contact)
        FormulaireTitre:"Contactez-Nous !",
        LabelPrenom:"Votre Prénom",
        LabelPrenom2:"Votre Nom",
        LabelEmail:"Votre adresse e-mail",
        LabelTelephone:"Votre Numero de téléphone",
        LabelSujet:"Sujet de votre demande",
        OptionChoisir:">-- Choisissez un sujet --",
        OptionInfoProduit:"Information sur un produit",
        OptionCommande:"Question sur une commande",
        OptionLivraison:"Problème de livraison",
        OptionRetour:"Retour ou remboursement",
        OptionPartenariat:"Proposition de partenariat",
        OptionAutre:"Autre demande",
        LabelNewsletter:"Recevoir la newsletter",
        BoutonEnvoyer:"Envoyer",

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
        lienFormulaire: "<-- click here to be redirected to the workshop registration form",
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

        //David (Histoire)
        Connaissance: "•A story of passion for natural beauty, born from a love of plants and a commitment to a more sustainable and ecological world. ♻️",
        TitreHistoire: "Our History",

        ile: "🌺 Scented Islands 🌺",
        iledescript: "• 'The Scented Islands,' translated in the islands of Peru, is what I later learned my family's island was known as. From my very first visit, this beautiful Comorian island left an indelible mark on my life and forms the foundation of my business today.",

        passion: "✈️❤️️ A Passion Born from a Journey ✈️❤️️",
        passiondescript: "•Crafted with quality ingredients, our scented candle releases a delicate and warm fragrance. Perfect for creating a cozy atmosphere, it accompanies your moments of relaxation and envelops your interior in a harmonious scent.",
        bienvenue: "✨ Welcome to the World of Fragrance ✨",

        bienvenuedescript: "•We are a small family business taking big steps by offering a range of products using YLANG YLANG sourced from the Comoros, starting with our oils. 'We bring you the Islands of Perfumes' is our mission, and SEDANA ESSENTIAL is our vehicle to achieve it. Having seen and experienced the incredible benefits of using this glorious essential oil on hair, skin, and state of mind—from child to mother—SEDANA ESSENTIAL wants you, our customer, to join us on a journey of well-being through nature.",

        notremission: "🌸 Our Mission and Objective 🌸",
        notremissiondescript: "•My goal is to create new and original products, handcrafted using fresh and natural ingredients. The objective is to eliminate unnecessary and artificial preservatives in order to guarantee the purity and accessibility of our products to everyone.",

        principalebienfaits: "KEY BENEFITS OF YLANG YLANG",


        TitreValeurs: "Our Values",
        TitreBienEtre: "Emotional Well-being",

        // Bienfaits (Titres des cartes)
        BienfaitNerveux: "🧘 Nervous System",
        DescBienfaitNerveux:"Ylang Ylang contains esters and monoterpenes that act on the central nervous system, promoting relaxation and reducing anxiety.",

        BienfaitHormonal: "🧬 Hormonal Balance",
        DescBienfaitHormonal:"Positive influence on the production of serotonin and dopamine, contributing to emotional balance.",

        BienfaitAntiMicrobien: "🦠🛡️ Antimicrobial Properties",
        DescBienfaitAntiMicrobien:"The phenolic compounds in ylang-ylang possess natural antibacterial and antifungal properties.",

        BienfaitCirculation: "❤️🩸 Blood Circulation",
        DescBienfaitCirculation:"Its vasodilating properties help regulate blood pressure and improve peripheral circulation.",

        // Valeurs (Titres des cartes)
        ValeurAuthentique: "❤️ Authentic Well-being",
        DescValeurAuthentique:"We believe that true beauty comes from the harmony between body and mind, nourished by nature.",

        ValeurNaturel: "💯 100% Natural",
        DescValeurNaturel:"Our products are formulated exclusively with natural ingredients, free from harmful chemical substances.",
        ValeurCommunaute: "😇 A Caring Community 😇",
        DescValeurCommunaute:"We cultivate a community based on sharing, mutual support, and a common passion for natural beauty.",
        ValeurEco: "♻️🌏 Eco-friendly",
        DescValeurEco:"Our environmental commitment is reflected in our recyclable packaging and sustainable practices.",
        ValeurQualite: "🛡️ 💪 Premium Quality",
        DescValeurQualite:"Each product is rigorously tested and certified to guarantee optimal effectiveness and safety.",
        ValeurExcellence: "🏆 Artisanal Excellence",
        DescValeurExcellence:"Our formulas are created using traditional expertise and the latest innovations.",
        // Bien-être émotionnel (Titres des cartes)
        BEE_Relaxation: "🧘‍♀️🧘‍♂️ Deep Relaxation",
        DescBEE_Relaxation:"Reduces stress and promotes restorative sleep thanks to its natural sedative properties.",

        BEE_Confiance: "💪 Self-Confidence",
        DescBEE_Confiance:"Boosts self-esteem and helps regain inner harmony and a joy for life.",

        BEE_Energie: "⚡⚡ Positive Energy",
        DescBEE_Energie:"Fights mental fatigue and brings a feeling of vitality and optimism.",

        BEE_Equilibre: "⚖️ Emotional Balance ⚖️",
        DescBEE_Equilibre:"Harmonizes emotions and helps manage mood swings naturally.",

        //David (Accueil)
        FormulaireTitre: "Contact-Us !",
        LabelPrenom:"First Name",
        LabelPrenom2:"Last Name",
        LabelEmail:"Your Email",
        LabelTelephone:"Your Phone-Number",
        LabelSujet:"Subject of your request",
        OptionChoisir:">-- Choose a subject --",
        OptionInfoProduit:"Information about a product",
        OptionCommande:"Question about an order",
        OptionLivraison:"Delivery issue",
        OptionRetour:"Return or refund",
        OptionPartenariat:"Partnership proposal",
        OptionAutre:"Other request",
        LabelNewsletter:"Receive newsletter",
        BoutonEnvoyer:"Send",

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
