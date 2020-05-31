import axios from 'axios';

const getQuestions = async () => {
  const { data } = await axios.get('http://localhost:5000/questions');
  return data;
};

// eslint-disable-next-line import/prefer-default-export
export { getQuestions };
