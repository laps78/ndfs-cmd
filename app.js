#!/usr/bin/env node
import terminalIO from "./src/terminalIO.mjs";

// init values
const maxNumber = 100;
let solved = false;
let steps = 0;
const write = (str) => console.log(str);
const number = Math.floor(Math.random() * maxNumber);
const greetingMessage = 'Угадайте число от 0 до ' + maxNumber + ' за как можно меньшее колтчество попыток. Число?';

write(greetingMessage);

terminalIO.on('line', (msg) => {
  if (Number(msg) > number) {
    steps += 1;
    write("меньше!");
  };
  if (Number(msg) < number) {
    steps += 1;
    write("больше!");
  };
  if (Number(msg) === number) {
    steps += 1;
    write('Точно! Ответ ' + number + '. Вам потребовалось ' + steps + ' попыток. Для повторного запуска необходимо повторно выполнить команду "guess"');
    solved = true;
    terminalIO.close();
    process.exit();
  };
})
