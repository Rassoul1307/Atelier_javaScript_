// A l'aide de la fonction prompt(),
// demander un prix HT à l'utilisateur puis insérer le prix TTC (TVA 20 %)
// dans la page HTML à l'aide de document.body.innerText.
let prixHt = prompt("Veuillez saisir un prix ht")
while(isNaN(prixHt)){
    prixHt = prompt("la valeur n'est pas un nombre, Réessaie")
}
let prixTtc = prixHt*1.2
document.body.innerText = `le prix TTC est de ${prixTtc}FCFA`

