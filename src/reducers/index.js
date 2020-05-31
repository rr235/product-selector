import { combineReducers } from 'redux';
import questions from './questions';
import activeQuestion from './activeQuestion';

export default combineReducers({
  questions,
  activeQuestion,
});
