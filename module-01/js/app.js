'use strict';

const ADMIN_PASSWORD = '123';
let message = prompt('Enter your password');

if (!message) {
  message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === message) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

// droids
let credits = 23580;
const pricePerDroid = 3000;
let test = 'Вы купили 1 дроидов, на счету осталось 20580 кредитов.';

let count = prompt('Введите число роботов для покупки');

if (!count) {
  console.log('Отменено пользователем!');
} else if (Number.isInteger(count)) {
  console.log('введено не числовое значение');
} else {
  let totalPrice = count * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    let result =
      'Вы купили ' +
      count +
      ' дроидов, на счету осталось ' +
      (credits - totalPrice) +
      ' кредитов.';
    console.assert(test === result, `Error!!`);
    console.log(result);
  }
}

// delivery
test = 'Доставка в Китай будет стоить 100 кредитов';
let country = prompt('Введите страну доставки');
if (!country) {
  console.log('Отменено пользователем!');
} else {
  let countryDelivery = country.toLocaleLowerCase();
  let credits = 0;

  switch (countryDelivery) {
    case 'китай':
      credits = 100;
      break;
    case 'южная америка':
      credits = 250;
      break;
    case 'австралия':
      credits = 170;
      break;
    case 'индия':
      credits = 80;
      break;
    case 'ямайка':
      credits = 120;
      break;
    default:
      console.log('В вашей стране доставка не доступна');
      break;
  }
  if (credits != 0) {
    let country = countryDelivery[0].toUpperCase() + countryDelivery.slice(1);
    let tmp = `Доставка в ${country} будет стоить ${credits} кредитов`;
    console.assert(test === tmp, 'Error');
    console.log(tmp);
  }
}
