var questionnaireJavascript = require("./questionnaire.json");
var gestionQuestion = require("./gestionQuestion");

var isGameOver = false;

while (!isGameOver) {
  var question = gestionQuestion.genererQuestionAleatoire(
    questionnaireJavascript
  );
  gestionQuestion.afficherUneQuestion(question);
  var reponse = gestionQuestion.saisirReponse();
  var isBonneReponse = gestionQuestion.estBonneReponse(question, reponse); //renvoie un booleen
  if (isBonneReponse) {
    console.log("C'est une bonne réponse !");
  } else {
    console.log("C'est une mauvaise réponse !");
    isGameOver = true;
  }
}
