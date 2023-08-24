// A l'aide de la fonction prompt(), demander un prix HT puis
// un taux de la TVA à l'utilisateur puis insérer le prix TTC
// dans la page HTML à l'aide de document.body.innerHTML.
//  Si le prix TTC est strictement supérieur à 100 
// on affichera le prix en rouge sinon en vert.
let prixHt = prompt("Veuillez saisir un prix ht")
let taux = prompt("veuillez saisir un taux ")
let tauxValue = (taux/100)+1
while(isNaN(prixHt) || isNaN(taux)){
    alert('Les valeurs entrées ne sont pas valides')
    //redemander a l'utilisateur de saisir des valeurs
    prixHt = prompt("entrez un prixht")
    taux=prompt("entrez un taux")
}
let prixTtc = prixHt*tauxValue
if (prixTtc>100) {
    let resultVert = `le prix TTC est de ${prixTtc}FCFA`
    document.write(`<h2 style="color:red">${resultVert}</h2>`);
    
}else{
    let resultRouge = `le prix TTC est de ${prixTtc}FCFA`;
    document.write(`<h2 style="color:green">${resultRouge}</h2>`);
}