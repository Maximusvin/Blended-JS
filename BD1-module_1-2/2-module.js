// =====================================================================
//
//                      MODULE-2: МАСИВИ та ФУНКЦІЇ
//
// =====================================================================

//                                PART-1

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

// const x = [ 1 ,2 ,3 ];
// const x2 = x.map(el => el * 2).reverse().reduce((acc, el) => {
// if(el !== 2 ) {
//   acc += el
// }

// return acc
// });

// console.log(x2);

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// Замыкание
// const foo = (a) => (b) => (c) => a + b + c;
// console.log(foo(1)(1)(1));

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

// =====================================================================
//
//                                PART - 2
//
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
