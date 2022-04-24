export default class Validator {
  static validateUsername(str) {
    if (str.search(/^[A-Za-z0-9-_]+$/) !== -1) {
      if (str.search(/\d{4,999}/) !== -1) {
        throw new Error('Прочитайте пункт 8.1 пользовательского соглашения: <допустимые паттерны и символы в нике п.2.>');
      } else if (str.search(/^_|^-|^\d/) !== -1) {
        throw new Error('Прочитайте пункт 8.1 пользовательского соглашения: <допустимые паттерны и символы в нике п.3.>');
      } else if (str.search(/_$|-$|\d$/) !== -1) {
        throw new Error('Прочитайте пункт 8.1 пользовательского соглашения: <допустимые паттерны и символы в нике п.4.>');
      } else {
        console.log('Nickname is acceptable!');
      }
    } else {
      throw new Error('Прочитайте пункт 8.1 пользовательского соглашения: <допустимые паттерны и символы в нике п.1.>');
    }
  }
}
