import { Drink } from './drinks.js';

export class Cafe {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getCafeInfo() {
    return `Кафе "${this.name}" находится по адресу: ${this.address}.`;
  }

  orderDrink(drink) {
    if (!(drink instanceof Drink)) {
      return;
    }

    console.log(`Вы заказали напиток: ${drink.name}. Заказ принят!`);
    setTimeout(() => {
      drink.serveDrink();
    }, 2000);
  }
}



