"use strict";
// =====================================================================
//
//                       MODULE-5: CONTEXT
//
// =====================================================================

//                                PART-1

// Разница между call aplly bind ?

// --------------------------------------------------------------

// function User(name = "User", age = 18) {
//   this.name = name;
//   this.age = age;
//   this.isAdmin = false;
// }

// User.prototype.sayYourRights = function () {
//   console.log(this.isAdmin);
// };

// const user = new User("Andrew", 29, ["Bike", "JS"]);
// const admin = Object.create(new User("Admin", 29));
// admin.isAdmin = true;

// console.log("User: ", user); // ?
// console.log("Admin: ", admin); // ?

// =============================================================================

//                           PART - 2;

// =============================================================================

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

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get getClientData() {
    return {
      login: this.#login,
      email: this.#email,
    };
  }

  set changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const client = new Client("mango", "mango@gmail.com");
client.changeEmail = '"mango@gmail.com"';
// console.log(client.getClientData.email);
