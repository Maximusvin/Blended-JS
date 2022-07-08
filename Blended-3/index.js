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
// // 2. Виведи в консоль стрічку для кожного єлемента масива слідуючого типу: "Имя - позиция в массиве Х и сам массив"
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

// console.log(usersSortedByScoreAsc(users));   // [{name: "Tatiana", score: 30}, {name: "Victor", score: 20}, {name: "Mario", score: 10}]
// console.log(usersSortedByScoreDesc(users));  // [{name: "Mario", score: 10}, {name: "Victor", score: 20}, {name: "Tatiana", score: 30}]

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

// ========================================================

// =====================================================================
//
//                       MODULE-5: CONTEXT
//
// =====================================================================

// Разница между call aplly bind ?

// --------------------------------------------------------------

// ================================================================================
//                                  ЗАДАЧІ
// ================================================================================

// // 1. Исправьте ошибки, чтобы код работал

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(price);
//   },
// };

// product.showPrice();

// =============================================================================

// // 2. Поправити код

// const inventory = {
//   items: ["Knife", "Gas mask"],

//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },

//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// =============================================================================

// 3. Напиши функцию конструктор User для создания пользователя со следующими свойствами
// a. userName - имя, строка
// b. age - возраст, число
// c. numbersOfPost - количество постов, число
// Класс ожидает 1 параметр - объект настроек с одноименными свойствами

// Добавь метод getInfo(), который возвращает строку: `Пользователю ${} ${} лет и у него ${} публикаций.`

// const User = function (userObj) {
//   console.log("🐱‍👤👀: User -> typeof this", typeof this);
// };

//++++++++++++++++++++++++++++++++++++++++++

const User = function (userObj) {
  const { userName, age, numbersOfPost } = userObj;

  console.log("🐱‍👤👀: User -> typeof this", typeof this);
  this.username = userName;
  this.age = age;
  this.numbersOfPost = numbersOfPost;

  //   this.getInfo = function () {
  //     console.log(
  //       `Пользователю ${this.username} ${this.age} лет и у него ${this.numbersOfPost} публикаций.`
  //     );
  //   };
};

User.prototype.getInfo = function () {
  console.log(
    `Пользователю ${this.username} ${this.age} лет и у него ${this.numbersOfPost} публикаций.`
  );
};

const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });

console.log(polly);
polly.getInfo();

// =============================================================================

// 4. Напиши функцию конструктор Storage который создаёт объкты для управления складом товаров.
// При вызове будет получать один агрумент - начальный массив товаров, и записывать его в свойство items.
// Добавь методы класса:
// getItems() - возвращайте массив товаров
// addItems(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - плучает товар и, если он есть, удаляет его из текущих

// const products = ["apple", "banana", "mango"];
// const Storage = function (itemsArray) {};

//++++++++++++++++++++++++++++++++++++++++++

const Storage = function (itemsArray) {
  this.items = itemsArray;
};

Storage.prototype.getItem = function () {
  return this.items;
};

Storage.prototype.addItems = function (item) {
  return this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);
  if (index !== -1) this.items.splice(index, 1);
  return this.items;
};

const storage = new Storage(["apple", "banana", "mango"]);
console.log(storage);
console.log(storage.removeItem("apple"));

// =============================================================================

// 3. Напиши класс Client котрорый создает объект со свойствами login и email
// Объяви приватные свойства #login #email,
// доступ к которым сделай через геттер и сеттер login email

//++++++++++++++++++++++++++++++++++++++++++

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get getClientData() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     };
//   }

//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client("mango", "mango@gmail.com");
// client.changeEmail = '"mango@gmail.com"';
// console.log(client.getClientData.email);
