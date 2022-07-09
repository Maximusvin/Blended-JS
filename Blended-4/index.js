// =====================================================================
//
//                       BLENDED-4: DOM
//
// =====================================================================

// ---------------------  1. Питання   ----------------------
// 1. Що таке DOM?
// 2. DOM це JS?
// 3. Які бувають ноди в DOM?
// 4. Навігація по ДОМу?
// 5. Пошук елементів в ДОМі?
// 6. Добавлення елементів в ДОМ?

// ---------------------  2. Приклад з домашки   ----------------------
function onInputChange(event) {
  // inputEl.value === ""
  //   ? (outputEl.textContent = "Anonymous")
  //   : (outputEl.textContent = event.currentTarget.value);
}

// ---------------------  3. Звернення до ДОМу в циклах  ----------------------

// const listRef = document.querySelector(".list");

// for (item of items) {
//   //код

//   listRef.appendChild(li);
// }

// ---------------------  4. Mortgage   ----------------------

const banks = [
  {
    id: "3453456475htryrtyhgrytrk3jh5geh3k4jhb65mh",
    name: "Mono",
    interestRate: 5,
    maxLoan: 500000,
    minPayment: 1000,
    loanTerm: 12,
  },
  {
    id: 2,
    name: "Privat",
    interestRate: 7,
    maxLoan: 1000000,
    minPayment: 5000,
    loanTerm: 50,
  },
];
