import { getRandomNum, generateGame } from '..';

const calculateGCD = (numA, numB = 0) => {
  let [a, b] = [numA, numB];
  // Euclid algorithm
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const data = () => {
    const numA = getRandomNum();
    const numB = getRandomNum();
    const gcd = calculateGCD(numA, numB);
    return {
      question: `${numA} ${numB}`,
      correctAnswer: `${gcd}`,
    };
  };
  generateGame(rules, data);
};
