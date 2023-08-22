let currentInput = '';
let currentOperator = 0;
let currentTotal = 0;
let secondecran = document.querySelector(".secondecran")

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
    let displayElement = document.getElementById("display").textContent
    secondecran.textContent = displayElement
    if (currentTotal === 0) {
        currentTotal = parseFloat(currentInput);
    } else {
        calculate();
    }
    currentOperator = operator;
    currentInput = '';
    document.getElementById("display").textContent = currentOperator

}
// function clearAll() {
//     currentInput = "";
//     currentTotal= " ";
//     currentOperator ="";
//     updateDisplay();
// }


function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  currentOperator = 0;
  currentTotal = 0;
  secondecran.textContent = 0
  updateDisplay();
}
function clearInput() {
    updateDisplay()
    document.getElementById("display").textContent = 0
    
    

}
function calculate() {
    // 
    // console.log(currentInput);
  if (currentInput !== 0) {
      const inputNumber = parseFloat(currentInput);
      switch (currentOperator) {
            case '+':
                currentTotal += inputNumber;
                break;
            case '-':
                currentTotal -= inputNumber;
                break;
            case '*':
                currentTotal *= inputNumber;
                break;
            case '/':
                currentTotal /= inputNumber;
                break;
        }
        secondecran == currentTotal
        currentInput = '';
        currentOperator = '';
        updateDisplay();
    }
}

function updateDisplay() {
    if (isNaN(currentTotal)) {
        currentTotal = 0
    }
    document.getElementById('display').textContent = currentInput !== '' ? currentInput : currentTotal !== null ? currentTotal : '';

}




// Ajoute un gestionnaire d'événement keypress au document
document.addEventListener('keypress', handleKeyPress);

// Fonction pour gérer les événements de touche
function handleKeyPress(event) {
  const key = event.key;

  // Si la touche est un chiffre, un opérateur ou une touche de calcul, traite l'entrée
  if (/[0-9+\-*/.=]/.test(key)) {
    event.preventDefault(); // Empêche le comportement par défaut des touches (comme l'entrée d'un caractère dans un champ de texte)
    if (/[0-9]/.test(key)) {
      appendNumber(key);
    } else if (/[\-*/+]/.test(key)) {
      appendOperator(key);
    } else if (key === '.') {
      appendDecimal();
    } else if (key === '=' || key === 'Enter') {
      calculate();
    }
  }
}






updateDisplay();
