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
    var nombreDeQuestion = 0;
    for (var question in questionnaire) {
      nombreDeQuestion++;
    }
    return nombreDeQuestion;
  },

  genererQuestionAleatoire(questionnaire) {
    var numeroQuestionAleatoire = Math.floor(
      Math.random() *
        this.retourneNombreQuestionDuQuestionnaire(questionnaire) +
        1
    );
    this.afficherUneQuestion(
      questionnaire["question" + numeroQuestionAleatoire]
    );
  }
};

module.exports = questionnaire;
