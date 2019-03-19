import { getRandomNum, isEven, generateGame } from '..';

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
