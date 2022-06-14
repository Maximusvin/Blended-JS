// =====================================================================
//
///                          MODULE-3: OBJECT
//
// =====================================================================

//                                PART-1

// Создание обьекта
// const obj = {};
// console.log(obj);

// const obj2 = new Object();
// console.log(obj2);

// const obj3 = Object.create({});
// console.log(obj3);

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// Копирование обьекта
// const obj = { name: "Andrew", age: 29 };
// const obj2 = obj;
// obj2.name = "James Bond";

// console.log(obj.name); // ?
// console.log(obj2.name); // ?

// const obj = { name: "Andrew", age: 29 };
// const obj2 = {};

// for (let key in obj) {
//   obj2[key] = obj[key];
// }

// obj2.name = "James Bond";

// console.log(obj.name); // ?
// console.log(obj2.name); // ?

// const obj = { name: "Andrew", age: 29 };
// const obj2 = { ...obj, name: "James Bond" };

// console.log(obj.name); // ?
// console.log(obj2.name); // ?

// const obj = { name: "Andrew", age: 29, favoriteBrands: ["Nissan", "Apple", "Sony"] };
// const obj2 = JSON.parse(JSON.stringify(obj));
// obj2.name = "James Bond";

// console.log(obj.name); // ?
// console.log(obj2.name); // ?

// const obj = { name: "Andrew", age: 29 };
// const obj3 = {name: '123'}

// const obj2 = Object.assign(obj3, obj);

// console.log(obj); // ?
// console.log(obj3); // ?

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// Проверка свойств Обьекта
const person = {
  name: "",
  age: 29,
  hobbies: null,
};

// console.log("name" in person);

// person.hobbies = null;

// console.log("name" in person);
// console.log(person);

// console.log(person.hasOwnProperty("name") && !!person.name);

// ------
// console.log("toString" in person);
// console.log(person.__proto__.toString);
// console.log(person);

// const obj = Object.create(null);
// obj.name = "Andrew";
// obj.age = 29;

// console.log("toString" in obj);
// console.log(obj);

// =====================================================================
//
//                                PART - 2
//
// =====================================================================

// 1. Напиши скрипт, який для обєкта user, послідовно:
// - добавить поле mood зі значеням 'happy'.
// - замінить hobby на 'skydiving'.
// - замінить значення "premium" на false.
// - виведе вміст обєкта users в форматі ключ:значение використовуючи Object.keys() и for...of.

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

//************************
//for(const key of Object.keys(obj)){
//  console.log(`${key}:${obj[key]}`)
//}

// ==================================================================================

// 2. У нас есть объект, в котором храняться зарплаты команды.
// Напишите код для сумирования всех зарплат и сохраните его результат в переменной sum.
// Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

//=======================
//for(const value of Object.values(obj)){
//  total += value
//}
//=======================

// ==================================================================================

// 3. Напишите ф-цию calcTotalPrice(stones, stonesName), которая принимает массив объектов и
// строку с названием камня. Функция считает и возвращает общую стоимость камней
// с таким именем, ценой и количеством из объекта

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

//=======================
// function calcTotalPrices (stones, stoneName) {
//   for (const stone of stones) {
//     if (stone["name"] === stoneName) {
//       return stone["price"] * stone["quantity"]
//     }
//   }
// }

// ==================================================================================

// 4. Создайте объект calculator с тремя методами:
// - read(a, b) - принимает два аргумента и сохраняет их как свойства объекта.
// - sum() - возвращает сумму сохраненных значений.
// - mult() - переумножает сохраненные значения и возвращает результат.

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   mult() {},
// };

//=======================
// const calculator = {
//   read(a, b) {
//     this.val1 = a;
//     this.val2 = b;
//   },
//   sum() {
//     return !this.val1 || !this.val2 ? false : this.val1 + this.val2;
//   },
//   mult() {},
// };

// ==================================================================================

// // 5. Об'єднати два обєкти між собою:
//
// const users = [
//   { name: "Victor", score: 20 },
//   { name: "Mario", score: 10 },
//   { name: "Tatiana", score: 30 },
// ];

// const moreUsers = [
//   { name: "Laura", score: 50 },
//   { name: "Jasmine", score: 70 },
//   { name: "Peter", score: 60 },
// ];

// console.log(allUsers); // [{name: "Victor", score: 20}, {name: "Mario", score: 10}, {name: "Tatiana", score: 30}, {name: "Laura", score: 50}, {name: "Jasmine", score: 70}, {name: "Peter", score: 60}]
