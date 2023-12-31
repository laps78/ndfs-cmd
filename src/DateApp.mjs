export class DateApp {
  constructor(date = new Date()) {
    this.date = date;
  }

  printDay(date) {
    const res = date.getDate();
    console.log('Дата в календарном месяце: ', res);
  }

  printMonth(date) {
    const res = date.getMonth() + 1;
    console.log('Месяц: ', res);
  }

  printYear(date) {
    const res = date.getFullYear();
    console.log('Год: ', res);
  }

  printDateISO(date) {
    console.log("Дата и время в формате ISO: ", date);
  }
}

export default DateApp;
