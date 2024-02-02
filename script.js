let searchBarre = document.querySelector(".searchBarre");
let creationProduit = document.querySelector(".creationProduit");
let typeProduit = document.querySelector(".typeProduit");
let ajouter = document.querySelector(".ajouter");
let listeArticle = document.querySelector(".listeArticle");
let bodyTable = document.querySelector(".bodyTable");




ajouter.addEventListener("click", function (event) {
    event.preventDefault();
    const creaProduitValue = creationProduit.value;
    const ficheArticleContainer = document.createElement("tr");
    const ficheArticle = document.createElement("td");
    const prixAchat = document.createElement("td");
    const prixVente = document.createElement("td");
    const marge = document.createElement("td");
    const prixVenteTTC = document.createElement("td");
    const typeProduit = document.createElement("td");

    ficheArticle.innerHTML = (creaProduitValue);
    prixAchat.innerHTML =("<input type =number>");
    prixVente.innerHTML =("<input type =number>");
    marge.innerHTML =("<input type =number>");
    prixVenteTTC.innerHTML =("<input type =number>");
    typeProduit.innerHTML =("<select><option value =>Choisir type</option><option value =ba>Boisson alcoolisée</option><option value =bna>Boisson non alcoolisée</option></select>")
    
    bodyTable.appendChild(ficheArticleContainer);
    ficheArticleContainer.appendChild(ficheArticle);
    ficheArticleContainer.appendChild(prixAchat);
    ficheArticleContainer.appendChild(prixVente);
    ficheArticleContainer.appendChild(marge);
    ficheArticleContainer.appendChild(prixVenteTTC);
    ficheArticleContainer.appendChild(typeProduit);





    
})


