/* eslint-disable import/prefer-default-export */
export const getRandomNum = (min = 0, max = 100) => Math.round(Math.random() * (max - min)) + min;
