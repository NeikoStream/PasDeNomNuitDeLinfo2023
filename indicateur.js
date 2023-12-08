var valeursInitiales = {
  co2: 400,
  temperature: 20,
  population: 500,
  budget: 200,
  electricite: 0,
  radioactivite: 0,
  fossile: 10000
};

var valeursActuelles = { ...valeursInitiales }; // Copie des valeurs initiales
var incrementation_co2 = 5; // Valeur d'incrémentation_co2 initiale
var incrementation_pop_moins = 5;
var incrementation_pop_plus = 5;
var incrementation_budget = 5;
var incrementation_electricite = 5;
var incrementation_radioactivite = 5;
var incrementation_fossile = 5;

function mettreAJourIndicateursEtBarres() {
  document.getElementById("valeurCO2").textContent = valeursActuelles.co2;
  document.getElementById("valeurTemperature").textContent = valeursActuelles.temperature.toFixed(2);
  document.getElementById("valeurPopulation").textContent = valeursActuelles.population;
  document.getElementById("valeurBudget").textContent = valeursActuelles.budget;
  document.getElementById("valeurElectricité").textContent = valeursActuelles.electricite;
  document.getElementById("valeurRadioactivite").textContent = valeursActuelles.radioactivite;
  document.getElementById("valeurFossile").textContent = valeursActuelles.fossile;

  document.getElementById("barreCO2").value = valeursActuelles.co2;
  document.getElementById("barreTemperature").value = valeursActuelles.temperature;
  document.getElementById("barrePopulation").value = valeursActuelles.population;
  document.getElementById("barreBudget").value = valeursActuelles.budget;
  document.getElementById("barreElectricité").value = valeursActuelles.electricite;
  document.getElementById("barreRadioactivite").value = valeursActuelles.radioactivite;
  document.getElementById("barreFossile").value = valeursActuelles.fossile;
}

function evoluerDansLeTemps() {
  valeursActuelles.co2 += incrementation_co2+valeursActuelles.electricite*0.2;
  valeursActuelles.temperature += valeursActuelles.co2*0.0000001;
  if(valeursActuelles.co2 >= 30000){
    valeursActuelles.population -= incrementation_pop_moins;
  }
  valeursActuelles.population += incrementation_pop_plus;
  valeursActuelles.budget += incrementation_budget;
  valeursActuelles.electricite += incrementation_electricite;
  valeursActuelles.radioactivite += incrementation_radioactivite;
  valeursActuelles.fossile -= incrementation_fossile;

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

setInterval(evoluerDansLeTemps, 1000);