// =====================================================================
//
//                       MODULE-4: CALLBACK, ARRAY.methods
//
// =====================================================================

// // 1. Створи функцію, яка проводить пошук обєкта в масиві по id та виводить його в консоль.
//
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// const foo = (id) => {};

//++++++++++++++++++++++++++++++++++++++++++
// const find = (id) => users.find((user) => user.id === id);
// console.log(find(2)); // {id: 2, name: "Pete"}

// // ----------------------------------------------------------------
// // 2. Виведи в консоль стрічку слідуючого типу: "Имя - позиция в массиве Х и сам массив"
//
// const robots = ["Bender", "Awesom-O", "Johnny 5"];

// //----------------------------------------------------------------

// // 3. Напиши ф-цію positiveSum, яка приймає масив чисел та повертає їх суму.
// // Але рахуватись мають лише позитивні числа!!!

// const positiveSum = (arr) => {};

// positiveSum([2, 4, 6, 8]); // 20
// positiveSum([0, -3, 5, 7]); // 12

// //----------------------------------------------------------------

// // 4. Відсортуй обєкти по збільшеню та зменшеню score
//
// const users = [
//   { name: "Victor", score: 20 },
//   { name: "Mario", score: 10 },
//   { name: "Tatiana", score: 30 },
// ];

// console.log(usersSortedByScoreDesc); // [{name: "Tatiana", score: 30}, {name: "Victor", score: 20}, {name: "Mario", score: 10}]
// console.log(usersSortedByScoreAsc); // [{name: "Mario", score: 10}, {name: "Victor", score: 20}, {name: "Tatiana", score: 30}]

// // //----------------------------------------------------------------

// // 5. Напиши ф-цію, яка фільтрує масив та повертає елементи, окрім того, що був переданий в дану функцію в якості аргумента.
//
// const animals = ["pigs", "goats", "sheep"];
//
// foo("pigs"); // ["goats", "sheep"]

// // //----------------------------------------------------------------
// // 6. Створи функції, які:
// // - знайдуть обєкт по найкращим score.
// // - виведуть масив всіх score.
// // - виведуть суму всіх score.
//
// const users = [
//   { name: "Victor", score: 20 },
//   { name: "Mario", score: 10 },
//   { name: "Tatiana", score: 30 },
// ];

// foo1(); // { name: "Tatiana", score: 30 }
// foo2(); // [20, 10, 30]
// foo3(); // 60

// //----------------------------------------------------------------

// // 7. Напишите две функции:
// // - letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает callback функцию
// // - greet(name) - коллбек, принимающий имя и логирующий в консоль строку "Привет <name>"
// // Реализуй проверку, что prompt не пустой

// letMeSeeYourName(greet); // Привет <name>

//++++++++++++++++++++++++++++++++++++++++++

// function letMeSeeYourName(callback) {
//   const name = prompt("What is your name?");
//   if (!name) return;

//   callback(name);
// }
// const greet = (name) => console.log(`Привет ${name}`);
// letMeSeeYourName(greet);

// //------------------------------------------------------------------------------------
// // 8. Напишите две функции:
// // - makeProduct(name, price, callback) - принимает имя и цену товара, а так же callback.
// // Функция создает объект товара, добавляя ему уникальный id в свойство id и вызывает callback,
// // передавая ему созданный объект.
// // - showProduct(product) - коллбек, принимающий объект продукта и логирующий его в консоль

// function makeProduct(name, price, callback) {}
// function showProduct(product) {}

// makeProduct("Fish", 350, showProduct);

//++++++++++++++++++++++++++++++++++++++++++

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Math.random(),
//   };
//   //   product.id = Math.random();
//   //   product.id = new Date();
//   return callback(product);
// }
// const showProduct = (product) => product;

// makeProduct("Fish", 350, showProduct);

// //------------------------------------------------------------------------------------

// // 9. Выполни рефакторинг makeDish так, чтобы не нужно было каждый раз передавать имя шефа.
// // Напишите функцию makeShef(shefName), которая возвращает функцию makeDish(dish), помнящую имя шефа при её вызове

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");
//++++++++++++++++++++++++++++++++++++++++++

// const makeShef = function (name) {
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef("Mango");
// mango("apple pie"); // Mango is cooking apple pie
// // mango("beef stew"); // Mango is cooking beef stew

// const poly = makeShef("Poly");
// poly("pancakes"); // Poly is cooking pancakes
// // poly("eggs and bacon"); // Poly is cooking eggs and bacon

// //------------------------------------------------------------------------------------

// // 10. Напишите функцию each(array, callback), которая первым параметром принимает массив, а вторым - функцию,
// // которая применится к каждому элементу массива.
// // Функция each должна вернуть новый массив, элементами которого будут результаты вызова callback
// // callback функци должна умножать элементы на 2

// const array = [3, 5, 6, 34, 8, 83, 12, 34];
//
// function each(array, callback) { };

//++++++++++++++++++++++++++++++++++++++++++
// function each(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callback(array[i]));
//   }
//   return newArray;
// }

// const array = [3, 5, 6, 34, 8, 83, 12, 34];
// console.log(each(array, (value) => value * 2));

// //------------------------------------------------------------------------------------

// // 11. Напишите функцию makeCounter, которая возвращает другую функцию,
// // которая считает и логирует количество своих вызовов

// function makeCounter() {}

// console.log(counter());
// console.log(counter());
// console.log(counter());

//++++++++++++++++++++++++++++++++++++++++++
// function makeCounter() {
//   let counter = 0;
//   return () => (counter += 1);
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// //------------------------------------------------------------------------------------

// // 12. Напишите функцию savePassword(password) которая принимает
// // пароль и возвращает внутреннюю функцию, которая принимает
// // строку и возвращает буль true, если строка совпадает с сохраненным
// // паролем и false - если не совпадает

// const savePassword = (password) => { };
// console.log(foo("qwerty")); // true or false

//++++++++++++++++++++++++++++++++++++++++++
// const savePassword = (password) => (ourPassword) => password === ourPassword;
// const standartPassword = savePassword("qwerty");

// console.log(standartPassword("qwerty"));

// console.log(savePassword("wuerty")("wueerty"));

// // =====================================================================================

// // 13. Напиши ф-цію letterCount, яка приймає два аргументи: слово та літеру
//  // і рахує скільки разів дана літера зустрічається у слові.
// // Якщо перший аргумент пуста строка - повератє 0ю

// const letterCount = (word, letter) => {};

// letterCount("Maggy", "g"); // => 2;
// letterCount("Barry", "b"); // => 1;
// letterCount("", "v"); // => 0;

// // =====================================================================================

// // 14.
//  //
