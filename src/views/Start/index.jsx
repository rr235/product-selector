import React from 'react';
import { shape, func, string } from 'prop-types';
import Button from '../../components/Button';
import styles from './styles.scss';

const Start = ({ history, redirectUrl }) => {
  const clickHandler = () => {
    if (history.push) {
      history.push(redirectUrl);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Take the quiz and find your first pair</h1>
      <Button onClick={clickHandler}>Try On Trial</Button>
    </div>
  );
};

Start.propTypes = {
  history: shape({
    push: func,
  }),
  redirectUrl: string,
};

Start.defaultProps = {
  history: {},
  redirectUrl: '',
};

export default Start;
