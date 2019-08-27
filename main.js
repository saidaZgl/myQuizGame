// var questionnaireJavascript = require("./questionnaire.json");
var questionnaire = selectionQuestionnaire();
var gestionQuestion = require("./gestionQuestion");

var isGameOver = false;

while (!isGameOver) {
  var question = gestionQuestion.genererQuestionAleatoire(questionnaire);
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

function selectionQuestionnaire() {
  var numeroQuestionnaire = Math.floor(Math.random() * 2 + 1); // 2 pour les 2 questions et * 1 pour éviter d'avoir le 0
  if (numeroQuestionnaire === 1) {
    return require("./questionnaireReact.json");
  } else {
    return require("./questionnaireJs.json");
  }
}
