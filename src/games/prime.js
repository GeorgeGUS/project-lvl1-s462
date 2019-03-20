import { getRandomNum } from '../utils';
import generateGame from '..';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateData = () => {
  const num = getRandomNum(0, 100);
  return {
    question: num,
    correctAnswer: isPrime(num) ? 'yes' : 'no',
  };
};

export default () => generateGame(description, generateData);
