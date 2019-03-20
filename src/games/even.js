import { getRandomNum } from '../utils';
import generateGame from '..';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';
const generateData = () => {
  const num = getRandomNum();
  return {
    question: num,
    correctAnswer: isEven(num) ? 'yes' : 'no',
  };
};

export default () => {
  generateGame(description, generateData);
};
