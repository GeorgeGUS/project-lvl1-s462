import getRandomNum from '../utils';
import generateGame from '..';

const calculateGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calculateGCD(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';
const generateData = () => {
  const numA = getRandomNum(0, 100);
  const numB = getRandomNum(0, 100);
  const question = `${numA} ${numB}`;
  const correctAnswer = calculateGCD(numA, numB).toString();
  return { question, correctAnswer };
};

export default () => generateGame(description, generateData);
