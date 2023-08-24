let nbr = ''
const body = document.querySelector('body')
for (let i = 0; i < 10; i++) {
    nbr = Math.floor(Math.random() * 100); 
    const ul = document.createElement('ul')
    ul.innerHTML = `<li>${nbr}</li>`
    body.append(ul)
}