import { generateDataByFunction } from '../utils';
import generateGame from '..';

const isPrime = (num) => {
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateData = () => generateDataByFunction(isPrime);

export default () => generateGame(description, generateData);
