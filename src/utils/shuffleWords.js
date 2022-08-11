export const shuffleWords = (wordsData) => {
  let data = wordsData.map((word) => {
    return { text: word, completed: false, status: "default" };
  });
  let newData = [...data];
  for (let i = newData.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    [newData[i], newData[randomNumber]] = [newData[randomNumber], newData[i]];
  }
  return newData.map((data, index) => ({ ...data, id: index }));
};
