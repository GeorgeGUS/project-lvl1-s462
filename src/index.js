import readlineSync from 'readline-sync';

const numOfQuestions = 3;

export default (description, generateData) => {
  console.log('Welcome to the Brain Games!');
  if (description) {
    console.log(description);
  }
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  if (!generateData) {
    return;
  }
  for (let i = 0; i < numOfQuestions; i += 1) {
    const { question, correctAnswer } = generateData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === `${correctAnswer}`) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};
