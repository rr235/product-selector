import { SET_ACTIVE_QUESTION } from '../actions';

const activeQuestion = (state = 0, action) => {
  switch (action.type) {
    case SET_ACTIVE_QUESTION:
      return action.payload;
    default:
      return state;
  }
};

export default activeQuestion;
