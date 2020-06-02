import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shape, func, string } from 'prop-types';
import Question from '../../components/Question';
import styles from './styles.scss';
import { getQuestions } from './data';
import { SET_QUESTIONS, SET_ACTIVE_QUESTION, SET_ANSWER } from '../../actions';
import { selectQuestion } from '../../reducers/questions';

const Questions = ({ history, redirectUrl }) => {
  const dispatch = useDispatch();
  const { id, copy, answers } = useSelector(selectQuestion);

  useEffect(() => {
    const getData = async () => {
      const questions = await getQuestions();
      dispatch({ type: SET_QUESTIONS, payload: questions });
    };
    getData();
  }, [dispatch]);

  const onSelectionHandler = ({ nextQuestion, id: answerId }) => {
    // save answers
    const answer = { question: id, answer: answerId };
    dispatch({ type: SET_ANSWER, payload: answer });

    if (typeof nextQuestion === 'string' && !nextQuestion) {
      // show next page
      history.push(redirectUrl);
      dispatch({ type: SET_ACTIVE_QUESTION, payload: 0 });
    } else {
      // show next question
      dispatch({ type: SET_ACTIVE_QUESTION, payload: nextQuestion });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headlineWrapper}>
        <h1 className={styles.headline}>Try On Quiz</h1>
        <p className={styles.headline}>30 days risk free</p>
      </div>
      <div className={styles.questions}>
        {!!copy && <Question question={copy} options={answers} onSelection={onSelectionHandler} />}
      </div>
    </div>
  );
};

Questions.propTypes = {
  history: shape({
    push: func,
  }),
  redirectUrl: string,
};

Questions.defaultProps = {
  history: {},
  redirectUrl: '',
};

export default Questions;
