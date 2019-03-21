import { getRandomNum } from '../utils';
import generateGame from '..';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';
const generateData = () => {
  const question = getRandomNum(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => generateGame(description, generateData);
