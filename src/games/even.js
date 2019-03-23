import { generateDataByFunction } from '../utils';
import generateGame from '..';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';
const generateData = () => generateDataByFunction(isEven);

export default () => generateGame(description, generateData);
