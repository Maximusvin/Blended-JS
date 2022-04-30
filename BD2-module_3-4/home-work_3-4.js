// Домашка: "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних пунктів в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його підтвердження та основну інформацію: "що замовив, вартість та час доставки".

const restaurants = [
  {
    order: [],
    brand: "KFC",
    menu: {
      chicken: 50,
      burger: 50,
    },
    deliveryTime: 60,
  },
  {
    order: [],
    brand: "mcDonalds",
    menu: {
      cola: 25,
      burger: 30,
    },
    deliveryTime: 30,
  },
  {
    order: [],
    brand: "Burger King",
    menu: {
      burgerXXL: 170,
      burger: 70,
    },
    deliveryTime: 20,
  },
];

// const services = {
//   showMenu() {},
//   getMenu() {},
//   addOrder() {},
//   confirmOrder() {},
// };

// const torpedaDelivery = {
//   order: [],
//   chosenRestaurant: "",
//   getAvailableRestaurants() {},
//   chooseRestaurant() {},
//   chooseDishes() {},
// };

// torpedaDelivery.chooseRestaurant();
// ----------------------------------------------------------------------------------------------------

const services = {
  showMenu() {
    for (let key in this.menu) {
      console.log(`${key} cтоимость ${this.menu[key]}`);
    }
  },
  getMenu() {
    return restaurants.find((el) => el.brand === this.chosenRestaurant).menu;
  },
  addOrder(order) {
    this.order.push(order);
  },
  confirmOrder() {
    const deliveryTime = restaurants.find(
      (el) => el.brand === this.chosenRestaurant
    ).deliveryTime;

    alert(
      `Вы заказали ${this.order.join(
        ""
      )}. Ожидайте доставку в течении ${deliveryTime} минут`
    );
  },
};

const torpedaDelivery = {
  order: [],
  chosenRestaurant: "",
  getAvailableRestaurants() {
    return restaurants.map((el) => el.brand);
  },

  chooseRestaurant() {
    const availableRestaurants = this.getAvailableRestaurants();
    const restaurant = prompt(
      `Приветствуем! Выбирите ресторан! Доступные рестораны - ${availableRestaurants.join(
        " , "
      )}`
    );

    if (availableRestaurants.includes(restaurant)) {
      this.chosenRestaurant = restaurant;

      const restaurantEntity = restaurants.find(
        (el) => el.brand === restaurant
      );

      services.showMenu.call(restaurantEntity);

      this.chooseDishes();
    } else {
      alert("Нет такого ресторана =(");
    }
  },
  chooseDishes() {
    const dish = prompt(`Выбирите блюдо!`);

    const menu = services.getMenu.call(this);

    if (menu.hasOwnProperty(dish)) {
      services.addOrder.call(this, dish);
      services.confirmOrder.call(this);
    } else {
      alert("Нет такого блюда");
    }
  },
};

torpedaDelivery.chooseRestaurant();
