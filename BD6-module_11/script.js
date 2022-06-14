"use strict";

// 2. JSON
// 3. Event loop, async
// 4. Poomise

// - Что такое JSON?
// - Как разшифровывается?
// - Какой формат данных может иметь внутри?
// - Какие методы имеет?

// -----------------------------------------------------
// const obj = {
//   name: 'Andrew',
//   age: 30
// }

// const json = JSON.stringify(obj)

// console.log(json);
// console.log(JSON.parse(json))

// -----------------------------------------------------
// const obj = {
//   name: 'Andrew',
//   age: 30
// }

// const obj2 = obj;

// console.log(obj2 === obj);
// console.log(JSON.parse(JSON.stringify(obj)) === obj2);

// -------------------------------------------------------
// const skills = {
//   bike: 10,
//   code: 10,
//   drawing: 1,
//   toJSON() {
//     return Object.keys(this).filter(el => el !== 'toJSON')
//   }
// }

// const obj = {
//   name: 'Andrew',
//   age: 30,
//   skills
// }

// console.log(JSON.stringify(obj))

// -------------------------------------------------------
// const str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// const meetup = JSON.parse(str);

// const meetup = JSON.parse(str, (key, value) => key === 'date' ? new Date(value) : value)

// console.log(meetup.date);
// console.log( meetup.date.getDate() );
// -------------------------------------------------------

// Async

// -------------------------------------------------------

// setTimeout(() => { console.log('Hello')}, 0)
// console.log('BB');

// -------------------------------------------------------
// setTimeout(() => { console.log('Hello')}, 5000)
// console.log('BB');

// -------------------------------------------------------

// const timer = setTimeout(() => { console.log('Hello')}, 3000)
// console.log('BB');

// clearTimeout(timer);

// -------------------------------------------------------

// const interval = setInterval(() => {
//   console.log('tick');
// }, 1000);

// setTimeout(() => { clearInterval(interval)}, 5000)

// -------------------------------------------------------

// let interval = setTimeout(function tick(){
//   interval = setTimeout(tick, 1000)
//   console.log('tick');
// }, 1000)

// -------------------------------------------------------

// const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

// let timer = setTimeout(function tick(){
//   const interval = getRandomInt(5) * 1000;

//   timer = setTimeout(tick, interval)

//   console.log(interval);
//   console.log('tick');
// }, 1000)

// -------------------------------------------------------
// const x = '123';

// setTimeout((x) => console.log(x), 1000, 'Hello')

// -------------------------------------------------------

// Promise

// -------------------------------------------------------

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Hello from'), 5000)

// }).then((msg) => {
//   console.log(msg + ' then');

// })

// -------------------------------------------------------
// new Promise((resolve, reject) => {
//   setTimeout(() => resolve('BB from'), 5000)

// }).then((msg) => {
//   console.log(msg + ' then');

//   return 123;
// }).then((number) => {
//   console.log(number);
// })

// console.log('Hello from stack');

// -------------------------------------------------------

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve('BB from'), 5000)

// }).then((msg) => {
//   setTimeout(() => console.log(msg + ' then'), 0)

//   return 123;

// }).then((number) => {
//   console.log(number);
// })

// console.log('Hello from stack');

// -------------------------------------------------------

// new Promise((resolve, reject) => {
//   setTimeout(() => reject('Error'), 2000)

// }).then((msg) => {
//   console.log(msg + ' then');

// }).catch((error) => console.log(error))

// -------------------------------------------------------

// const getSomeData = () => new Promise((resolve) => {
//   setTimeout(() => resolve({name: 'Andrew', age: 18}), 2000)
// })

// const render = (data) => {
//   if(data) {
//     const ref = document.querySelector('.person');

//     ref.innerHTML = `
//     <p>Name - ${data.name}</p>
//     <p>Age - ${data.age}</p>
//     `
//   }
// }

// getSomeData().then((data) => {
//   render(data)
// })

// -------------------------------------------------------

// const first = new Promise((resolve) => setTimeout(() => resolve('data from 1st'), 2000))
// const second = new Promise((resolve) => setTimeout(() => resolve('data from 2nd'), 4000))

// Promise.all([first, second]).then(data => {
//   console.log(data);
// })

// -------------------------------------------------------
// const asyncPromiseFoo = () => new Promise((resolve) =>
//                         setTimeout(() => resolve('data from Promise'), 2000))
//                           .then(data => console.log(data))

// const asyncFoo = async () => {
//   const data = await new Promise((resolve) => setTimeout(() => resolve('data from asyncFoo'), 4000))

//   console.log(data);
// }

// asyncPromiseFoo()
// asyncFoo();

// console.log('Hello from stack');
// -------------------------------------------------------

// Создайте таймер
// Таймер можно выставить на 10с/20с/30с. ( У вас должно быть 3 кнопки с данными значениями)
// У таймера должна быть возможность поставить на паузу, продолжить, сбросить, старт.
//  Изначально должно быть всего 2 кнопки - старт и сбросить,
// после старта таймера кнопка старта меняет состояние на пауза,
// после нажатия на паузу кнопка меняет состояние на продолжить,
// после нажатия на продолжить кнопка меняет состояние на пауза
// после нажатия на сбросить кнопка старта снова имеет сочтояние старт

