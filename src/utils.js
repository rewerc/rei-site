export const getRandomNumber = (max, exception = null) => {
  const result = Math.floor(Math.random() * max);
  if (exception === null || result !== exception) {
    return result;
  } else {
    return getRandomNumber(max, exception);
  }
};

export const randomPick = (array) => {
  return array[getRandomNumber(array.length)];
};
