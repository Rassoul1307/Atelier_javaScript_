let tableau = '<table>';
let table = document.querySelector('.table')
let lignes = prompt("veuillez saisir le nombre de lignes");
let colonnes = prompt("veuillez saisir le nombre de colonnes");

for(let i = 1;i <= lignes;i++) {
   tableau = tableau + '<tr>';
   for(let k = 1;k <= colonnes;k++) {
      tableau = tableau + `<td>cellule</td>`;
   }
   tableau = tableau + '</tr>';
}
tableau = tableau + '</table>';
table.innerHTML = tableau;