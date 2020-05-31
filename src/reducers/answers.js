import { SET_ANSWER } from '../actions';

const answers = (state = [], action) => {
  switch (action.type) {
    case SET_ANSWER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default answers;
