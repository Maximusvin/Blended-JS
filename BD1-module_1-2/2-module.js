// =====================================================================
//
//                      MODULE-2: МАСИВИ та ФУНКЦІЇ
//
// =====================================================================

//                                PART-1

// -----------------------------------------------------------------
//                              Array
// -----------------------------------------------------------------

// const length = arr.push(6);
// const length1 = arr.push(7);

// console.log(length1);

// console.log(NaN === NaN);
// console.log(typeof null);
// console.log(Number(undefined));

// const arr = [1, 2, 3, 4, 5];
// arr[4] = 555;
// console.log(arr);

// const a = "Hello";
// a[0] = "B";
// console.log(a);

// console.log("hello".toUpperCase());
// console.log(String("hello").toUpperCase());

// console.log("hello".__proto__ === String("hello").__proto__);

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// let a = [];
// let b = a;

// b.push(1);
// b.push(2);
// b.push(3);

// console.log(a);
// console.log(b);

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.push(10);
// arr.length = 2;

// console.log(arr);

// ========

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.length = 0;
// arr.push(9);
// arr.length = 10;
// arr.push(10);

// console.log(arr);

// ========

// const arr = new Array(9, 5);
// console.log(arr);

// const arr = new Array(10);
// arr.push(11);
// console.log(arr);

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// Что такое чистая функция?
// let a = 1;

// const foo = (b) => a + b;
// const foo = (a, b) => a + b;

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// Что такое функция высшего порядка?

// const foo = (callback) => {
//   callback();
// };

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// Замыкание
// const foo = (a) => (b) => (c) => a + b + c;
// console.log(foo(1)(2)(3));

//--------------------
// const foo = (a) => (b) => a + b;
// const c = foo(1);

// const d = (a) => {
//   return c(10) + a;
// };

// console.log(d(10)); //?

//--------------------
// const b = 1000;

// const foo = (a) => () => a + b;
// const c = foo(11);

// const d = (b) => {
//   return c(10) + b;
// };

// console.log(d(100)); //?

//--------------------
// const makeCounter = () => {
//   let count = 0;

//   return () => count++;
// };

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1

// console.log(counter2()); // ?
// console.log(counter2()); // ?

//-------------------------------

// var myName = "global";

// function func() {
//   console.log(myName);

//   var myName = "local";
//   console.log(myName);
// }

// func();

// -----------------------------------------------------------------
// console.log(typeof null === "object");
// console.log(null instanceof Object);

// const a = null;
// a.value = 10;
// console.log(a.value);

// console.log(typeof [] === "object");
// console.log(typeof NaN === "number");
// console.log(NaN === NaN);

// const func = () => {};
// console.log(typeof func);
// console.log(func instanceof Object);

// ================================================================================
//
//                                PART - 2
//
// ================================================================================

// =================================== 1 ==========================================
// Реалізуйте result
// const a = ['a', 'b', 'c'];
// const b = [1, [2, 3]];
// const c = 0;
//
// console.log(result); // ['a', 'b', 'c', 0, 1, 2, 3]

// =================================== 2 ==========================================
// Реалізуйте result
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
//
// console.log(result); // ["a", "b", "c", "a", "b", "c", "g", "h"]

// =================================== 3 ==========================================
// Реалізуйте функцію, яка розгладить масив:
// const arr = [1, 2, [3, 4], [5, 6], 7];
//
// console.log(foo(arr)); // [1, 2, 3, 4, 5, 6, 7]

// =================================== 4 ==========================================
// Напиши функцію, яка повертає останній символ стрічки
// console.log(getLastCharacter("321433530")); // 0

// ************ Solution ************
// function getLastCharacter(input) {
//   return input[input.length - 1];
// }

// =================================== 5 ==========================================
// Реалізуй функцію, яка приймає тип String або Number і повертає масив з протилежним типом даних:
//
// console.log(convert('1', 2, 3, '4')); // [1, '2', '3', 4]

// =================================== 6 ==========================================
// Напиши функцію, яка приймає рядок text, та повертає масив усіх великих літер, які є в text в такому ж порядку.
// Приклад:
// getCapitals('Ukraine Everywhere') // ['U', 'E']
// getCapitals('UkraiNe EveRywherE') // ['U', 'N', 'E', 'R', 'E']
// getCapitals("1234M5678A9") // ['M', 'A']

// ************ Solution ************
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
