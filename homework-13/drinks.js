class Drink {
  #temperature;
  constructor(name, volume, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создать экземпляр абстрактного класса Drink напрямую! Используйте дочерние классы (Coffee, Tea и т.д.).");
    }

    this.name = name;
    this.volume = volume;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Напиток: ${this.name}, объем: ${this.volume} мл, цена: ${this.price} руб., температура: ${this.#temperature}°C`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  #prepareDrink() {
    if (this.getTemperature() < 100) {
      this.setTemperature(100);
    }
    return `Приготовление напитка ${this.name}...`;
  }

  serveDrink() {
    this.#prepareDrink();
    setTimeout(() => {
      console.log(`Ваш напиток ${this.name} готов! Приятного аппетита!`);
    }, 10000);
  }
}


class Coffee extends Drink {
  constructor(name, volume, price, temperature, beansType, milk, sugarAmount) {
    super(name, volume, price, temperature);
    this.beansType = beansType;
    this.milk = milk;
    this.sugarAmount = sugarAmount;
  }

  addSugar(amount) {
    this.sugarAmount = amount;
  }
}

class Tea extends Drink {
  constructor(name, volume, price, temperature, milk, sugarAmount, herbs) {
    super(name, volume, price, temperature);
    this.milk = milk;
    this.sugarAmount = sugarAmount;
    this.herbs = herbs;
  }

  addSugar(amount) {
    this.sugarAmount = amount;
  }
}

class Lemonade extends Drink {
  constructor(name, volume, price, temperature, fruitType, soda) {
    super(name, volume, price, temperature);
    this.fruitType = fruitType;
    this.soda = soda;
  }
}

class Juice extends Drink {
  constructor(name, volume, price, temperature, fruitType, pulp) {
    super(name, volume, price, temperature);
    this.fruitType = fruitType;
    this.pulp = pulp;
  }
}

class Cocktail extends Drink {
  constructor(name, volume, price, temperature, ice, ingredients) {
    super(name, volume, price, temperature);
    this.ice = ice;
    this.ingredients = ingredients;
  }
}


export { Drink, Coffee, Tea, Lemonade, Juice, Cocktail };