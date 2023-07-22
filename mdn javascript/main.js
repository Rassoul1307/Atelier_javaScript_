// Créer un tableau
let fruits = ['Apple', 'Banana'];

console.log(fruits.length);

// Accéder (via son index) à un élément du tableau
let first = fruits[0];
// Apple

let last = fruits[fruits.length - 1];
// Banana

// Boucler sur un tableau
fruits.forEach(function(item, index, array) {
    console.log(item, index);
  });
  // Apple 0
  // Banana 1

// Ajouter à la fin du tableau
let newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]


// Supprimer le dernier élément du tableau
last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];

// Supprimer le premier élément du tableau
first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];

// Ajouter au début du tableau
newLength = fruits.unshift('Strawberry') // ajoute au début
// ["Strawberry", "Banana"];


// Trouver l'index d'un élément dans le tableau
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana');
// 1


// Supprimer un élément par son index
let removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos

// ["Strawberry", "Mango"]


// Supprimer des éléments à partir d'un index
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

pos = 1, n = 2;

let removedItems = vegetables.splice(pos, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos

console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);
// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)


// Copier un tableau
let shallowCopy = fruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits
// ["Strawberry", "Mango"]


// Matche un "d" suivit par un ou plusieurs "b" et suivit d'un "d"
// Capture les "b" et le "d" qui suit
// Ignore la casse

let maRegexp = /d(b+)(d)/i;
let monTableau = maRegexp.exec("cdbBdbsbz");

console.log(monTableau);
// [ 0:"dbBd", 1:"bB", 2:"d", index:1, input:"cdbBdbsbz", length:3 ]




// Dans l'exemple suivant, on crée un tableau tableauMsg, d'une longueur nulle. Ensuite,
//  on lui affecte des valeurs pour tableauMsg[0] et tableauMsg[99], ce qui aura pour effet de
//   modifier la propriété length (qui vaudra alors 100).

let tableauMsg = [];
tableauMsg[0] = 'Coucou';
tableauMsg[99] = 'monde';

if (tableauMsg.length === 100) {
  console.log('La longueur du tableau vaut 100.');
}


// Dans l'exemple qui suit, on crée un plateau
// d'échec grâce à un tableau en deux dimensions
// qui contient des caractères. Le premier mouvement
// est effectué en copiant 'p' de (6,4) vers (4,4).
// La position anciennement occupée par le pion (6,4)
// devient vide.

let plateau = [
    ['T','C','F','R','K','F','C','T'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['t','c','f','k','r','f','c','t'] ];
  
  console.log(plateau.join('\n') + '\n\n');
  
  // On déplace le pion de deux cases en avant 2
  plateau[4][4] = plateau[6][4];
  plateau[6][4] = ' ';
  console.log(plateau.join('\n'));

  


//   Utiliser un tableau pour tabuler un ensemble de valeurs
values = [];
for (let x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
};
console.table(values)

