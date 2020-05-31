import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import styles from './styles.scss';

const App = () => (
  <div className={styles.container}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>
);

export default App;
