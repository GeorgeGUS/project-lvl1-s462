export const getRandomNum = (min, max) => Math.round(Math.random() * (max - min)) + min;

export const generateDataByFunction = (fn) => {
  const question = getRandomNum(0, 100);
  const correctAnswer = fn(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
