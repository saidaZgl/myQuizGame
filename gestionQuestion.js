var questionnaireJavascript = require("./questionnaire.json");
var questionnaire = {
  afficherUneQuestion: function(question) {
    var txt = "";
    txt += question.desc + "\n";
    txt += question.reponseA + "\n";
    txt += question.reponseB + "\n";
    txt += question.reponseC + "\n";
    txt += question.reponseD;
    console.log(txt);
  },

  retourneNombreQuestionDuQuestionnaire: function(questionnaire) {
    var nombreQuestion = 0;
    for (var question in questionnaire) {
      nombreQuestion++;
    }
    return nombreQuestion;
  }
};

questionnaire.afficherUneQuestion(questionnaireJavascript.question3);
var nombreQuestion = questionnaire.retourneNombreQuestionDuQuestionnaire(
  questionnaireJavascript
);
console.log(
  "Le nombre de questions du questionnaire sur JavaScript est de : " +
    nombreQuestion
);
