import { ADD_ANSWER } from '../actions';

const answers = (state = [], action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return [...state, action.payload];
    default:
      return state;
  }
};

const selectAnswers = (state) => state.answers;

export default answers;
export { selectAnswers };
