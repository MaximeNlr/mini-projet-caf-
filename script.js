let nom = document.querySelector(".nom");
let quantite = document.querySelector(".quantite");
let prixVente = document.querySelector(".prixVente");
let prixAchat = document.querySelector(".prixAchat");
let type = document.querySelector(".type");
let recherche = document.querySelector(".recherche");
let ajouter = document.querySelector(".ajouter");
let stockContainer = document.querySelector(".stockContainer");

let produits = [];


function fiche(ficheArticle) {
    ficheArticle.style.height = ("100px")
    ficheArticle.style.background = ("black");
    
}

ajouter.addEventListener("click", function (event) {
    event.preventDefault();
    const nomValue = nom.Value;
    const prixVenteValue = prixVente.value;
    const prixAchatValue = prixAchat.value;
    const typeValue = type.value;
    const stockContainerValue = stockContainer.value; 
    const ficheArticle = document.createElement("section");
    stockContainer.appendChild(ficheArticle);

   
    
})




