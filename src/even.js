import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

// Получаем остаток от деления на 2 и сравниваем с 0
const isEven = (number) => number % 2 === 0;

const startRound = () => {
  const number = generateRandomNumber(0, 100); // Генерируем случайное число
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer:'); // Задаем пользователю вопрос
  const correctAnswer = isEven(number) ? 'yes' : 'no'; // Вычисляем правильный ответ
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true; // Возвращаем результат проверки
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false; // Возвращаем результат проверки
};

const startGame = () => {
  const numberOfRounds = 3; // Количество раундов
  for (let i = 0; i < numberOfRounds; i += 1) { // Цикл, идущий от 0 до 2 включительно
    const result = startRound(); // Запускаем раунд и получаем в ответ правильный ли ответ
    if (result === false) { // Если ответ неправильный
      return; // заканчиваем игру
    }
  }
  console.log(`Congratulations, ${userName}!`); // Если дошли до сюда, значит правильно ответили на все вопросы и выиграли
};

startGame();
