// Construire un tableau HTML, sans en-tête, avec X lignes
// et avec Y colonnes dans un élément <table>. Ajouter dans
// les celulles un contenu aléatoire de votre choix. Enfin,
// placer ce tableau dans la page HTML.

let tableau = '<table>';
let table = document.querySelector('.table')
let lignes = 5;
let colonnes = 3;

for(let i = 1;i <= lignes;i++) {
   tableau = tableau + '<tr>';
   for(let k = 1;k <= colonnes;k++) {
      tableau = tableau + `<td>cellule</td>`;
   }
   tableau = tableau + '</tr>';
}
tableau = tableau + '</table>';
table.innerHTML = tableau;