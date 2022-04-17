// =====================================================================
///                        МАСИВИ та ФУНКЦІЇ  ///
// =====================================================================

// 1. Реалізуйте Result
// const a = ['a', 'b', 'c'];
// const b = [1, [2, 3]];
// const c = 0;
// Result = ['a', 'b', 'c', 0, 1, 2, 3];

// =====================================================

// 2. Реалізуйте Result
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// Result = ["a", "b", "c", "a", "b", "c", "g", "h"];

// =====================================================

// 3. Реалізуйте функцію, яка розгладить масив:
// const arr = [1, 2, [3, 4], [5, 6], 7];

// Result = [1, 2, 3, 4, 5, 6, 7];

// =====================================================

// 4. Напиши функцію, яка повертає останній символ стрічки

// function getLastCharacter(input) {
//   return input[input.length - 1];
// }

// console.log(getLastCharacter("321433530")); // 0

// =====================================================

// 5. Реалізуй функцію, яка приймає рядки або числа і повертає масив з протилежним типом даних:
// convert('1', 2, 3, '4') || [1, '2', '3', 4]

// =====================================================

// 6. Напиши функцію, яка приймає рядок text, та повертає масив усіх великих літер, які є в text в такому ж порядку.
// Приклад:
// getCapitals('Ukraine Everywhere') // ['U', 'E']
// getCapitals('UkraiNe EveRywherE') // ['U', 'N', 'E', 'R', 'E']
// getCapitals("1234M5678A9") // ['M', 'A']

// function getCapitals(string) {
//   // write code here

//   const arr = [];

//   Array.from(string.trim()).forEach((letter) => {
//     if (letter === letter.toUpperCase()) {
//       if (isNaN(letter)) {
//         arr.push(letter);
//       }
//     }
//   });

//   console.log(arr);
//   return arr;
// }

// =====================================================
//                ДОДАТКОВО
// =====================================================

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

//=======================
//for(const key of Object.keys(obj)){
//  console.log(`${key}:${obj[key]}`)
//}
//=======================

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
//=======================

// -----------------------------------------------------------------
//                        HomeWork
// -----------------------------------------------------------------

const restaurants = [
  {
    brand: "KFC",
    menu: {
      chicken: 50,
      burger: 50,
    },
    deliveryTime: 60,
  },
  {
    brand: "mcDonalds",
    menu: {
      cola: 25,
      burger: 30,
    },
    deliveryTime: 30,
  },
  {
    brand: "Burger King",
    menu: {
      burgerXXL: 170,
      burger: 70,
    },
    deliveryTime: 20,
  },
];

const services = {
  showMenu() {},
  getMenu() {},
  addOrder() {},
  confirmOrder() {},
};

const torpedaDelivery = {
  order: [],
  chosenRestaurant: "",
  getAvailableRestaurants() {},
  chooseRestaurant() {},
  chooseDishes() {},
};

torpedaDelivery.chooseRestaurant();
//----------------------------------------------------------------------------------------------------

// const restaurants = [
//   {
//     order: [],
//     brand: "KFC",
//     menu: {
//       chicken: 50,
//       burger: 50,
//     },
//     deliveryTime: 60,
//   },
//   {
//     order: [],
//     brand: "mcDonalds",
//     menu: {
//       cola: 25,
//       burger: 30,
//     },
//     deliveryTime: 30,
//   },
//   {
//     order: [],
//     brand: "Burger King",
//     menu: {
//       burgerXXL: 170,
//       burger: 70,
//     },
//     deliveryTime: 20,
//   },
// ];

// const services = {
//   showMenu() {
//     for (let key in this.menu) {
//       console.log(`${key} cтоимость ${this.menu[key]}`);
//     }
//   },
//   getMenu() {
//     return restaurants.find((el) => el.brand === this.chosenRestaurant).menu;
//   },
//   addOrder(order) {
//     this.order.push(order);
//   },
//   confirmOrder() {
//     const deliveryTime = restaurants.find(
//       (el) => el.brand === this.chosenRestaurant
//     ).deliveryTime;

//     alert(
//       `Вы заказали ${this.order.join(
//         ""
//       )}. Ожидайте доставку в течении ${deliveryTime} минут`
//     );
//   },
// };

// const torpedaDelivery = {
//   order: [],
//   chosenRestaurant: "",
//   getAvailableRestaurants() {
//     return restaurants.map((el) => el.brand);
//   },

//   chooseRestaurant() {
//     const availableRestaurants = this.getAvailableRestaurants();
//     const restaurant = prompt(
//       `Приветствуем! Выбирите ресторан! Доступные рестораны - ${availableRestaurants.join(
//         " , "
//       )}`
//     );

//     if (availableRestaurants.includes(restaurant)) {
//       this.chosenRestaurant = restaurant;

//       const restaurantEntity = restaurants.find(
//         (el) => el.brand === restaurant
//       );
//       services.showMenu.call(restaurantEntity);

//       this.chooseDishes();
//     } else {
//       alert("Нет такого ресторана =(");
//     }
//   },
//   chooseDishes() {
//     const dish = prompt(`Выбирите блюдо!`);
//     const menu = services.getMenu.call(this);

//     if (menu.hasOwnProperty(dish)) {
//       services.addOrder.call(this, dish);
//       services.confirmOrder.call(this);
//     } else {
//       alert("Нет такого блюда");
//     }
//   },
// };

// torpedaDelivery.chooseRestaurant();
