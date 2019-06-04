const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let tmp;
do {
  tmp = prompt('Введите пароль');
  if (tmp === null) {
    alert('Отмененно пользователем');
    break;
  }
  if (passwords.indexOf(tmp) !== -1) {
    alert('Добро пожаловать');
    break;
  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    } else {
      alert('У вас закончились попытки, аккаунт заблокирован!');
      break;
    }
  }
} while (true);
