import readlineSync from 'readline-sync';
import runGame from '../index.js';

export const brainCalc = () => {
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const description = 'What is the result of the expression?';

const generateRoundData = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  let answer;
  switch (operator) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      break;
  }

  return {
    question: `${number1} ${operator} ${number2}`,
    answer: String(answer),
  };
};

const brainCalc = () => {
  runEngine(description, generateRoundData);
};

export default brainCalc;
}
