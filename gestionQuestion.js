var boiteOutil = require("./boiteOutil");

var questionnaire = {
  questionUtilisee: [],

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

  genererQuestionAleatoire: function(questionnaire) {
    var numeroQuestionAleatoire = 0;
    do {
      numeroQuestionAleatoire = boiteOutil.genererChiffreAleatoire(
        1,
        this.retourneNombreQuestionDuQuestionnaire(questionnaire) + 1
      );
    } while (this.estQuestionUtilisee(numeroQuestionAleatoire));
    this.questionUtilisee.push(numeroQuestionAleatoire);
    return questionnaire["question" + numeroQuestionAleatoire];
  },

  estQuestionUtilisee: function(num) {
    for (var i = 0; i < this.questionUtilisee.length; i++) {
      if (num === this.questionUtilisee[i]) {
        return true;
      }
    }
    return false;
  },

  verifierQuestionnaireVide: function(questionnaire) {
    return (
      this.questionUtilisee.length ===
      this.retourneNombreQuestionDuQuestionnaire(questionnaire)
    );
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
  },
  retourneNombrePoint(question) {
    if (question.difficulte === "facile") {
      return 1;
    } else if (question.difficulte === "moyenne") {
      return 3;
    } else {
      return 5;
    }
  }
};

module.exports = questionnaire;
