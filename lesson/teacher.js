// let result = " ";

// const output = document.createElement("input");
// output.value = result;

// output.disabled = true;
// output.classList.add("inp");

// const btnsWrapper = document.createElement("div");
// const wrapper = document.createElement("div");

// wrapper.append(output, btnsWrapper);
// document.body.append(wrapper);

// const arr = [
//   "7",
//   "8",
//   "9",
//   "4",
//   "5",
//   "6",
//   "1",
//   "2",
//   "3",
//   "+",
//   "0",
//   "-",
//   "*",
//   "/",
//   "=",
//   "AC",
//   "C",
// ];

// // передаём event, тк функция срабатывает на клик
// const getNum = (event) => {
//   let num = event.target.value; // получаем значение с каждой кнопки
//   if (num === "AC") {
//     result = "";
//   } else if (num === "C") {
//     result = result.substring(0, result.length - 1);
//   } else if (num === "=") {
//     result = `${eval(result)}`;
//   } else {
//     result += num; // конкатенация строки на мониторе
//   }
//   output.value = result;
// };

// // создаем элементы кнопок в html, присваиваем им инфу из массива
// arr.forEach((el) => {
//   const btn = document.createElement("input");
//   btn.type = "button";
//   btn.value = el;
//   btnsWrapper.append(btn);
//   btn.addEventListener("click", getNum);
// });

// получаем Event в колбеке

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

// --------- СЛОВАРЬ ----------//

// создаем все элементы дома

const eng = document.querySelector("#eng");
const rus = document.querySelector("#rus");
const buttonAdd = document.querySelector("#addWord");

const buttonTest = document.querySelector("#btnTest");

const testModal = document.querySelector(".testModal");
// скрываем нижний блок теста
testModal.style = `display:none;`;

const h2 = document.querySelector("h2");
const answer = document.querySelector("#answer");
const check = document.querySelector("#check");
const point = document.querySelector("#point");

const dictionary = {
  apple: "яблоко",
  pear: "груша",
  orange: "апельсин",
  apricot: "абрикос",
  peach: "персик",
};

let dictLength = Object.keys(dictionary).length;
// console.log(dictLength);

let count = 0;
let i = 0;
const arrEng = [];
const arrRus = [];

buttonAdd.addEventListener("click", () => {
  if (!eng.value || !rus.value) {
    alert("Введите слово!");
    return; // или прописать через else
  }
  dictionary[eng.value] = rus.value;
  dictLength = Object.keys(dictionary).length;
  alert("Слова добавлены");
  addPoint(); // чтоб автоматом обновлялась длина массива после добавления слова
  eng.value = "";
  rus.value = "";

  console.log(dictionary);
});

// передаем актуальную длину массива и слово с нем

const addPoint = () => {
  point.innerHTML = `${count} / ${dictLength}`;
};

const test = () => {
  testModal.style = `display:block;`;
  dictLength = Object.keys(dictionary).length;
  count = 0;
  i = 0;
  for (let key in dictionary) {
    arrEng.push(key); //добавляем ключи
    arrRus.push(dictionary[key]); // добавляем значения
  }
  addQuestion();
  addPoint();
  // console.log(arrEng, arrRus); //выводим массив английских слов и массив русских слов
};
buttonTest.addEventListener("click", test);

// передаём в h2 первое слово из словаря

const addQuestion = () => {
  h2.innerHTML = arrEng[i];
};

const checkWord = () => {
  if (answer.value === arrRus[i]) {
    alert("Super!");
    count++;
  } else {
    alert(" Try again!");
  }
  i++; // не важно колрректен ли ответ
  //инструкция, когда доходим до конца словаря - выводим разельтат и всё обновляем
  if (arrEng.length <= i) {
    alert(`Твой результат ${count}/ ${arrEng.length}`);
    count = 0;
    i = 0;
  }
  addQuestion(); // чтоб перезаписать слово в h2
  addPoint(); // перезапись в html количество слов угаданных
  answer.value = "";
};

check.addEventListener("click", checkWord);
