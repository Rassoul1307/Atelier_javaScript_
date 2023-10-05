const btnAjouter = document.querySelector('.btnAjouter')
btnAjouter.addEventListener('click',ajouterUtilisateur)

let allUsers = []
function ajouterUtilisateur() {
    const prenom = document.getElementById('prenom').value
    const nom = document.getElementById('nom').value
    const email = document.getElementById('email').value
    const tel = document.getElementById('tel').value

    const user = {
        prenom : prenom,
        nom : nom,
        email : email ,
        tel : tel
    }


    const listeUtilisateurs = document.getElementById('listeUtilisateurs')
    let ligne = document.createElement('tr')
    let btnModifier = document.createElement('button')
    btnModifier.innerHTML = `<button type="button" class="btn btn-warning me-2 my-2" onclick="modifierUtilisateur()">Modifier</button>`
    ligne.innerHTML = `
                        <td>${user.prenom}</td>
                        <td>${user.nom}</td>
                        <td>${user.email}</td>
                        <td>${user.tel}</td>
                        <button type="button" class="btn btn-warning">Modifier</button>
                        <button type="button" class="btn btn-danger">Supprimer</button>
                    `

    listeUtilisateurs.append(ligne)



    // console.log(listeUtilisateurs);
    
    
    
    document.getElementById('prenom').value = "";
    document.getElementById('nom').value = "";
    document.getElementById('email').value = "";
    document.getElementById('tel').value = "";

    
    
    
    
    
}



