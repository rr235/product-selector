import { combineReducers } from 'redux';
import questions from './questions';
import activeQuestion from './activeQuestion';
import answers from './answers';

export default combineReducers({
  questions,
  activeQuestion,
  answers,
});
