let nbr = ''
let nbr10 = 0
const body = document.querySelector('body')
for (let i = 0; i < 10; i++) {
    nbr = Math.floor(Math.random() * 11); 
    if (nbr == 10) {
        nbr10++
    }
    const ul = document.createElement('ul')
    ul.innerHTML = `<li>${nbr}</li>`
    body.append(ul)
}

body.append(`Le tirage contient ${nbr10} fois le nombre 10`)