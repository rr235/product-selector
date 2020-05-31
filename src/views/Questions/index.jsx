import React from 'react';
import { string, arrayOf, shape, oneOfType, number } from 'prop-types';
import Question from '../../components/Question';
import styles from './styles.scss';

const Questions = ({ questions }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headlineWrapper}>
        <h1 className={styles.headline}>Try On Quiz</h1>
        <p className={styles.headline}>30 days risk free</p>
      </div>
      <div className={styles.questions}>
        {questions.map(({ question, options }) => (
          <Question question={question} options={options} key={question.id} />
        ))}
      </div>
    </div>
  );
};

const copyType = shape({
  copy: string,
  id: oneOfType([string, number]),
});

Questions.propTypes = {
  questions: arrayOf(
    shape({
      question: copyType,
      option: arrayOf(copyType),
    })
  ),
};

Questions.defaultProps = {
  questions: [],
};

export default Questions;
