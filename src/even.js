import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const isEven = (number) => number % 2 === 0;

const startRound = () => {
  const number = generateRandomNumber(0, 100);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer:');
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
};

const startGame = () => {
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const result = startRound();
    if (result === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
