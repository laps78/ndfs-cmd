#!/usr/bin/env node
import DateApp from "./src/DateApp.mjs"

const args = process.argv.slice(2);
const app = new DateApp(args);
app.printDateAsIs(app.date);