let searchBarre = document.querySelector(".searchBarre");
let creationProduit = document.querySelector(".creationProduit");
let ajouter = document.querySelector(".ajouter");
let bodyTable = document.querySelector(".bodyTable");
let inputPrixAchat = document.querySelector("#inputPrixAchat");
let inputPrixVente = document.querySelector("#inputPrixVente");
let inputMarge = document.querySelector("#inputMarge");
let inputVenteTTC = document.querySelector("#inputVenteTTC");
let inputQuantite = document.querySelector("#inputQuantite");
let selectType = document.querySelector("#selectType");
let inputAlcool = document.querySelector("#inputAlcool");
let ficheProduit = document.querySelector(".ficheProduit");

let caracteristiques =[];


function imageFiche(creaProduitValue) {
    if (creaProduitValue === "soda" || "coca" || "fanta") {
        const imageSoda = document.createElement("img");
        imageSoda.src ="images/soda.png"
        ficheProduit.appendChild(imageSoda);
    }   
    
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

    const prixAchatValue = inputPrixAchat.value;
    const prixVenteValue = inputPrixVente.value;
    const margeValue = inputPrixVente.value - inputPrixAchat.value / 100;
    const prixVenteTTCValue = inputPrixVente.value * 1 + 20 / 100;
    const typeProduitValue = selectType.value;
    const quantiteValue = inputQuantite.value;
    const alcoolValue = inputAlcool.value;


    ficheArticle.innerHTML = (creaProduitValue);
    prixAchat.innerHTML =(prixAchatValue);
    prixVente.innerHTML =(prixVenteValue);
    marge.innerHTML =(margeValue + "%")
    prixVenteTTC.innerHTML =(prixVenteTTCValue);
    typeProduit.innerHTML =(typeProduitValue);
    degAlcool.innerHTML =(alcoolValue); 
    quantite.innerHTML =(quantiteValue);
    
    bodyTable.appendChild(ficheArticleContainer);
    ficheArticleContainer.appendChild(ficheArticle);
    ficheArticleContainer.appendChild(prixAchat);
    ficheArticleContainer.appendChild(prixVente);
    ficheArticleContainer.appendChild(marge);
    ficheArticleContainer.appendChild(prixVenteTTC);
    ficheArticleContainer.appendChild(typeProduit);
    ficheArticleContainer.appendChild(degAlcool);
    ficheArticleContainer.appendChild(quantite);

    const modifyButton = document.createElement("td");
    modifyButton.innerHTML =("<button>modifier</button>");
    ficheArticleContainer.appendChild(modifyButton);

    const validateButton= document.createElement("td");
    validateButton.innerText =("Save");
    ficheArticleContainer.appendChild(validateButton);

    imageFiche(creaProduitValue)

    let ficheStock = {
        achatHT: prixAchatValue,
        venteHT: prixVenteValue,
        marge
    }
 

    modifyButton.addEventListener("clicl", function (ficheArticleContainer) {
        
    })
})


        // let fiche = {
        //     prixAchatValue,
        //     prixAchatValue,
        //     margeValue,
        //     prixVenteTTCValue,
        //     quantiteValue
        // }

        // fiche.push(caracteristiques);

        // localStorage.setItem("caracteristiques", JSON.stringify(caracteristiques));