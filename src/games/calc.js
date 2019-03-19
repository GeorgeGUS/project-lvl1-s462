import { getRandomNum, generateGame } from '..';

export default () => {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  const operators = Object.keys(operations);
  const operatorsLastIndex = operators.length - 1;

  const data = () => {
    const numA = getRandomNum();
    const numB = getRandomNum();
    const operator = operators[getRandomNum(0, operatorsLastIndex)];
    return {
      question: `${numA} ${operator} ${numB}`,
      correctAnswer: `${operations[operator](numA, numB)}`,
    };
  };
  generateGame('calc', data);
};
