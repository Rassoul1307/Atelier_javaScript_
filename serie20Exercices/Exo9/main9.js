// Grâce à la fonction prompt(), demander l'âge de l'utilisateur,
// puis à l'aide d'une condition, déterminer et afficher via une boite
// de dialogue si l'utilisateur est mineur ou majeur. Pour cet exercice
// on considère qu'un individu est majeur à partir de 18 ans.
let age = prompt("veuillez saisir votre age")
while (isNaN(age)) {
    age = prompt("veuillez saisir une age valide")
}
if (age>= 18) {
    alert("vous etes majeur")
}else{
    alert ("vous etes mineur")
}