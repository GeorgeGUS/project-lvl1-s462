import readlineSync from 'readline-sync';

export default () => {
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!`);
};
