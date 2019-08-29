joueur = {
  nom: "Superman",
  score: 0,

  afficherJoueur: function() {
    var txt = "";
    txt += "Nom :" + this.nom + "\n";
    txt += "Score :" + this.score + "\n";
    console.log(txt);
  },
  gagnerPoint: function() {
    this.score += 10;
  }
};

module.exports = joueur;
