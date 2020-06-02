import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import QuestionsView from './index';
import rootReducer from '../../reducers';
import { getQuestions } from './data';
import Question from '../../components/Question';

const mockQuestions = [
  {
    id: 0,
    copy: 'Are you male or female?',
    answers: [
      { id: 0, copy: 'Male', nextQuestion: 1 },
      { id: 1, copy: 'Female', nextQuestion: 1 },
    ],
  },
  {
    id: 1,
    copy: 'Are you looking for a day to day trainer or running shoe?',
    answers: [
      { id: 0, copy: 'Daily Shoe', nextQuestion: '' },
      { id: 1, copy: 'Running Shoe', nextQuestion: '' },
    ],
  },
];
jest.mock('./data');
getQuestions.mockReturnValue(mockQuestions);

const redirectUrl = '/redirectUrl';
const history = { push: jest.fn() };

describe('Questions View', () => {
  let component;
  beforeEach(() => {
    const store = createStore(rootReducer);
    component = mount(
      <Provider store={store}>
        <QuestionsView history={history} redirectUrl={redirectUrl} />
      </Provider>
    );
  });

  it('should fetch questions', () => {
    expect(getQuestions).toHaveBeenCalledTimes(1);
  });

  it('should show first question', () => {
    component.update();
    const question = component.find(Question);

    expect(question.prop('question')).toBe(mockQuestions[0].copy);
  });

  it('should show second question on selecting answer for first question', () => {
    component.update();
    let question = component.find(Question);
    expect(question.prop('question')).toBe(mockQuestions[0].copy);

    // simulate selection of first option
    question.prop('onSelection')(mockQuestions[0].answers[0]);

    component.update();
    question = component.find(Question);
    expect(question.prop('question')).toBe(mockQuestions[1].copy);
  });

  it('should redirect to next page when next question is empty', () => {
    component.update();
    const question = component.find(Question);

    // simulate selection of first option question 2
    question.prop('onSelection')(mockQuestions[1].answers[0]);

    expect(history.push).toHaveBeenCalledWith(redirectUrl);
  });
});
