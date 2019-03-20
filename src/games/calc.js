import { getRandomNum, generateGame } from '..';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operators = Object.keys(operations);
const operatorsLastIndex = operators.length - 1;

const description = 'What is the result of the expression?';
const generateData = () => {
  const numA = getRandomNum();
  const numB = getRandomNum();
  const operator = operators[getRandomNum(0, operatorsLastIndex)];
  return {
    question: `${numA} ${operator} ${numB}`,
    correctAnswer: `${operations[operator](numA, numB)}`,
  };
};

export default () => {
  generateGame(description, generateData);
};
