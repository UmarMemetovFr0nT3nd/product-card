function logTemp(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию.`);
}

logTemp('Москва', 20);

function measureSpeed(speed) {
  const LIGHT_SPEED = 299792;
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость!');
  } else if (speed === LIGHT_SPEED) {
    console.log('Скорость света!');
  } else {
    console.log('Субсветовая скорость!');
  }
}

measureSpeed(300000);
measureSpeed(299792);
measureSpeed(100000);

function buyProduct(budget) {
  const product = 'Audi';
  const price = 50000;
  if (budget >= price) {
    console.log(`${product} приобретён!`);
  } else {
    console.log(`Вам не хватает ${price - budget}$ для покупки, пополните баланс!`);
  }
}

buyProduct(60000);
buyProduct(40000);
buyProduct(30000);

function greet () {
  console.log('Hi, my friend!');
}

greet()

let number = 10;
const PI = 3.14;
let telNumber = +79803657890