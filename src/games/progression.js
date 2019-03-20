import { getRandomNum } from '../utils';
import generateGame from '..';

const length = 10;

const generateProgression = () => {
  const start = getRandomNum(1, 10);
  const step = getRandomNum(1, 10);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const description = 'What number is missing in the progression?';
const generateData = () => {
  const progression = generateProgression();
  const questionIndex = getRandomNum(0, length - 1);
  const correctAnswer = progression.splice(questionIndex, 1, '..');
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => generateGame(description, generateData);
