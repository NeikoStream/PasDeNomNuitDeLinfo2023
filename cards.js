document.addEventListener("DOMContentLoaded", function() {
  var valeursDejaGenerees = []; // Liste pour stocker les valeurs déjà générées
  var valeursPossibles = Array.from({ length: 11 }, (_, i) => i + 10); // Tableau des valeurs possibles (10 à 20)

  function randomNonRepetitif() {
    if (valeursPossibles.length === 0) {
      alert("Toutes les valeurs ont été générées !");
      return null; // Toutes les valeurs ont été générées
    }

    var index = Math.floor(Math.random() * valeursPossibles.length);
    var valeurRandom = valeursPossibles.splice(index, 1)[0];
    valeursDejaGenerees.push(valeurRandom);
    return valeurRandom;
  }

  function genererValeur() {
    var resultatElement = document.getElementById("resultat");
    var valeurAleatoire = randomNonRepetitif();

    if (valeurAleatoire !== null) {
      resultatElement.textContent = "Valeur aléatoire : " + valeurAleatoire;
    }
  }

  // Ajout d'un gestionnaire d'événement au bouton
  var genererBouton = document.getElementById("genererBouton");
  genererBouton.addEventListener("click", genererValeur);
});