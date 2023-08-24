// https://picsum.photos/id/42/350/350
const url = "https://picsum.photos/id/"
let source = ""
let all = ""
let images = document.createElement('img')
const resolution = "/350/350"
for (let i = 0; i < 12; i++) {
    let id = Math.floor(Math.random() * 100);
    let source = "https://picsum.photos/id/" + id + resolution
    all = all +  `<img src="${source}">`
}
document.body.innerHTML = all