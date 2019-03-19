import { getRandomNum, generateGame } from '..';

const isEven = num => num % 2 === 0;

export default () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  const data = () => {
    const num = getRandomNum();
    return {
      question: num,
      correctAnswer: isEven(num) ? 'yes' : 'no',
    };
  };
  generateGame(rules, data);
};
