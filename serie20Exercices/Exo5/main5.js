// A l'aide de la fonction prompt(), demander un prix HT
// puis un taux de la TVA à l'utilisateur puis insérer
// le prix TTC dans la page HTML à l'aide de document.body.innerText.
let prixHt = prompt("Veuillez saisir un prix ht")
let taux = prompt("veuillez saisir un taux ")
let tauxValue = (taux/100)+1
while(isNaN(prixHt) || isNaN(taux)){
    prixHt = prompt("le prixHt n'est pas un nombre, Réessaie")
    taux = prompt("veuillez saisir un taux ")
}
let prixTtc = prixHt*tauxValue
document.body.innerText = `le prix TTC est de ${prixTtc}FCFA`