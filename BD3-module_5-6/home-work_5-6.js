const formRef = document.querySelector("form");
const orderRef = document.querySelector(".order");

const toppingsListMenuRef = document.querySelector(".menu .toppings ul");
const sizeListMenuRef = document.querySelector(".menu .size");

const btnRef = document.querySelector(".btnOrder");
const btnAddRef = document.querySelector(".btnAdd");
const btnRemoveRef = document.querySelector(".btnRemove");

const inputSizeRef = document.querySelector(".info .size");
const inputTotalRef = document.querySelector(".add-topping-wrap .total-value");
const inputToppingRef = document.querySelector(".info .topping");
const inputAddToppingRef = document.querySelector(".info .topping-list");

btnRef.disabled = true;
btnRemoveRef.disabled = true;
btnAddRef.disabled = true;

const DB = {
  stuffing: {
    STUFFING_SALAD: {
      type: "STUFFING_SALAD",
      price: 300,
      ccal: 200,
    },
    STUFFING_POTATO: {
      type: "STUFFING_POTATO",
      price: 400,
      ccal: 100,
    },
    TOPPING_MAYO: {
      type: "TOPPING_MAYO",
      price: 300,
      ccal: 400,
    },
    TOPPING_SPICE: {
      type: "TOPPING_SPICE",
      price: 500,
      ccal: 700,
    },
  },

  sizes: {
    S: 200,
    L: 300,
    M: 400,
  },
};

class Hamburger {
  static stuffing = DB.stuffing;

  constructor() {
    this.sizes = DB.sizes;
    this.toppings = [];
    this.size = "";
  }

  addSize(size) {
    console.log("this.sizes", this.sizes);
    console.log("size", size);

    if (Object.keys(this.sizes).includes(size)) {
      this.size = size;
    } else {
      this.showError();
    }
  }

  addTopping(toppings) {
    this.toppings.push(toppings);
  }

  removeTopping(topping) {
    if (this.toppings.includes(topping)) {
      this.toppings = this.toppings.filter((el) => el !== topping);
    } else {
      this.showError("Topping doesnt exist");
    }
  }

  get getStuffing() {
    console.log("Toppings: ", this.toppings);
    return this.toppings;
  }

  showError(msg) {
    console.log(msg);
  }

  calculatePrice() {
    return this.toppings.reduce(
      (acc, type) => acc + Hamburger.stuffing[type.type].price,
      this.sizes[this.size]
    );
  }
}

const burger = new Hamburger();

function getMarkupToppings({ type, price }) {
  return `<li>${type.split("_").join(" ")} - ${price} грн</li>`;
}

function getMarkupSize(size) {
  return `<li>${size[0]} - ${size[1]} грн</li>`;
}

function showMenu(data) {
  const toppingsMenuList = Object.values(data.stuffing)
    .map(getMarkupToppings)
    .join("");

  const sizeMenuList = Object.entries(data.sizes).map(getMarkupSize).join("");

  toppingsListMenuRef.insertAdjacentHTML("beforeend", toppingsMenuList);
  sizeListMenuRef.insertAdjacentHTML("beforeend", sizeMenuList);
}

formRef.addEventListener("submit", onSubmit);
formRef.addEventListener("input", onFieldChanges);
btnAddRef.addEventListener("click", addTopping);
btnRemoveRef.addEventListener("click", removeTopping);

const selectedData = { size: null, toppings: null, amount: 1 };

function onFieldChanges(e) {
  const { name, value } = e.target;

  selectedData[name] = value.trim().toUpperCase();
  showMessage(selectedData);
}

function showInfo(burger) {
  if (burger.toppings.length > 0) {
    const message = "<p>Ваші добавки:</p>";

    inputAddToppingRef.innerHTML = message;

    inputAddToppingRef.insertAdjacentHTML(
      "beforeend",
      burger.toppings
        .map(
          (item) =>
            `<p>${item.type.split("_").join(" ")} - ${item.price} грн</p>`
        )
        .join(" ")
    );
  } else {
    inputAddToppingRef.innerHTML = "";
  }
}

function showMessage(data) {
  const { size, toppings, amount } = data;

  const currentSize = DB.sizes[size];
  const currentStuff = toppings
    ? DB.stuffing[toppings.split(" ").join("_")]
    : null;
  const priceByCount = +currentSize * amount;

  if (size) {
    inputSizeRef.textContent = currentSize
      ? `Розмір "${size}". К-сть: ${amount}. Вартість: ${
          +currentSize * amount
        }  грн`
      : `Розміру ${size} не має в меню`;

    inputTotalRef.textContent = "";
  } else {
    inputSizeRef.textContent = "";
    inputTotalRef.innerHTML = "Оберіть свій розмір бургера";
  }

  if (toppings) {
    inputToppingRef.textContent = !currentStuff
      ? `Такої добавки не має в меню`
      : `Добавка: ${currentStuff.type.split("_").join(" ")} - ${
          currentStuff.price
        } грн`;

    btnAddRef.disabled = currentStuff ? false : true;
  } else {
    inputToppingRef.textContent = "";
  }

  if (currentSize && size && burger.toppings.length > 0) {
    inputTotalRef.textContent = `До оплати: ${
      burger.toppings.reduce((acc, item) => acc + item.price, 0) + priceByCount
    } грн`;

    btnRef.disabled = false;
  } else {
    btnRef.disabled = true;
  }

  if (
    burger.toppings.length > 0 &&
    currentStuff &&
    burger.toppings.includes(currentStuff)
  ) {
    btnRemoveRef.disabled = false;
  }
}

function addTopping() {
  const topping = DB.stuffing[selectedData.toppings.split(" ").join("_")];

  burger.addTopping(topping);
  selectedData.toppings = null;
  btnAddRef.disabled = true;
  formRef["toppings"].value = "";
  inputToppingRef.textContent = "";

  showMessage(selectedData);
  showInfo(burger);
}

function removeTopping() {
  const topping = DB.stuffing[selectedData.toppings.split(" ").join("_")];

  burger.removeTopping(topping);
  selectedData.toppings = null;
  btnRemoveRef.disabled = true;

  formRef["toppings"].value = "";
  inputToppingRef.textContent = "";

  showMessage(selectedData);
  showInfo(burger);
}

function onSubmit(e) {
  e.preventDefault();

  burger.addSize(selectedData.size);

  const totalPrice = burger.calculatePrice();

  markup(burger, totalPrice);

  btnRef.disabled = true;
}

const markup = ({ size, toppings }, totalPrice) => {
  orderRef.style = "display: block";

  orderRef.innerHTML = `<p>Ви замовили гамбургер розміру ${size} з добавкою(-ми):</p> ${toppings
    .map((item) => `<p>${item.type}</p>`)
    .join(
      " "
    )}  <p>Загальна вартість до оплати: ${totalPrice}грн.</p><br /> <p>СМАЧНОГО!</p> `;
};

showMenu(DB);
