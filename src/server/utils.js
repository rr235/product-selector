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

const findQuestionAnswerRating = (questionId, answerId) => {
  const question = data.questions.find(({ id }) => id === questionId);
  const { ratingIncrease } = question.answers.find(({ id }) => id === answerId);
  return ratingIncrease;
};

const getDefaultShoeRatings = () => {
  const ratings = data.shoes.reduce((acc, value) => {
    acc[value.name] = value.rating;
    return acc;
  }, {});
  return ratings;
};

const addRatings = (ratings, ratingIncrease) => {
  const totalRatings = { ...ratings };
  Object.keys(ratings).forEach((key) => {
    totalRatings[key] += ratingIncrease[key];
  });
  return totalRatings;
};

const findHighestRatedShoes = (ratings) => {
  return Object.keys(ratings).reduce((acc, current) =>
    ratings[acc] > ratings[current] ? acc : current
  );
};

const getShoeDetails = (name) => data.shoesDetails.find(({ code }) => code === name);

const findShoesFromAnswers = (answers = []) => {
  const ratings = getDefaultShoeRatings();
  const totalRatings = answers.reduce((acc, value) => {
    const ratingIncrease = findQuestionAnswerRating(value.question, value.answer);
    return addRatings(acc, ratingIncrease);
  }, ratings);

  const shoeName = findHighestRatedShoes(totalRatings);

  return getShoeDetails(shoeName);
};

module.exports = { getQuestions, findShoesFromAnswers };
