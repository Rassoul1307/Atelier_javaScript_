let numberOfSeasons = 6;
let numberOfEpisodes = 12;


// Calculate totalShowTime here
// =====================================
let episodeTime = 45 ;
let commercialTime = 5 ;
let totalShowTime = (episodeTime + commercialTime) * numberOfSeasons * numberOfEpisodes;



// =====================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season

Total viewing time: ${totalShowTime} minutes`








// Create constants here
// =====================================

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

// =====================================

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

calculateButton.addEventListener('click', () => {
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;
  
  hours.innerText = `${calcHours} hours`;
  minutes.innerText = `${calcMinutes} minutes`;
  seconds.innerText = `${calcSeconds} seconds`;
});




// Create Object here
// =========================================

let episode = {
    title: 'Dark Beginning',
    duration: 45,
    hasBeenWatched: false
  };
  
  
  // =========================================
  
  document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
  Duration: ${episode.duration} min
  ${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;




  
  // Create variables here
  // =====================================
  
  let episodeTitle = episode.title;
  let episodeDuration = episode.duration;
  let episodeHasBeenWatched = episode.hasBeenWatched;
  
  // =====================================
  
  document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
  Duration: ${episodeDuration} min
  ${episodeHasBeenWatched ? 'Already watched' : 'Not yet watched'}`














  class Episode {
    constructor(title, duration, hasBeenWatched) {
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }
  
  let firstEpisode = new Episode('Dark Beginnings', 45, true);
  let secondEpisode = new Episode('The Mystery Continues', 45, false);
  let thirdEpisode = new Episode('An Unexpected Climax', 60, false);
 



//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'age
const ageInput = document.getElementById("age");
//On pointe sur l'élément de la checkbox de contrôle parental
const parentalInput = document.getElementById("parental");
//On défini la variage age qu'on utilisera et un variable définissant l'age de la majorité
let age;
let isControlParentalActive;
let ageMajorite = 18;


//Cette fonction affichera le message de validation
function valider(){
  espaceMessage.innerHTML = "Vous êtes autorisé à entrer";
}

//Cette fonction affichera un message d'erreur
function refuser(){
  alert("Cette espace est interdit aux personnes mineurs");
}



function onConfirm(){
  
  //On récupère la saisie de l'age et on transforme le texte en nombre entier
  age = parseInt(ageInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if(isNaN(age)){
    alert("Ceci n'est pas un nombre");
    return;
  }
  //On récupère la valeur du checkbox de contrôle parentale. "true" si coché ou "false" si décoché
  isControlParentalActive = parentalInput.checked;

  //======Code à rediger ici =======
  if(age < ageMajorite && isControlParentalActive){
    refuser();
  }else{
    valider()
  }
  //======/Code à rediger ici=======
  
  
  //On vide le champ de saisie
  ageInput.value = "";
}



//On écoute l'action de click sur le bouton et on appelle la fonction onConfirm
bouton.addEventListener('click', onConfirm);


// Modify the code here
// ======================

const calculateAverageRating = (ratings) => {

    if(ratings.length === 0) {
      return 0;
    }
    
    let sum = 0;
    for (let rating of ratings) {
      sum += rating;
    }
    
    return sum / ratings.length;
  
  }
  
  // ======================
  
  const tauRatings = [5, 4, 5, 5, 1, 2];
  const colinRatings = [5, 5, 5, 4, 5];
  
  const tauAverage = calculateAverageRating(tauRatings);
  const colinAverage = calculateAverageRating(colinRatings);
  
  if (tauAverage && colinAverage) {
    document.querySelector('#tau-score').innerText = tauAverage.toFixed(1) + ' stars';
    document.querySelector('#colin-score').innerText = colinAverage.toFixed(1) + ' stars';
    document.querySelector('#clara-score').innerText = `${calculateAverageRating([]) === 0 ? 'No ratings' : calculateAverageRating([]) + ' stars'}`
  }




// Modify the code here
// ======================

class Show {
    constructor(title, numberOfSeasons) {
      this.title = title;
      this.numberOfSeasons = numberOfSeasons;
      this.ratings = [];
      this.averageRating = 0;
    }
    
    addRating(rating) {
      this.ratings.push(rating);
      let sum = 0;
      for (let rating of this.ratings) {
        sum += rating;
      }
      
      this.averageRating = sum / this.ratings.length;
    }
  }
  
  // ======================
  
  const tau = new Show('The Story of Tau', 5);
  const colin = new Show('The Hero of Old Meldrum', 3);
  const clara = new Show('The Bugs of Isla Clara', 6);
  
  const shows = [tau, colin, clara];
  
  const body = document.querySelector('body');
  const refresh = document.querySelector('#refresh');
  
  refresh.addEventListener('click', () => {
    removeShows();
    addRandomRatings();
    updateShows();
  })
  
  const updateShows = () => {
    for (let show of shows) {
      const showPane = document.createElement('div');
      showPane.classList.add('series-frame');
      const showHeading = document.createElement('h2');
      showHeading.innerText = show.title;
      const showDetails = document.createElement('p');
      const seasons = document.createElement('p');
      seasons.innerText = show.numberOfSeasons + ' seasons';
      const ratings = document.createElement('p');
      ratings.innerText = show.averageRating > 0 ? show.ratings.length + ' ratings\n' + show.averageRating.toFixed(1) + ' stars' : 'No ratings yet';
      showDetails.append(seasons);
      showDetails.append(ratings);
      showPane.append(showHeading);
      showPane.append(showDetails);
      body.append(showPane);
    }
  };
  
  const removeShows = () => {
    const children = [];
    for (let childNode of body.childNodes) {
      children.push(childNode);
    }
    for (let child of children) {
      if (child.tagName == 'DIV') {
        body.removeChild(child);
      }
    }
  }
  
  const addRandomRatings = () => {
    for (let show of shows) {
      if (Math.random() >= 0.2) {
        const numberOfRatings = Math.floor(Math.random() * 4 + 1);
        for (let i = 0; i < numberOfRatings; i++) {
          const rating = Math.floor(Math.random() * 5 + 1);
          show.addRating(rating);
        }
      }
    }
  }
  
  updateShows();








  
  

  class Show {
    constructor(title, numberOfSeasons, episodesPerSeason) {
      this.title = title;
      this.numberOfSeasons = numberOfSeasons;
      this.episodesPerSeason = episodesPerSeason;
  }
}

const tauu = new Show('The Story of Tau', 5, 12);
const meldrum = new Show('The Hero of Old Meldrum', 3, 6);
const claraa = new Show('The Bugs of Isla Clara', 6, 15);

const showss = [tau, meldrum, clara];

// Modify the following code
// ======================

const generateComponent = (shows) => {
  const titleText = shows.title;
  const seasonsText = shows.numberOfSeasons + ' seasons';
  const episodesText = shows.episodesPerSeason + ' episodes per season';
  return {
    titleText,
    seasonsText,
    episodesText
  };
}

const tauuComponent = generateComponent(tauu);
const meldrumComponent = generateComponent(meldrum);
const claraaComponent = generateComponent(claraa);


const showComponents = [tauuComponent, meldrumComponent, claraaComponent];

// ======================
// Modify the code above

const bodyy = document.querySelector('body');

const updateShowss = () => {
  for (let shows of showComponents) {
    const showPane = document.createElement('div');
    showPane.classList.add('series-frame');
    const showHeading = document.createElement('h2');
    showHeading.innerText = shows.titleText;
    const showDetails = document.createElement('p');
    const seasons = document.createElement('p');
    seasons.innerText = shows.seasonsText;
    const episodes = document.createElement('p');
    episodes.innerText = shows.episodesText;
    showDetails.append(seasons);
    showDetails.append(episodes);
    showPane.append(showHeading);
    showPane.append(showDetails);
    body.append(showPane);
  }
};

updateShows();



