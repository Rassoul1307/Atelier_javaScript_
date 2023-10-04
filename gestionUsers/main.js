// Fonction pour ajouter un utilisateur au tableau et enregistrer dans localStorage
function ajouterUtilisateur() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("tel").value;

    // Créez un objet pour l'utilisateur
    var utilisateur = {
        nom: nom,
        prenom: prenom,
        email: email,
        telephone: telephone
    };

    // Récupérez les données existantes depuis localStorage
    var utilisateursExistants = JSON.parse(localStorage.getItem("utilisateurs")) || [];

    // Ajoutez le nouvel utilisateur aux données existantes
    utilisateursExistants.push(utilisateur);

    // Enregistrez les données mises à jour dans localStorage
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateursExistants));

    // Mettez à jour le tableau avec les données existantes
    afficherUtilisateurs();

    // Effacer les champs du formulaire après l'ajout
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tel").value = "";
}

// Fonction pour afficher les utilisateurs depuis localStorage
function afficherUtilisateurs() {
    var listeUtilisateurs = document.getElementById("listeUtilisateurs");

    // Effacer le contenu existant de la liste
    listeUtilisateurs.innerHTML = "";

    // Récupérez les données depuis localStorage
    var utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];

    // Affichez chaque utilisateur dans le tableau
    utilisateurs.forEach(function(utilisateur) {
        var newRow = listeUtilisateurs.insertRow(-1); // Insérer une nouvelle ligne à la fin du tableau

        // Insérer les cellules pour chaque champ
        var cellNom = newRow.insertCell(0);
        var cellPrenom = newRow.insertCell(1);
        var cellEmail = newRow.insertCell(2);
        var cellTelephone = newRow.insertCell(3);
        var cellActions = newRow.insertCell(4); // Cellule pour les boutons "Modifier" et "Supprimer"
        cellActions.classList.add('actions')

        // Remplir les cellules avec les valeurs de l'utilisateur
        cellNom.innerHTML = utilisateur.nom;
        cellPrenom.innerHTML = utilisateur.prenom;
        cellEmail.innerHTML = utilisateur.email;
        cellTelephone.innerHTML = utilisateur.telephone;

        // Créer les boutons "Modifier" et "Supprimer" pour chaque utilisateur
        var boutonModifier = document.createElement("button");
        boutonModifier.textContent = "Modifier";
        boutonModifier.setAttribute('class', 'btn btn-warning');
        boutonModifier.onclick = function() {
            // Ajoutez ici la logique de modification de l'utilisateur
            alert("Vous pouvez implémenter la logique de modification ici.");
        };

        var boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = "Supprimer";
        boutonSupprimer.setAttribute('class','btn btn-danger');
        boutonSupprimer.onclick = function() {
            // Ajoutez ici la logique de suppression de l'utilisateur
            supprimerUtilisateur(utilisateur); // Appel de la fonction pour supprimer l'utilisateur
        };

        // Ajouter les boutons "Modifier" et "Supprimer" à la cellule d'actions
        cellActions.appendChild(boutonModifier);
        cellActions.appendChild(boutonSupprimer);
    });
}

// Fonction pour supprimer un utilisateur et mettre à jour localStorage
function supprimerUtilisateur(utilisateur) {
    // Récupérez les utilisateurs existants depuis localStorage
    var utilisateursExistants = JSON.parse(localStorage.getItem("utilisateurs")) || [];

    // Filtrez les utilisateurs pour exclure celui que vous souhaitez supprimer
    utilisateursExistants = utilisateursExistants.filter(function(u) {
        return u.nom !== utilisateur.nom || u.prenom !== utilisateur.prenom;
    });

    // Enregistrez les données mises à jour dans localStorage
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateursExistants));

    // Mettez à jour le tableau avec les données existantes
    afficherUtilisateurs();
}

// Appel initial pour afficher les utilisateurs au chargement de la page
afficherUtilisateurs();
