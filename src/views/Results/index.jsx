import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductInfo from '../../components/ProductInfo';
import Loading from '../../components/Loading';
import styles from './styles.scss';
import { postAnswers } from './data';
import { selectAnswers } from '../../reducers/answers';

const Results = () => {
  const [result, setResult] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const answers = useSelector(selectAnswers);
  useEffect(() => {
    setIsLoading(true);
    postAnswers(answers)
      .then((data) => {
        setResult(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        setIsLoading(false);
      });
  }, [answers]);

  if (isLoading) {
    return (
      <div className={styles.center}>
        <Loading message="We're running to get your results" />
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className={styles.center}>
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
