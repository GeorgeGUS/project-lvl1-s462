import { getRandomNum, generateGame } from '..';

const isEven = num => num % 2 === 0;

export default () => {
  const data = () => {
    const num = getRandomNum();
    return {
      question: num,
      correctAnswer: isEven(num) ? 'yes' : 'no',
    };
  };
  generateGame('even', data);
};
