import readlineSync from 'readline-sync';

const numOfQuestions = 3;
const gameRules = {
  even: 'Answer "yes" if number even otherwise answer "no".',
  calc: 'What is the result of the expression?',
};

const getRandomNum = (min = 0, max = 100) => Math.round(Math.random() * (max - min)) + min;
const isEven = num => num % 2 === 0;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getUsername = () => {
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

const generateGame = (rules, generateData) => {
  greeting();
  console.log(rules);
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

export const startBrainGames = () => {
  greeting();
  getUsername();
};

export const startBrainEven = () => {
  const data = () => {
    const num = getRandomNum();
    return {
      question: num,
      correctAnswer: isEven(num) ? 'yes' : 'no',
    };
  };
  generateGame(gameRules.even, data);
};

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operators = Object.keys(operations);
const operatorsLastIndex = operators.length - 1;

export const startBrainCalc = () => {
  const data = () => {
    const numA = getRandomNum();
    const numB = getRandomNum();
    const operator = operators[getRandomNum(0, operatorsLastIndex)];
    return {
      question: `${numA} ${operator} ${numB}`,
      correctAnswer: `${operations[operator](numA, numB)}`,
    };
  };
  generateGame(gameRules.calc, data);
};
