import { generateDataByFunction } from '../utils';
import generateGame from '..';

const isPrime = (num) => {
  const half = num / 2;
  for (let i = 2; i <= half; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateData = () => generateDataByFunction(isPrime);

export default () => generateGame(description, generateData);
