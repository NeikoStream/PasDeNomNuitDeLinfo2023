var valeursInitiales = {
  co2: 400,
  temperature: 20,
  population: 500,
  budget: 200
};

var valeursActuelles = { ...valeursInitiales }; // Copie des valeurs initiales
var incrementation = 5; // Valeur d'incrémentation initiale

function mettreAJourIndicateursEtBarres() {
  document.getElementById("valeurCO2").textContent = valeursActuelles.co2;
  document.getElementById("valeurTemperature").textContent = valeursActuelles.temperature.toFixed(2);
  document.getElementById("valeurPopulation").textContent = valeursActuelles.population;
  document.getElementById("valeurBudget").textContent = valeursActuelles.budget;

  document.getElementById("barreCO2").value = valeursActuelles.co2;
  document.getElementById("barreTemperature").value = valeursActuelles.temperature;
  document.getElementById("barrePopulation").value = valeursActuelles.population;
  document.getElementById("barreBudget").value = valeursActuelles.budget;
}

function evoluerDansLeTemps() {
  valeursActuelles.co2 += incrementation;
  valeursActuelles.temperature += incrementation;
  valeursActuelles.population += incrementation;
  valeursActuelles.budget += incrementation;

  mettreAJourIndicateursEtBarres();
}

function modifierValeursActuelles(cartes) {
  valeursActuelles.co2 += cartes.co2;
  valeursActuelles.temperature += cartes.temperature;
  valeursActuelles.population += cartes.population;
  valeursActuelles.budget += cartes.budget;

  mettreAJourIndicateursEtBarres();
}

function ajouterUn() {
  incrementation += 1;
  evoluerDansLeTemps();
}

function ajouterTrois() {
  incrementation += 3;
  evoluerDansLeTemps();
}

function enleverCinq() {
  incrementation -= 5;
  evoluerDansLeTemps();
}

setInterval(evoluerDansLeTemps, 2000);