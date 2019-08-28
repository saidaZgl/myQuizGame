var readline = require("readline-sync");

var boiteOutil = {
  saisirUneChaine(question) {
    return readline.question(question);
  }
};

module.exports = boiteOutil;
