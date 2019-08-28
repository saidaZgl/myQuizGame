var readline = require("readline-sync");

var boiteOutil = {
  saisirUneChaine(question) {
    return readline.question(question);
  },
  genererChiffreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min) + min); //permet d'avoir un chiffre aléatoire compris entre une borne max et min
  }
};

module.exports = boiteOutil;
