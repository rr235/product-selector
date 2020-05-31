import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shape, func, string } from 'prop-types';
import Question from '../../components/Question';
import styles from './styles.scss';
import { getQuestions } from './data';
import { SET_QUESTIONS, SET_ACTIVE_QUESTION } from '../../actions';
import { selectQuestion } from '../../reducers/questions';

const Questions = ({ history, redirectUrl }) => {
  const dispatch = useDispatch();
  const { copy, answers } = useSelector(selectQuestion);

  useEffect(() => {
    const getData = async () => {
      const questions = await getQuestions();
      dispatch({ type: SET_QUESTIONS, payload: questions });
    };
    getData();
  }, [dispatch]);

  const onSelectionHandler = ({ nextQuestion }) => {
    // TODO: save answers
    dispatch({ type: SET_ACTIVE_QUESTION, payload: nextQuestion });

    if (typeof nextQuestion === 'string' && !nextQuestion) {
      history.push(redirectUrl);
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
