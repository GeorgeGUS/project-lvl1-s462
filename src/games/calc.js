import { getRandomNum } from '../utils';
import generateGame from '..';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operators = Object.keys(operations);
const operatorsLastIndex = operators.length - 1;

const description = 'What is the result of the expression?';
const generateData = () => {
  const numA = getRandomNum(0, 100);
  const numB = getRandomNum(0, 100);
  const operator = operators[getRandomNum(0, operatorsLastIndex)];
  return {
    question: `${numA} ${operator} ${numB}`,
    correctAnswer: operations[operator](numA, numB),
  };
};

export default () => generateGame(description, generateData);
