var valeursInitiales = {
  co2: 400,
  temperature: 20,
  population: 500,
  budget: 200,
  electricite: 0,
  radioactivite: 0,
  fossile: 10000,
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
  document.getElementById("valeurTemperature").textContent =
    valeursActuelles.temperature.toFixed(2);
  document.getElementById("valeurPopulation").textContent =
    valeursActuelles.population;
  document.getElementById("valeurBudget").textContent = valeursActuelles.budget;
  document.getElementById("valeurElectricité").textContent =
    valeursActuelles.electricite;
  document.getElementById("valeurRadioactivite").textContent =
    valeursActuelles.radioactivite;
  document.getElementById("valeurFossile").textContent =
    valeursActuelles.fossile;

  document.getElementById("barreCO2").value = valeursActuelles.co2;
  document.getElementById("barreTemperature").value =
    valeursActuelles.temperature;
  document.getElementById("barrePopulation").value =
    valeursActuelles.population;
  document.getElementById("barreBudget").value = valeursActuelles.budget;
  document.getElementById("barreElectricité").value =
    valeursActuelles.electricite;
  document.getElementById("barreRadioactivite").value =
    valeursActuelles.radioactivite;
  document.getElementById("barreFossile").value = valeursActuelles.fossile;
}

function evoluerDansLeTemps() {
  valeursActuelles.co2 +=
    incrementation_co2 + valeursActuelles.electricite * 0.2;
  valeursActuelles.temperature += valeursActuelles.co2 * 0.0000001;
  if (valeursActuelles.co2 >= 30000) {
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

document.addEventListener("DOMContentLoaded", function () {
  let cartesData = {
    cartes: [
      {
        id: 1,
        specification: "Spécification de la carte 1",
        incrementation_co2: -50,
        incrementation_temperature: -50,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: -50,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 2,
        specification: "Spécification de la carte 2",
        incrementation_co2: 80,
        incrementation_temperature: 90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 0,
        incrementation_electricite: 90,
        incrementation_radioactivite: 0,
        incrementation_fossile: -50,
      },
      {
        id: 3,
        specification: "Spécification de la carte 3",
        incrementation_co2: 0,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 0,
        incrementation_electricite: 90,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 4,
        specification: "Spécification de la carte 4",
        incrementation_co2: 0,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 0,
        incrementation_electricite: 90,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 5,
        specification: "Spécification de la carte 5",
        incrementation_co2: 90,
        incrementation_temperature: 90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 90,
        incrementation_electricite: 90,
        incrementation_radioactivite: 0,
        incrementation_fossile: -90,
      },
      {
        id: 6,
        specification: "Spécification de la carte 6",
        incrementation_co2: 0,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 0,
        incrementation_electricite: 90,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 7,
        specification: "Spécification de la carte 7",
        incrementation_co2: 90,
        incrementation_temperature: 90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 0,
        incrementation_electricite: 90,
        incrementation_radioactivite: 0,
        incrementation_fossile: -90,
      },
      {
        id: 8,
        specification: "Spécification de la carte 8",
        incrementation_co2: 0,
        incrementation_temperature: 90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 10,
        incrementation_budget: 0,
        incrementation_electricite: 90,
        incrementation_radioactivite: 90,
        incrementation_fossile: 0,
      },
      {
        id: 9,
        specification: "Spécification de la carte 9",
        incrementation_co2: 90,
        incrementation_temperature: 90,
        incrementation_pop_moins: -90,
        incrementation_pop_plus: 0,
        incrementation_budget: 90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 10,
        specification: "Spécification de la carte 10",
        incrementation_co2: 90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 11,
        specification: "Spécification de la carte 11",
        incrementation_co2: -90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 0,
        incrementation_electricite: -90,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 12,
        specification: "Spécification de la carte 12",
        incrementation_co2: -90,
        incrementation_temperature: -90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: -10,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 13,
        specification: "Spécification de la carte 13",
        incrementation_co2: 90,
        incrementation_temperature: -90,
        incrementation_pop_moins: -90,
        incrementation_pop_plus: 0,
        incrementation_budget: 0,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 14,
        specification: "Spécification de la carte 14",
        incrementation_co2: -90,
        incrementation_temperature: -90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: -90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 15,
        specification: "Spécification de la carte 15",
        incrementation_co2: -90,
        incrementation_temperature: 90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 90,
        incrementation_fossile: 0,
      },
      {
        id: 16,
        specification: "Spécification de la carte 16",
        incrementation_co2: -90,
        incrementation_temperature: -90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 10,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 17,
        specification: "Spécification de la carte 17",
        incrementation_co2: 0,
        incrementation_temperature: -90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 90,
        incrementation_budget: 90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 18,
        specification: "Spécification de la carte 18",
        incrementation_co2: 0,
        incrementation_temperature: 0,
        incrementation_pop_moins: 90,
        incrementation_pop_plus: 0,
        incrementation_budget: 0,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 19,
        specification: "Spécification de la carte 19",
        incrementation_co2: 0,
        incrementation_temperature: 0,
        incrementation_pop_moins: 90,
        incrementation_pop_plus: 0,
        incrementation_budget: 0,
        incrementation_electricite: 0,
        incrementation_radioactivite: 90,
        incrementation_fossile: 0,
      },
      {
        id: 20,
        specification: "Spécification de la carte 20",
        incrementation_co2: -90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: -10,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 21,
        specification: "Spécification de la carte 21",
        incrementation_co2: 0,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: -90,
        incrementation_electricite: 90,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 22,
        specification: "Spécification de la carte 22",
        incrementation_co2: 0,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 10,
        incrementation_budget: -10,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 23,
        specification: "Spécification de la carte 23",
        incrementation_co2: -90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: -90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 24,
        specification: "Spécification de la carte 24",
        incrementation_co2: -90,
        incrementation_temperature: -90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 10,
        incrementation_budget: -10,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 25,
        specification: "Spécification de la carte 25",
        incrementation_co2: -90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: -90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 26,
        specification: "Spécification de la carte 26",
        incrementation_co2: -90,
        incrementation_temperature: -90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: -10,
        incrementation_electricite: 90,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 27,
        specification: "Spécification de la carte 27",
        incrementation_co2: -90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 28,
        specification: "Spécification de la carte 28",
        incrementation_co2: -90,
        incrementation_temperature: -90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: -90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 29,
        specification: "Spécification de la carte 29",
        incrementation_co2: -90,
        incrementation_temperature: -90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: -90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 30,
        specification: "Spécification de la carte 30",
        incrementation_co2: -90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 10,
        incrementation_budget: 10,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 31,
        specification: "Spécification de la carte 31",
        incrementation_co2: 0,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 0,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 32,
        specification: "Spécification de la carte 32",
        incrementation_co2: 90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 10,
        incrementation_budget: 10,
        incrementation_electricite: -90,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 33,
        specification: "Spécification de la carte 33",
        incrementation_co2: 90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 90,
        incrementation_pop_plus: 0,
        incrementation_budget: -90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 34,
        specification: "Spécification de la carte 34",
        incrementation_co2: 90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 10,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 35,
        specification: "Spécification de la carte 35",
        incrementation_co2: 90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: -90,
      },
      {
        id: 36,
        specification: "Spécification de la carte 36",
        incrementation_co2: 90,
        incrementation_temperature: 90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 10,
        incrementation_budget: 10,
        incrementation_electricite: 90,
        incrementation_radioactivite: 0,
        incrementation_fossile: -90,
      },
      {
        id: 37,
        specification: "Spécification de la carte 37",
        incrementation_co2: -90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: -90,
        incrementation_electricite: -90,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 38,
        specification: "Spécification de la carte 38",
        incrementation_co2: 90,
        incrementation_temperature: 90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 10,
        incrementation_electricite: 90,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 39,
        specification: "Spécification de la carte 39",
        incrementation_co2: 0,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 90,
        incrementation_budget: 0,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 40,
        specification: "Spécification de la carte 40",
        incrementation_co2: 90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 10,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 41,
        specification: "Spécification de la carte 41",
        incrementation_co2: 90,
        incrementation_temperature: 90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 90,
        incrementation_budget: 90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: -90,
      },
      {
        id: 42,
        specification: "Spécification de la carte 42",
        incrementation_co2: 90,
        incrementation_temperature: 90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 10,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 43,
        specification: "Spécification de la carte 43",
        incrementation_co2: 90,
        incrementation_temperature: 90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 0,
        incrementation_budget: 90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 44,
        specification: "Spécification de la carte 44",
        incrementation_co2: -90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 10,
        incrementation_budget: -90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 45,
        specification: "Spécification de la carte 45",
        incrementation_co2: 90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 90,
        incrementation_budget: 90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 46,
        specification: "Spécification de la carte 46",
        incrementation_co2: 0,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 10,
        incrementation_budget: -10,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 47,
        specification: "Spécification de la carte 47",
        incrementation_co2: 0,
        incrementation_temperature: 0,
        incrementation_pop_moins: -90,
        incrementation_pop_plus: 0,
        incrementation_budget: 90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 48,
        specification: "Spécification de la carte 48",
        incrementation_co2: -90,
        incrementation_temperature: -90,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 10,
        incrementation_budget: -10,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 49,
        specification: "Spécification de la carte 49",
        incrementation_co2: -90,
        incrementation_temperature: 0,
        incrementation_pop_moins: 0,
        incrementation_pop_plus: 90,
        incrementation_budget: -90,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
      {
        id: 50,
        specification: "Spécification de la carte 50",
        incrementation_co2: 90,
        incrementation_temperature: 90,
        incrementation_pop_moins: 90,
        incrementation_pop_plus: 0,
        incrementation_budget: -10,
        incrementation_electricite: 0,
        incrementation_radioactivite: 0,
        incrementation_fossile: 0,
      },
    ],
  };

  function getCarteByID(id) {
    if (!cartesData || !cartesData.cartes || !id) {
      console.error("Données de cartes invalides ou ID manquant");
      return null;
    }

    const carteTrouvee = cartesData.cartes.find((carte) => carte.id === id);
    return carteTrouvee || null; // Retourne la carte trouvée ou null si aucune carte n'est trouvée
  }
  // Votre code JavaScript ici
  let carte1 = Math.floor(Math.random() * 50) + 1;
  let carte2 = Math.floor(Math.random() * 50) + 1;

  function effectCard(cardId) {
    // Trouver la carte correspondante dans la structure de données JSON
    console.log("Carte sélectionnée : ");
    let carte = getCarteByID(parseInt(cardId));
    console.log(carte);

    if (carte) {
      console.log("Carte sélectionnée : ", carte.specification);

      // Ajouter les valeurs d'incrémentation de la carte aux variables existantes
      incrementation_co2 += carte.incrementation_co2;
      incrementation_pop_moins += carte.incrementation_pop_moins;
      incrementation_pop_plus += carte.incrementation_pop_plus;
      incrementation_budget += carte.incrementation_budget;
      incrementation_electricite += carte.incrementation_electricite;
      incrementation_radioactivite += carte.incrementation_radioactivite;
      incrementation_fossile += carte.incrementation_fossile;

      // Mettre à jour l'affichage ou effectuer d'autres actions nécessaires
      document.getElementById("chose").innerHTML =
        "Action effectuée pour la carte " + cardId;
    } else {
      console.error("Carte non trouvée" + cardId);
    }
    carte1 = Math.floor(Math.random() * 50) + 1;
    carte2 = Math.floor(Math.random() * 50) + 1;
  }

  // Démarrez votre intervalle
  function demarrerInterval() {
    monInterval = setInterval(popupChoix, 8000); // Exemple avec un délai de 1 seconde (1000 millisecondes)
  }

  // Mettez en pause votre intervalle
  function mettreEnPause() {
    clearInterval(popupChoix); // Cela mettra en pause l'intervalle associé à monInterval
  }

  // Reprenez votre intervalle
  function reprendre() {
    demarrerInterval(); // Redémarrez l'intervalle avec le même délai et la même fonction
  }

  function choix(carte1, carte2) {
    let choseDiv = document.getElementById("chose");
    mettreEnPause();
    if (choseDiv) {
      choseDiv.innerHTML =
        '<div class="chose-card d-flex"><div id="card1" carte="' +
        carte1 +
        '" class="carte"><img src="./image/cards/' +
        carte1 +
        '.png" alt=""></div><div id="card2" carte="' +
        carte2 +
        '" class="carte"><img src="./image/cards/' +
        carte2 +
        '.png" alt=""></div></div>';

      // Ajout de l'événement click pour la carte 1
      let card1 = document.getElementById("card1");
      if (card1) {
        card1.addEventListener("click", function () {
          // Appel de la fonction ou du code lorsque card1 est cliquée
          effectCard(card1.getAttribute("carte"));
        });
        reprendre;
      }

      // Ajout de l'événement click pour la carte 2
      let card2 = document.getElementById("card2");
      if (card2) {
        card2.addEventListener("click", function () {
          // Appel de la fonction ou du code lorsque card1 est cliquée
          effectCard(card2.getAttribute("carte"));
        });
        reprendre;
      }
    } else {
      console.error("L'élément avec l'ID 'chose' n'a pas été trouvé.");
    }
  }

  function popupChoix() {
    console.log("carte1 : " + carte1);
    console.log("carte2 : " + carte2);
    choix(carte1, carte2);
  }

  // Appeler maFonction toutes les 5 secondes (5000 millisecondes)
  demarrerInterval();
});

setInterval(evoluerDansLeTemps, 1000);
