// =====================================================================
//
//                                      BLENDED-6
//                       FETCH, API
//
// =====================================================================

// =================================== 1 ==========================================
// // Реалізуйте функціонал отримання даних з API по кліку на кнопку "BUTTON" і виведення їх
// // на сторінку при кожному кліку по кнопці. Кожен факт має мати свій порядковий номер.
// // https://catfact.ninja/

// ************ Solution ************
// function fetchCats() {
//   return fetch('https://catfact.ninja/fact')
//     .then(response => response.json())
//     .then(makeMarkup)
//     .catch(error => console.log(error));
// }

// function makeMarkup(data) {
//   fetchCats().then(data => {
//     const markup = `<p>${count}.${data.fact}</p>`;
//     count += 1;
//     return bodyRef.insertAdjacentHTML('afterbegin', markup);
//   });
// }

// =================================== 2 ==========================================
// // Реалізуйте функціонал пошуку даних по юзеру з API при сабміті форми і виведення їх на сторінку
// // https://agify.io/

// =================================== 3 ==========================================
// // Реалізуйте функціонал створення зображень при клікові на кнопку BUTTON
// // https://dog.ceo/dog-api/

// =================================== 4 ==========================================
// // Отримати дані рандомного юзера і вивести їх на сторінку
// // https://randomuser.me/api/

// =================================== 5 ==========================================
// // Отримати дані з API і вивести їх на сторінку
// // https://pokeapi.co/api/v2/pokemon
// // 1. Вивести список покемонів (20шт) на сторінку (Зображення та ім'я)
// // 2. Створити розмітку картки покемона
// // 3. При клікові по картці покемона - відкривати модалку з даними по покемону на якого ми клікнули
