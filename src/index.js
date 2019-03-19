import readlineSync from 'readline-sync';

const maxRandomNumber = 100;
const numOfQuestions = 3;
const gameRules = {
  even: 'Answer "yes" if number even otherwise answer "no".',
  calc: 'What is the result of the expression?',
};

const getRandomNum = () => Math.round(Math.random() * maxRandomNumber);
const isEven = num => num % 2 === 0;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getUsername = () => {
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

const generateGame = (rules, getQuestion, getCorrectAnswer) => {
  greeting();
  console.log(rules);
  const username = getUsername();

  for (let i = 0; i < numOfQuestions; i += 1) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);
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

export const startGame = () => {
  greeting();
  getUsername();
};

export const guessEven = () => {
  const question = () => getRandomNum();
  const correctAnswer = q => (isEven(q) ? 'yes' : 'no');

  generateGame(gameRules.even, question, correctAnswer);
};
