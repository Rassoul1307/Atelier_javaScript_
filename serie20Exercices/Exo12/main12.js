let chaine = ""
for (let i = 1; i < 6; i++) {
    for (let k = 1; k <=i ; k++) {
        chaine = chaine + i
        
    }
    chaine = chaine + '</br>'
    
}
document.body.innerHTML = chaine