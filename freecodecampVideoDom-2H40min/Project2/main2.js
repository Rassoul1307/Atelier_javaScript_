let openBtn = document.getElementById('open-btn')
let modalContainer = document.getElementById('modal-container')
let closeBtn = document.getElementById('close-btn')

openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
    modalContainer.style.display='none';  //or you can use this line instead of the above one
})

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        modalContainer.style.display = 'none'
    }

})