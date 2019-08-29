var questionnaire = {
  js: "questionnaireJs.json",
  react: "questionnaireReact.json",

  afficherQuestionnaire: function() {
    var txt = "";
    for (var propriete in this) {
      if (typeof this[propriete] !== "function") {
        txt += propriete + " - ";
      }
    }
    console.log(txt);
  }
};
questionnaire.afficherQuestionnaire();
module.exports = questionnaire;
