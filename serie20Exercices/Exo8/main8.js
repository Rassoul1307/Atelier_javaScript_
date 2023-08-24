let nbr = parseInt(prompt('veuilez saisir un nombre'))
console.log(nbr);
for (let i = 0; i < 9; i++) {
    nbr+=10
    console.log(nbr);
    document.write(`${nbr} <br>`)   
}