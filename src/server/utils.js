const data = require('./data.json');

const getQuestions = () => {
  return data.questions.map(({ id, copy, answers }) => ({
    id,
    copy,
    answers: answers.map((answer) => {
      return { id: answer.id, copy: answer.copy, nextQuestion: answer.nextQuestion };
    }),
  }));
};

module.exports = { getQuestions };
