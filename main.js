var questionnaireJavascript = require("./questionnaire.json");
var gestionQuestion = require("./gestionQuestion");

var question = gestionQuestion.genererQuestionAleatoire(
  questionnaireJavascript
);

gestionQuestion.afficherUneQuestion(question);

var reponse = gestionQuestion.saisirReponse();

var bool = gestionQuestion.estBonneReponse(question, reponse); //renvoie un booleen

console.log(bool);
