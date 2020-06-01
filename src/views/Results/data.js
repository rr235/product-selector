import axios from 'axios';

const postAnswers = async (answers) => {
  const { data } = await axios.post('http://localhost:5000/results', answers);
  return data;
};

// eslint-disable-next-line import/prefer-default-export
export { postAnswers };
