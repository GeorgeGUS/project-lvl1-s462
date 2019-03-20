import { getRandomNum } from '../utils';
import generateGame from '..';

const calculateGCD = (numA, numB) => {
  let [a, b] = [numA, numB];
  // Euclid algorithm
  // Link to source: https://younglinux.info/algorithm/euclidean
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
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
