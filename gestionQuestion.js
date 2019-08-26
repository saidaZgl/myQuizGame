var questionnaireJavascript = require("./questionnaire.json");

function afficherUneQuestion(question) {
  console.log(question.desc);
}

afficherUneQuestion(questionnaireJavascript.question3);
