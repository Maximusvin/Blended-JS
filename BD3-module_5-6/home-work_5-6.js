// Создайте класс Hamburger
// Cледующая начинка должна быть статик в Классе, что бы можно было ее использовать как в примере: Hamburger.stuffing.STUFFING_SALAD

const stuffing = {
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
};

// Вартість бургера в залежності від розміру:
sizes = {
  S: 200,
  L: 300,
  M: 400,
};

// Методы класса:
// addSize - Добавляем размер бургера
// addTopping(Hamburger.stuffing.STUFFING_SALAD, ...) - Добавить добавку к гамбургеру. Можно добавить несколько добавок, при условии что они валидные
// removeTopping(Hamburger.stuffing.STUFFING_SALAD, ...) - Убрать добавку, при условии, что она ранее была добавлена.
// getStuffing - геттер, должен вернуть this.toppings = [....]
// calculatePrice() - узнать цену гамбургера,
// calculateCalories() - Узнать калорийность гамбургера
// showError() - метод который показывает 2 ошибки - если размер не верный передали, начинка не существует (При удалении или добавлении)

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

const formRef = document.querySelector("form");
const infoRef = document.querySelector(".info");
const orderRef = document.querySelector(".order");

class Hamburger {
  constructor() {
    this.sizes = {
      S: 200,
      L: 300,
      M: 400,
    };
    this.toppings = [];
    this.size = "";
  }

  static stuffing = stuffing;

  addSize(size) {
    if (Object.keys(this.sizes).includes(size)) {
      this.size = size;
    } else {
      this.showError();
    }
  }

  addTopping(toppings) {
    toppings.forEach((topping) => {
      if (Object.keys(Hamburger.stuffing).includes(topping)) {
        this.toppings.push(topping);
      } else {
        this.showError("Topping doesnt exist");
      }
    });
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
    return this.toppings.reduce((acc, type) => {
      const price = acc + Hamburger.stuffing[type].price;
      console.log("Price: ", price);
      return acc + Hamburger.stuffing[type].price;
    }, this.sizes[this.size]);
  }
}

formRef.addEventListener("submit", onSubmit);
formRef.addEventListener("input", onFieldChanges);

const selectedData = {
  size: null,
  toppings: null,
};

function onFieldChanges(e) {
  const { name, value } = e.target;

  if (!e.target) return;

  selectedData[name] = value;

  infoRef.textContent = `Ви обрали розмір: ${selectedData.size} (вартість - ${
    sizes[selectedData.size]
  } грн) та добавку: ${selectedData.toppings} `;
}

function onSubmit(e) {
  e.preventDefault();
  const burger = new Hamburger();

  burger.addSize("S");

  burger.addTopping([
    Hamburger.stuffing.STUFFING_POTATO.type,
    Hamburger.stuffing.STUFFING_SALAD.type,
  ]);

  burger.removeTopping(Hamburger.stuffing.STUFFING_POTATO.type);

  const totalPrice = burger.calculatePrice();
  burger.getStuffing;

  console.log("Your burger: ", burger);

  markup(burger, totalPrice);
}

const markup = ({ size, toppings }, totalPrice) =>
  (orderRef.innerHTML = `Ви замовили гамбургер розміру ${size} з добавкою(-ми) ${toppings}. Загальна вартість до оплати: ${totalPrice}грн `);

onFieldChanges(formRef);
