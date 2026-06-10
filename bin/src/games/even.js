import readlineSync from 'readline-sync';
import runGame from '../index.js';

export const brainEven = () => {
 console.log('Answer "yes" if the number is even, otherwise answer "no".');
 
  const roundsCount = 3;
 
   for (let i = 0; i < roundsCount; i += 1) {
     const number = Math.floor(Math.random() * 100);
     const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
 
 
     console.log('Question:' + number);
     const userAnswer = readlineSync.question('Your answer: ');
 
     if (userAnswer === correctAnswer) {
       console.log('Correct!');
     } else {
       console.log(userName + 'is wrong answer ;(. Correct answer was' + correctAnswer);
       console.log('Let`s try again', + userName + '!');
       return;
     }
   }
 
   console.log('Congratulations,' + userName + '!');
 };
 
brainEven();

