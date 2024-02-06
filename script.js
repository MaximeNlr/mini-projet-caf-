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

    if (JSON.parse(localStorage.getItem("caracteristiques"))) {
        caracteristiques = JSON.parse(localStorage.getItem("caracteristiques"));
        renderArray(caracteristiques);   
    } else {
        caracteristiques = [];
    }

function renderArray(array) {
    let tr = "";
    array.forEach(function (ficheStock, index) {
        tr = tr + `<tr>
        <td>${ficheStock.nomProduit}</td>
        <td>${ficheStock.achatHT}</td>
        <td>${ficheStock.venteHT}</td>
        <td>${ficheStock.margeHT}</td>
        <td>${ficheStock.venteTTC}</td>
        <td>${ficheStock.type}</td>
        <td>${ficheStock.alcool}</td>
        <td><input type =number id =quantiteTdInput value ="${ficheStock.quantiteStock}"></td>
        <td><button class ="deleteButton">delete</button></td>
        <td><button class ="modifyButton">modifier</button><td>
        </tr> ` 
    }) 
    bodyTable.innerHTML = tr;
    let deleteButtonArray = document.querySelectorAll(".deleteButton");
    deleteButtonArray.forEach(function (deleteButton, index) {
        deleteButton.addEventListener("click", function () {
            caracteristiques.splice(index,1);
            renderArray(caracteristiques);
        })
    })

    let modifyButtonArray = document.querySelectorAll(".modifyButton");
    modifyButtonArray.forEach(function (modifyButton, index) {
        modifyButton.addEventListener("click", function name(params) {
            
        })
    })
}


function FicheArticle (creationProduitValue, prixAchatValue, prixVenteValue, margeValue, prixVenteTTCValue, typeProduitValue, alcoolValue, quantiteValue) {
    this.nomProduit = creationProduitValue,
    this.achatHT = prixAchatValue,
    this.venteHT = prixVenteValue,
    this.margeHT = margeValue,
    this.venteTTC = prixVenteTTCValue,
    this.type = typeProduitValue,
    this.alcool = alcoolValue,
    this.quantiteStock = quantiteValue
}


ajouter.addEventListener("click", function (event) {
    event.preventDefault();
    const creaProduitValue = creationProduit.value;
    const prixAchatValue = inputPrixAchat.value;
    const prixVenteValue = inputPrixVente.value;
    const margeValue = inputPrixVente.value - inputPrixAchat.value;
    const prixVenteTTCValue = inputPrixVente.value * 1 + 20 / 100;
    const typeProduitValue = selectType.value;
    const quantiteValue = inputQuantite.value;
    const alcoolValue = inputAlcool.value;

    let ficheStock = new FicheArticle (
        creaProduitValue,
        prixAchatValue,
        prixVenteValue,
        margeValue,
        prixVenteTTCValue,
        typeProduitValue,
        alcoolValue,
        quantiteValue
    )
    caracteristiques.push(ficheStock);
    renderArray(caracteristiques)
 
        localStorage.setItem("caracteristiques", JSON.stringify(caracteristiques));
})

