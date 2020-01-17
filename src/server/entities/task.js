export default class Task {
  static id = 1;

  constructor(user, date, body) {
    Task.id += 1;
    this.user = user;
    this.date = date;
    this.body = body;
  }
}
