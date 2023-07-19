const arr = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "+",
  "0",
  "-",
  "*",
  "/",
  "=",
  "AC",
  "C",
];

const buttons = document.querySelectorAll(".button");

const screen = document.querySelector(".monitor");

let i = 0;
buttons.forEach((button) => {
  // присваиваем кнопкам значения из массива
  button.innerHTML = arr[i++];

  // вешаем клик на каждую кнопку и выводим на экран
  button.addEventListener("click", () => {
    let equal = button.innerHTML;

    // когда на экране уже есть результат - сначала всё затираем
    if (screen.innerHTML.includes(`=`)) {
      screen.innerHTML = null;
    }

    // добавляем один символ, если цифра, если оператор - то с пробелами
    if (equal === "=" || equal === "AC" || equal === "C") {
      return equal;
    } else if (
      equal === "-" ||
      equal === "+" ||
      equal === "*" ||
      equal === "/"
    ) {
      let string = screen.innerHTML;
      let lastCharacter = string.charAt(string.length - 1);
      if (lastCharacter == " ") {
        alert("Некорректная операция!");
        return;
      }
      screen.append(` ${equal} `);
    } else {
      screen.append(`${equal}`);
    }
  });
});

// вывод результата действия

const result = document.querySelector(".result");

result.addEventListener("click", () => {
  let string = screen.innerHTML;
  screen.append(` = ${eval(string)}`);
});

// сброс всего поля
const erase = document.querySelector(".erase");

erase.addEventListener("click", () => {
  screen.innerHTML = null;
});

// удаление последнего символа

const eraseLast = document.querySelector(".last");

eraseLast.addEventListener("click", () => {
  let string = screen.innerHTML;
  let lastCharacter = string.charAt(string.length - 1);

  if (lastCharacter == " ") {
    screen.innerHTML = string.slice(0, -3);
  } else {
    screen.innerHTML = string.slice(0, -1);
  }
});
