document.addEventListener("DOMContentLoaded", function() {
    var valeursInitiales = {
      co2: 400,
      temperature: 20,
      population: 500,
      budget: 200
    };
  
    var valeursActuelles = { ...valeursInitiales }; // Copie des valeurs initiales
    var incrementation = 5; // Valeur d'incrémentation initiale
  
    var valeurCO2 = document.getElementById("valeurCO2");
    var barreCO2 = document.getElementById("barreCO2");
  
    var valeurTemperature = document.getElementById("valeurTemperature")
    var barreTemperature = document.getElementById("barreTemperature");
  
    var valeurPopulation = document.getElementById("valeurPopulation");
    var barrePopulation = document.getElementById("barrePopulation");
  
    var valeurBudget = document.getElementById("valeurBudget");
    var barreBudget = document.getElementById("barreBudget");
  
    // Fonction pour mettre à jour les indicateurs et les barres de chargement
    function mettreAJourIndicateursEtBarres() {
      // Mettre à jour les indicateurs
      valeurCO2.textContent = valeursActuelles.co2;
      valeurTemperature.textContent = valeursActuelles.temperature.toFixed(2);
      valeurPopulation.textContent = valeursActuelles.population;
      valeurBudget.textContent = valeursActuelles.budget;
  
      // Mettre à jour les barres de chargement
      barreCO2.value = valeursActuelles.co2;
      barreTemperature.value = valeursActuelles.temperature;
      barrePopulation.value = valeursActuelles.population;
      barreBudget.value = valeursActuelles.budget;
    }
  
    // Fonction pour l'évolution des indicateurs dans le temps
    function evoluerDansLeTemps() {
      // Mettre à jour les valeurs actuelles avec l'incrémentation
      valeursActuelles.co2 += incrementation;
      valeursActuelles.temperature += incrementation / 10; // Exemple : 10 fois moins d'impact sur la température
      valeursActuelles.population += incrementation * 10; // Exemple : 10 fois plus d'impact sur la population
      valeursActuelles.budget += incrementation / 2; // Exemple : 2 fois moins d'impact sur le budget
  
      mettreAJourIndicateursEtBarres();
    }
  
    // Écouteurs d'événements pour les boutons de cartes
    var usineCharbonBouton = document.getElementById("usineCharbon");
    usineCharbonBouton.addEventListener("click", function() {
      var cartes = { co2: 50, temperature: 2, population: -20, budget: -30 };
      modifierValeursActuelles(cartes);
    });
  
    var veloBouton = document.getElementById("velo");
    veloBouton.addEventListener("click", function() {
      var cartes = { co2: -10, temperature: -1, population: 5, budget: -10 };
      modifierValeursActuelles(cartes);
    });
  
    var petroleBouton = document.getElementById("petrole");
    petroleBouton.addEventListener("click", function() {
      var cartes = { co2: 100, temperature: 5, population: -50, budget: 50 };
      modifierValeursActuelles(cartes);
    });
  
    // Écouteurs d'événements pour les boutons d'actions
    var ajouterUnBouton = document.getElementById("ajouterUn");
    ajouterUnBouton.addEventListener("click", function() {
      incrementation += 1;
      evoluerDansLeTemps();
    });
  
    var ajouterTroisBouton = document.getElementById("ajouterTrois");
    ajouterTroisBouton.addEventListener("click", function() {
      incrementation += 3;
      evoluerDansLeTemps();
    });
  
    var enleverCinqBouton = document.getElementById("enleverCinq");
    enleverCinqBouton.addEventListener("click", function() {
      incrementation -= 5;
      evoluerDansLeTemps();
    });
  
    // Fonction pour modifier les valeurs actuelles en fonction des cartes
    function modifierValeursActuelles(cartes) {
      valeursActuelles.co2 += cartes.co2;
      valeursActuelles.temperature += cartes.temperature;
      valeursActuelles.population += cartes.population;
      valeursActuelles.budget += cartes.budget;
  
      mettreAJourIndicateursEtBarres();
    }
  
    // Évolution des indicateurs toutes les 2 secondes (à ajuster selon vos besoins)
    setInterval(evoluerDansLeTemps, 2000);
});