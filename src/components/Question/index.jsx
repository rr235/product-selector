import React from 'react';
import { string, arrayOf, shape, oneOfType, number, func } from 'prop-types';
import Button from '../Button';
import styles from './styles.scss';

const Question = ({ question, options, onSelection }) => {
  const selectionHandler = (option) => {
    if (onSelection) {
      onSelection(option);
    }
  };

  return (
    <div>
      <h1>{question.copy}</h1>
      {options.map((option) => (
        <Button className={styles.button} onClick={() => selectionHandler(option)} key={option.id}>
          {option.copy}
        </Button>
      ))}
    </div>
  );
};

const copyType = shape({
  copy: string,
  id: oneOfType([string, number]),
});

Question.propTypes = {
  question: copyType,
  options: arrayOf(copyType),
  onSelection: func,
};

Question.defaultProps = {
  question: {},
  options: [],
  onSelection: null,
};

export default Question;
