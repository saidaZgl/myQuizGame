var boiteOutil = require("./boiteOutil");

var questionnaire = {
  afficherUneQuestion: function(question) {
    var txt = "";
    txt += question.desc + "\n";
    txt += "A : " + question.reponseA + "\n";
    txt += "B : " + question.reponseB + "\n";
    txt += "C : " + question.reponseC + "\n";
    txt += "D : " + question.reponseD;
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
    // var numeroQuestionAleatoire = Math.floor(
    //   Math.random() *
    //     this.retourneNombreQuestionDuQuestionnaire(questionnaire) +
    //     1
    // );
    var numeroQuestionAleatoire = boiteOutil.genererChiffreAleatoire(
      1,
      this.retourneNombreQuestionDuQuestionnaire(questionnaire)
    );
    return questionnaire["question" + numeroQuestionAleatoire];
  },
  saisirReponse() {
    return boiteOutil.saisirUneChaine("Quel est votre choix (A - B - C - D)?");
  },
  estBonneReponse(question, reponse) {
    if (reponse === question.bonneReponse) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = questionnaire;
