import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const getUsername = () => {
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

export const guessEven = (username) => {
  const MAX_NUMBER = 100;
  let QUESTION_COUNT = 3;

  while (QUESTION_COUNT > 0) {
    const question = Math.round(Math.random() * MAX_NUMBER);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      QUESTION_COUNT -= 1;
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${username}!`,
      );
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};
