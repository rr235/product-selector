import React from 'react';
import { string } from 'prop-types';
import loadingGif from './assets/loader.gif';
import styles from './styles.scss';

const Loading = ({ message }) => (
  <div className={styles.container}>
    <img src={loadingGif} alt="loading..." className={styles.image} />
    <p className={styles.message}>{message}</p>
  </div>
);

Loading.propTypes = {
  message: string,
};

Loading.defaultProps = {
  message: null,
};

export default Loading;
