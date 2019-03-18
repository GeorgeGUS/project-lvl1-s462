import readlineSync from "readline-sync";

export const greeting = () => {
  const username = readlineSync.question("\nMay I have your name? ");
  console.log(`Hello, ${username}!`);
};
