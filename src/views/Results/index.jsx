import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductInfo from '../../components/ProductInfo';
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
    <div>
      <h1>Congratulations!</h1>
      <ProductInfo title={result.shoes} imageUrl={result.image} />
    </div>
  );
};

export default Results;
