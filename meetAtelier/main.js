

// console.log({ somme });

/**
 * ! UNE FONCTION PERMET LA REUTILISATION DU CODE
 * 
 * ! UNE FONCTION PEUT PRENDRE DES INPUTS(PARAMETRES) 
 * 
 * ! PUIS RETOURNE UNE VALEUR
 */

function calculSomme(num1, num2, num3 = 0) {
    let somme = 0;

    somme = num1 + num2 + num3

    return somme
}

function afficheSomme(total) {
    return "La somme est : " + total
}

let totalCalcul = calculSomme(5, 7)

let message = afficheSomme(totalCalcul)

// console.log(message);
