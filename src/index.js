import readlineSync from 'readline-sync';

const numOfQuestions = 3;
const gameRules = {
  even: 'Answer "yes" if number even otherwise answer "no".',
  calc: 'What is the result of the expression?',
};

export const getRandomNum = (min = 0, max = 100) => Math.round(Math.random() * (max - min)) + min;
export const isEven = num => num % 2 === 0;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const getUsername = () => {
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

export const generateGame = (gameName, generateData) => {
  greeting();
  console.log(gameRules[gameName]);
  const username = getUsername();

  for (let i = 0; i < numOfQuestions; i += 1) {
    const { question, correctAnswer } = generateData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`,
      );
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};
