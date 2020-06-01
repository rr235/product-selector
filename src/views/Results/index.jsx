import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductInfo from '../../components/ProductInfo';
import styles from './styles.scss';
import { postAnswers } from './data';
import { selectAnswers } from '../../reducers/answers';

const Results = () => {
  const [result, setResult] = useState({});
  const answers = useSelector(selectAnswers);
  useEffect(() => {
    const postData = async () => {
      const data = await postAnswers(answers);
      setResult(data);
    };
    postData();
  }, [answers]);

  return (
    <div className={styles.container}>
      <h1>Congratulations!</h1>
      <p>Based on your selection we have decided on {result.name}</p>
      <ProductInfo title={result.name} imageUrl={result.image} />
    </div>
  );
};

export default Results;
