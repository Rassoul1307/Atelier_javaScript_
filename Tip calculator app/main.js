const tips = document.querySelectorAll('.Tip');
const tipAmountResult = document.getElementById('tipAmountPerson')
const totalParPerson = document.getElementById('totalParPerson')



        // Fonction pour gérer le clic
        function tipSelectionner(element) {
            tips.forEach(function(tip) {
                tip.classList.remove('selected');
            });

            // Ajoute de la classe "selected" à la div cliquée
            element.classList.add('selected');
        }

        // Ajouter un gestionnaire de clic à chaque div
        tips.forEach(function(tip) {
            tip.addEventListener('click', function() {
                const person = document.getElementById('person').value
                let nbrPerson = parseFloat(person)
                const inputMontant = document.getElementById('montant').value;
                const montant = parseInt(inputMontant)
                tipSelectionner(this);
                const tipValue = (parseFloat(tip.textContent));
                let tipAmount = (montant*tipValue)/100
                // console.log(typeof tipAmount);
                // console.log(typeof nbrPerson);
                let tipAmountPers = tipAmount/nbrPerson

                // console.log(tipAmountPers);

                //affichage du resultat

                tipAmountResult.textContent = `$${tipAmountPers}`;
                totalParPerson.textContent = `$${tipAmountPers + montant}`
            });
        });