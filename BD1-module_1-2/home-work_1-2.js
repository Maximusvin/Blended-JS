// Пишем регистрацию на prompt. Логин и пароль. Валидацию не делать.
// Аналогично пишем логинизацию, запрашиваем логин и пароль, сравниваем с регистрацией,
//  если верно пишем что логин успешен, если нет - заново спрашиваем логин и пароль.
// Запрашиваем максимальную сумму тура.
// Выдаем список стран по сумме, alert
// Выбираем страну и покупаем тур
// Выдаем сообщения что тур куплен осталось на счету столько то денег

const countries = [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
];

const countriesPrice = [100, 200, 300, 400, 500, 600];

let userName;
let userPass;
let userCredits;
let userCountry;
let maxPrice;

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
    console.log(`Your username is ${inputUserPass}`);

    startLoginProcess();
  } else {
    startRegisterProcess();
  }
};

startRegisterProcess();
