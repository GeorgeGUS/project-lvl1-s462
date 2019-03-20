import { getRandomNum } from '../utils';
import generateGame from '..';

const progLength = 10;

const generateProgression = () => {
  const startNum = getRandomNum(1, 10);
  const progStep = getRandomNum(1, 10);
  const progression = [];
  for (let i = 0, num = startNum; i < progLength; i += 1, num += progStep) {
    progression.push(num);
  }
  return progression;
};

const description = 'What number is missing in the progression?';
const generateData = () => {
  const progression = generateProgression();
  const questionIndex = getRandomNum(0, progLength - 1);
  const correctAnswer = progression.splice(questionIndex, 1, '..');
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => generateGame(description, generateData);
