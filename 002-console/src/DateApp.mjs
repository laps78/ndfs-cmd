export class DateApp {
  constructor(args) {
    this.date = new Date();
    this.args = args;
  }

  ptintHours(date) {
    const res = date.getHours();
    console.log(res);
  }

  printYear(date) {
    const res = date.getFullYear();
    console.log(res);
  }

  printDateAsIs(date) {
    console.log("Текущая дата и время в формате ISO:\n", date);
  }
}

export default DateApp;
