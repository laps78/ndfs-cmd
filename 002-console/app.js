#!/usr/bin/env node
import DateApp from "./src/DateApp.mjs"
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// service values
const  day24h_MS = 24 * 60 * 60 * 1000;

// define commands
const argv = yargs(hideBin(process.argv))
  .usage('Usage: cmd <command> [option]')
  .command({
    command: 'current',
    desc: 'Текущая дата и время в формате ISO',
    builder: () => { },
    handler: (argv) => {
      const date = new Date();
      const app = new DateApp(date);
      if (argv._[0] === 'current' 
        && !argv.d 
        && !argv.date 
        && !argv.y 
        && !argv.year
        && !argv.m
        && !argv.month) {
        app.printDateISO(date);
      }
      // parse opts
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
      const now = new Date();
      // parse opts
      if (argv.y) {
        const targetDate = new Date(now.setFullYear(now.getFullYear() + argv.y));
        const app = new DateApp(targetDate);
        app.printDateISO(app.date);
      };
      if (argv.m) {
        const targetDate = new Date(now.setMonth(now.getMonth() + argv.m));
        const app = new DateApp(targetDate);
        app.printDateISO(app.date);
      }
      if (argv.d) {
        const nowTimeStamp = new Date().valueOf()
        const targetDate = new Date(nowTimeStamp + (day24h_MS * argv.d));
        const app = new DateApp(targetDate);
        app.printDateISO(app.date);
      }
    }
  })
  .command({
    command: 'sub', 
    desc: 'Дата в прошлом',
    builder: () => {},
    handler: (argv) => {
      const now = new Date();
      // parse opts
      if (argv.y) {
        const targetDate = new Date(now.setYear(now.getFullYear() - argv.y));
        const app = new DateApp(targetDate);
        app.printDateISO(app.date);
      }
      if (argv.m) {
        const targetDate = new Date(now.setMonth(now.getMonth() - argv.m));
        const app = new DateApp(targetDate);
        app.printDateISO(app.date);
      }
      if (argv.d) {
        const nowTimeStamp = new Date().valueOf();
        const targetDate = new Date(nowTimeStamp - (day24h_MS * argv.d));
        const app = new DateApp(targetDate);
        app.printDateISO(app.date);
      }
    }
  })
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
