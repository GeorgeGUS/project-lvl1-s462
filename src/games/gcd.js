import { getRandomNum } from '../utils';
import generateGame from '..';

const calculateGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calculateGCD(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';
const generateData = () => {
  const numA = getRandomNum();
  const numB = getRandomNum();
  const gcd = calculateGCD(numA, numB);
  return {
    question: `${numA} ${numB}`,
    correctAnswer: `${gcd}`,
  };
};

export default () => {
  generateGame(description, generateData);
};
