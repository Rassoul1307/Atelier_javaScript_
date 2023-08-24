let nbr = ''
const body = document.querySelector('body')
for (let i = 0; i < 10; i++) {
    nbr = Math.floor(Math.random() * 11); 
    if (nbr == 10) {
        console.log("le nombre 10 fait partie du tirage.");
    }
    const ul = document.createElement('ul')
    ul.innerHTML = `<li>${nbr}</li>`
    body.append(ul)
}