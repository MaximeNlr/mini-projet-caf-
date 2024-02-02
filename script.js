let nom = document.querySelector(".nom");
let prixVente = document.querySelector(".prixVente");
let prixAchat = document.querySelector(".prixAchat");
let type = document.querySelector(".type");
let recherche = document.querySelector(".recherche");
let ajouter = document.querySelector(".ajouter");
let gestionArticle = document.querySelector(".gestionArticle");

let produits = [];


function fiche(ficheArticle) {
    let quantite = document.createElement("input");
    ficheArticle.appendChild(quantite);   
}

ajouter.addEventListener("click", function (event) {
    event.preventDefault();
     
    const ficheArticle = document.createElement("li");
    gestionArticle.appendChild(ficheArticle);
    fiche(ficheArticle);

})




