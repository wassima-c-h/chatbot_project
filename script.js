// =================================
// MENU DE NAVIGATION
// =================================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("open");

});

// Fermer le menu après avoir cliqué sur un lien

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("open");

    });

});


// =================================
// CHATBOT DE DEMONSTRATION
// =================================

const sendButton = document.getElementById("sendButton");

const userInput = document.getElementById("userInput");

const chatMessages = document.getElementById("chatMessages");


// Ajouter un message dans la discussion

function addMessage(message, className) {

    const messageElement = document.createElement("div");

    messageElement.classList.add(className);

    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;

}


// Générer une réponse automatique

function getBotResponse(question) {

    const text = question.toLowerCase();


    if (
        text.includes("bonjour") ||
        text.includes("salut") ||
        text.includes("hello")
    ) {

        return "Bonjour ! Bienvenue sur EST Student Space. Comment puis-je vous aider ?";

    }


    if (
        text.includes("formation") ||
        text.includes("filière") ||
        text.includes("genie") ||
        text.includes("génie")
    ) {

        return "Notre site présente une rubrique consacrée aux formations, notamment le Génie Logiciel. Pour les informations officielles sur les filières, consultez les annonces de l'établissement.";

    }


    if (
        text.includes("examen") ||
        text.includes("examens")
    ) {

        return "Pour les examens, consultez les annonces officielles de l'EST Kénitra et les informations communiquées par vos enseignants.";

    }


    if (
        text.includes("emploi") ||
        text.includes("horaire") ||
        text.includes("temps")
    ) {

        return "Les informations concernant l'emploi du temps doivent être vérifiées auprès de votre département ou sur les canaux officiels de l'établissement.";

    }


    if (
        text.includes("inscription") ||
        text.includes("document") ||
        text.includes("attestation")
    ) {

        return "Pour les inscriptions et les documents administratifs, veuillez contacter l'administration de l'établissement.";

    }


    if (
        text.includes("service") ||
        text.includes("site")
    ) {

        return "Notre site propose des informations sur les formations, les services étudiants et la vie universitaire.";

    }


    if (
        text.includes("merci")
    ) {

        return "Avec plaisir ! 😊 Je reste à votre disposition.";

    }


    return "Merci pour votre question ! Je suis actuellement un chatbot de démonstration. Je ne possède pas encore toutes les informations. Une connexion à une intelligence artificielle sera ajoutée prochainement.";

}


// Envoyer une question

function sendMessage() {

    const question = userInput.value.trim();


    // Vérifier si le champ est vide

    if (question === "") {

        return;

    }


    // Afficher la question de l'utilisateur

    addMessage(question, "user-message");


    // Vider le champ de saisie

    userInput.value = "";


    // Générer la réponse du chatbot

    setTimeout(function () {

        const response = getBotResponse(question);

        addMessage(response, "bot-message");

    }, 500);

}


// =================================
// EVENEMENTS
// =================================


// Cliquer sur le bouton envoyer

sendButton.addEventListener("click", sendMessage);


// Envoyer avec la touche Entrée

userInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});