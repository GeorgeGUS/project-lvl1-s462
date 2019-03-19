import readlineSync from 'readline-sync';

const numOfQuestions = 3;

export const getRandomNum = (min = 0, max = 100) => Math.round(Math.random() * (max - min)) + min;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const getUsername = () => {
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

export const generateGame = (gameRules, generateData) => {
  greeting();
  console.log(gameRules);
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
