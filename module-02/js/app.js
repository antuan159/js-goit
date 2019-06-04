let input;
const numbers = [];
let total = 0;
const test = 'Общая сумма чисел равна 3';

for (;;) {
  input = prompt('Введите число');
  if (input === null) {
    break;
  }
  if (!Number.isInteger(+input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(+input);
}

for (const iterator of numbers) {
  total += iterator;
}

const rezault = `Общая сумма чисел равна ${total}`;

console.assert(test === rezault, 'error');
console.log(rezault);
