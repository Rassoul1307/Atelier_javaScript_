const btn5 = document.querySelector('.btn5')
const btn10 = document.querySelector('.btn10')
const btn15 = document.querySelector('.btn15')
const btn20 = document.querySelector('.btn20')
const btn25 = document.querySelector('.btn25')
const box = document.querySelector('.box')
btn5.addEventListener("click", ()=>{
    box.style.borderRadius = "5px"
})
btn10.addEventListener("click", ()=>{
    box.style.borderRadius = "10px"
})
btn15.addEventListener("click", ()=>{
    box.style.borderRadius = "15px"
})
btn20.addEventListener("click", ()=>{
    box.style.borderRadius = "20px"
})
btn25.addEventListener("click", ()=>{
    box.style.borderRadius = "25px"
})