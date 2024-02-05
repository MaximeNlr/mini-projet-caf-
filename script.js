let searchBarre = document.querySelector(".searchBarre");
let creationProduit = document.querySelector(".creationProduit");
let ajouter = document.querySelector(".ajouter");
let listeArticle = document.querySelector(".listeArticle");
let bodyTable = document.querySelector(".bodyTable");

let caracteristiques =[];


function carctFiche() {
    
}

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
    const degAlcool = document.createElement("td");
    const quantite = document.createElement("td");
    const validateButtonTable = document.createElement("td");

    ficheArticle.innerHTML = (creaProduitValue);
    prixAchat.innerHTML =("<input type =number step =0.1>");
    prixVente.innerHTML =("<input type =number step =0.1>");
    marge.innerHTML =("<input type =number step =0.1>");
    prixVenteTTC.innerHTML =("<input type =number step =0.1>");
    typeProduit.innerHTML =("<select id = valueProduit><option value =>Choisir type</option><option value =ba>Boisson alcoolisée</option><option value =bna>Boisson non alcoolisée</option></select>");
    degAlcool.innerHTML =("<input id = valueAlcool type =text value =>"); 
    quantite.innerHTML =("<input type =number>");
    validateButtonTable.innerHTML =("<input type =button value =ok class =validateButtonTable>");
    
    bodyTable.appendChild(ficheArticleContainer);
    ficheArticleContainer.appendChild(ficheArticle);
    ficheArticleContainer.appendChild(prixAchat);
    ficheArticleContainer.appendChild(prixVente);
    ficheArticleContainer.appendChild(marge);
    ficheArticleContainer.appendChild(prixVenteTTC);
    ficheArticleContainer.appendChild(typeProduit);
    ficheArticleContainer.appendChild(degAlcool);
    ficheArticleContainer.appendChild(quantite);
    ficheArticleContainer.appendChild(validateButtonTable)

    validateButtonTable.addEventListener("click", function (validateButtonTable) {
       const prixAchatValue = prixAchat.value;
       const prixVenteValue = prixVente.value;
       const margeValue = marge.value;
       const prixVenteTTCValue = prixVenteTTC.value;
        
       console.log(prixAchatValue, prixVenteValue, margeValue);
    })  
})


