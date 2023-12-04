#!/usr/bin/env node
import DateApp from "./src/DateApp.mjs"
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .usage('Usage: cmd <command> [option]')
  .command({
    command: 'current',
    desc: 'Текущая дата и время в формате ISO',
    builder: () => { },
    handler: (argv) => {
      const date = new Date();
      const app = new DateApp(date);
      // parse options
      if (argv.m || argv.month) {
        app.printMonth(app.date);
        return 1;
      }
      if (argv.d || argv.date) {
        app.printDay(app.date);
      }
      if (argv.y || argv.year) {
        app.printYear(app.date)
      }
    }
  })
  .command({
    command: 'add',
    desc: 'Дата в будущем',
    builder: () => { },
    handler: (argv) => {
      console.log(argv)
      if (argv.y) {
        const now = new Date();
        const targetDate = new Date(now.setFullYear(now.getFullYear() + argv.y));
        console.log(typeof targetDate)
        const app = new DateApp(targetDate);
        app.printDateISO(targetDate);
      }
    }
  })
  .command('sub', 'Дата в прошлом')
  .option('date', {
    alias: 'd',
    description: 'Дата в календарном месяце'
  })
  .option('year', {
    alias: 'y',
    description: 'Текущий год'
  })
  .option('month', {
    alias: 'm',
    description: 'Текущий месяц'
  })
  .argv
