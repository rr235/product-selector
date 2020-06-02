import reducers from './index';
import { SET_QUESTIONS, ADD_ANSWER, SET_ACTIVE_QUESTION } from '../actions';

describe('reducer', () => {
  describe('should set correct initial state', () => {
    let state;

    beforeAll(() => {
      state = reducers(undefined, {});
    });

    it('question should be empty array', () => {
      expect(state.questions).toStrictEqual([]);
    });

    it('answers should be empty array', () => {
      expect(state.answers).toStrictEqual([]);
    });

    it('action question index should be 0', () => {
      expect(state.activeQuestion).toBe(0);
    });
  });

  describe('Questions reducer', () => {
    it('should set correct question list', () => {
      const questions = [{ id: 0, copy: 'question 1' }];
      const action = { type: SET_QUESTIONS, payload: questions };

      const state = reducers({}, action);
      expect(state.questions).toStrictEqual(questions);
    });
  });

  describe('Answers reducer', () => {
    it('should add answer', () => {
      const answer1 = { question: 0, answer: 1 };
      const answer2 = { question: 1, answer: 1 };

      let state = reducers({}, { type: ADD_ANSWER, payload: answer1 });
      expect(state.answers).toStrictEqual([answer1]);

      state = reducers(state, { type: ADD_ANSWER, payload: answer2 });
      expect(state.answers).toStrictEqual([answer1, answer2]);
    });
  });

  describe('Active Question reducer', () => {
    it('should set correct active question index', () => {
      const action = { type: SET_ACTIVE_QUESTION, payload: 2 };

      const state = reducers({}, action);
      expect(state.activeQuestion).toStrictEqual(2);
    });
  });
});
