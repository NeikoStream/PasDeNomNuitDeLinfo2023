class TableauScore {
  constructor() {
    // Initialisation du tableau de score
    this.scoreboard = [];
  }

  ajouterScore(place, score, nomPlanete) {
    const entree = {
      place: place,
      score: score,
      nomPlanete: nomPlanete
    };

    // Ajoute l'entrée au tableau de score
    this.scoreboard.push(entree);

    // Trie le tableau par score (du plus élevé au plus bas)
    this.scoreboard.sort((a, b) => b.score - a.score);

    // Met à jour les places dans le tableau
    this.scoreboard.forEach((entree, index) => {
      entree.place = index + 1;
    });

    // Met à jour l'affichage du tableau
    this.afficherTableau();
  }

  afficherTableau() {
    const corpsTableau = document.getElementById('corpsTableau');
    corpsTableau.innerHTML = '';

    // Remplit le corps du tableau avec les données
    this.scoreboard.forEach(entree => {
      const ligne = document.createElement('tr');
      ligne.innerHTML = `<td>${entree.place}</td><td>${entree.score}</td><td>${entree.nomPlanete}</td>`;
      corpsTableau.appendChild(ligne);
    });
  }
}

// Crée une instance de la classe TableauScore
const tableauScore = new TableauScore();

// Exemple : Ajoute des scores au tableau
tableauScore.ajouterScore(1, 1200, 'Mars');
tableauScore.ajouterScore(2, 1000, 'Vénus');
tableauScore.ajouterScore(3, 800, 'Jupiter');