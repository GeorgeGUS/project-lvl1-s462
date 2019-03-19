import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const getUsername = () => {
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

const maxRandomNumber = 100;
const numOfQuestions = 3;

const isEven = num => num % 2 === 0;

export const guessEven = () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const username = getUsername();

  for (let i = 0; i < numOfQuestions; i += 1) {
    const question = Math.round(Math.random() * maxRandomNumber);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
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
