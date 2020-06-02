import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductInfo from '../../components/ProductInfo';
import styles from './styles.scss';
import { postAnswers } from './data';
import { selectAnswers } from '../../reducers/answers';

const Results = () => {
  const [result, setResult] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const answers = useSelector(selectAnswers);
  useEffect(() => {
    postAnswers(answers)
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, [answers]);

  if (errorMessage) {
    return (
      <div className={styles.container}>
        <p>{errorMessage}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Congratulations!</h1>
      <p>Based on your selection we have decided on {result.name}! Enjoy the 30 days trial!</p>
      <ProductInfo title={result.name} imageUrl={result.image} />
    </div>
  );
};

export default Results;
