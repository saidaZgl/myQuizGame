// var questionnaireJavascript = require("./questionnaire.json");
var boiteOutil = require("./boiteOutil");
var gestionQuestionnaire = require("./gestionQuestionnaire");
var questionnaire = selectionQuestionnaire();
var gestionQuestion = require("./gestionQuestion");
var joueur = require("./joueur");

var isGameOver = false;
joueur.afficherJoueur();

while (!isGameOver) {
  var question = gestionQuestion.genererQuestionAleatoire(questionnaire);
  gestionQuestion.afficherUneQuestion(question);
  var reponse = gestionQuestion.saisirReponse();
  var isBonneReponse = gestionQuestion.estBonneReponse(question, reponse); //renvoie un booleen
  if (isBonneReponse) {
    joueur.gagnerPoint();
    joueur.afficherJoueur();
    console.log("C'est une bonne réponse !");
  } else {
    console.log(
      "C'est une mauvaise réponse - Vous avez perdu - Votre score final est de : " +
        joueur.score +
        " points"
    );
    isGameOver = true;
  }
}

function selectionQuestionnaire() {
  gestionQuestionnaire.afficherQuestionnaire();
  var choixQuestionnaire = boiteOutil.saisirUneChaine("Quel est votre choix ?");

  return require("./questionnaires/" +
    gestionQuestionnaire[choixQuestionnaire]);
}
