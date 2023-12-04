import terminalIO from "src/terminalIO";

// init values
const maxNumber =100;
const solved = false;
const try = 0;
const write = (str) => console.log(str);
const number = Math.floor(Math.random() * maxNumber);

write('Угадайте число от 0 до ' + maxNumber + ' за как можно меньшее колтчество попыток. Число?');

termiinalIO.on('line', (msg) => {
  if (Number(msg) > number) {
    try += 1;
    write("меньше!");
  };
  if (Number(msg) < number) {
    try += 1;
    write("больше!");
  };
  if (Number(msg) === number) {
    try += 1;
    write('Точно! Ответ ' + number + '. Вам потребовалось ' + try + ' попыток.');
  };
  write('Вы ввели что-то не то.')
})
