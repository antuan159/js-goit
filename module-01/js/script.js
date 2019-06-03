'use strict';

const ADMIN_PASSWORD = '123';
let message = prompt('Enter your password');

if (message == null) {
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

let count = prompt('Enter quantity to buy ');

if (count == null) {
  console.log('Отменено пользователем!');
} else if (!isFinite(count)) {
  console.log('no number entered');
} else {
  let totalPrice = count * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      'Вы купили ' +
        count +
        ' дроидов, на счету осталось ' +
        (credits - totalPrice) +
        ' кредитов.',
    );
  }
}

// delivery
let country = prompt('Enter your country');
if (country == null) {
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
    console.log(
      `Доставка в ${countryDelivery} будет стоить ${credits} кредитов`,
    );
  }
}
