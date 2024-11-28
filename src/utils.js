export const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

export const randomPick = (array) => {
  return array[getRandomNumber(array.length)];
};
