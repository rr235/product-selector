import React from 'react';
import Start from '../views/Start';
import Questions from '../views/Questions';
import styles from './styles.scss';

const questions = [
  {
    question: { id: 0, copy: 'Are you male or female?' },
    options: [
      { id: 0, copy: 'Male' },
      { id: 1, copy: 'Female' },
    ],
  },
];

const App = () => (
  <div className={styles.container}>
    {/* <Start /> */}
    <Questions questions={questions} />
  </div>
);

export default App;
