var joueursJSON = require("./joueurs.json");

var joueur = {
  nom: "",
  score: 0,
  scoreMax: 0,

  initialiserJoueur: function(leNom) {
    this.nom = leNom;
    this.score = 0;
    if (joueursJSON[leNom] !== undefined) {
      this.scoreMax = joueursJSON[leNom];
    }
  },

  afficherJoueur: function() {
    var txt = "";
    txt += "Nom :" + this.nom + "\n";
    txt += "Score :" + this.score + "\n";
    txt += "ScoreMax :" + this.scoreMax + "\n";
    console.log(txt);
  },
  gagnerPoint: function() {
    this.score += 10;
  }
};

module.exports = joueur;
