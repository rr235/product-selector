import { SET_QUESTIONS } from '../actions';

const questions = (state = [], action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
};

const selectQuestion = (state) => {
  return state.questions.find(({ id }) => id === state.activeQuestion) || {};
};

export default questions;
export { selectQuestion };
