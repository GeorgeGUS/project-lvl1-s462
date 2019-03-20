import { getRandomNum } from '../utils';
import generateGame from '..';

const progressionLength = 10;

const generateProgression = () => {
  const startNum = getRandomNum(1, 10);
  const progStep = getRandomNum(1, 10);
  const progression = [];
  for (let i = 0, num = startNum; i < progressionLength; i += 1, num += progStep) {
    progression.push(num);
  }
  return progression;
};

const description = 'What number is missing in the progression?';
const generateData = () => {
  const progression = generateProgression();
  const questPos = getRandomNum(0, progressionLength - 1);
  const correctAnswer = progression.splice(questPos, 1, '..');
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => {
  generateGame(description, generateData);
};
