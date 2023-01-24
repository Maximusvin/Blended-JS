// Замовлення турів:
// Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
// Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при реєстрації. Якщо все вірно - виводимо в консоль, що логін успішний. Якщо ні - знову запитуємо логін та пароль.
// Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// Вказуємо країну через prompt  і купляємо тур.
// Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.

const countries = [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
];

const countriesPrice = [100, 200, 300, 400, 500, 600];

// let userName;
// let userPass;
// let userCredits;
// let userCountry;
// let maxPrice;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const filterCountries = () => {
  if (maxPrice < 600) {
    return countries
      .filter((country, index) => {
        return countriesPrice[index] <= maxPrice;
      })
      .toString();
  }

  return countries.toString();
};

const chooseCountry = () => {
  const inputCountry = prompt("Choose country");

  if (inputCountry && countries.includes(inputCountry)) {
    const index = countries.indexOf(inputCountry);

    alert(
      `You have successfully bought tour to ${inputCountry}, credits left ${
        maxPrice - countriesPrice[index]
      }`
    );
  } else {
    chooseCountry();
  }
};

const selectCountry = () => {
  const availableCountries = filterCountries();

  alert(`Available countries are ${availableCountries}`);

  chooseCountry();
};

const enterMaxPrice = () => {
  const inputMaxPrice = prompt("Enter max price");

  if (!Number.isNaN(+inputMaxPrice) && Number.isInteger(+inputMaxPrice)) {
    maxPrice = +inputMaxPrice;

    selectCountry();
  } else {
    enterMaxPrice();
  }
};

const startLoginProcess = () => {
  const inputUserName = prompt("Enter your username to login");
  const inputUserPass = prompt("Enter yout pass to login");

  if (!!inputUserName && !!inputUserPass) {
    if (userName === inputUserName && userPass === inputUserPass) {
      console.log("Login success");

      enterMaxPrice();
    } else {
      console.log("Try again");

      startLoginProcess();
    }
  }
};

const startRegisterProcess = () => {
  const inputUserName = prompt("Enter your username");
  const inputUserPass = prompt("Enter yout pass");

  if (!!inputUserName && !!inputUserPass) {
    userName = inputUserName;
    userPass = inputUserPass;

    console.log(`Your username is ${inputUserName}`);
    console.log(`Your userpass is ${inputUserPass}`);

    startLoginProcess();
  } else {
    startRegisterProcess();
  }
};

startRegisterProcess();
