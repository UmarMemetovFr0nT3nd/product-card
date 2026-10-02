import { Modal } from "./modal.js"
import { Form } from "./form.js"
import { Cafe } from "./homework-13/cafe.js"
import * as drinks from './homework-13/drinks.js';

import './homework-7.js'
import './homework-8.js'
import './homework-9.js'
import './homework-10.js'
import './homework-11.js'
import './homework-13/drinks.js'
import './homework-13/cafe.js'

// const productCard = document.querySelector('.card');
// const changeColorButton = document.querySelector('#change-card-color-button');

// changeColorButton.addEventListener('click', () => {
//   productCard.style.backgroundColor = '#95885d';
// })

// const productCards = document.querySelectorAll('.card');
// const changeAllColorButton = document.querySelector('#change-all-cards-color-button');

// changeAllColorButton.addEventListener('click', () => {
//   productCards.forEach((card) => card.style.backgroundColor = '#3b3524')
// })

// const openGoogleButton = document.querySelector('#go-to-google-button');

// openGoogleButton.addEventListener('click', openGoogle);

// function openGoogle() {
//   const question = confirm('Вы уверены, что хотите перейти в Google?');

//   if (question === true) {
//     window.open('https://www.google.com/');
//   } else {
//     return;
//   }
// }

// const outputConsoleButton = document.querySelector('#log-to-console-button');

// outputConsoleButton.addEventListener('click', () =>outputConsoleLog('Привет, это сообщение выведено в консоль!'));

// function outputConsoleLog(message) {
//   alert('Вы нажали на кнопку "Вывести в консоль". Сообщение будет выведено в консоль.');
//   console.log(message);
// }

// const headline = document.querySelector('.headline');

// headline.addEventListener('mouseover', function() {
//   console.log(headline.textContent);
// })

// const selectColorButton = document.querySelector('#select-button-color');

// selectColorButton.addEventListener('click', () => {
//   selectColorButton.classList.toggle('active');
// });






// Задание 3

// class GameConsole {
//   constructor(name, model, revision, year) {
//     this.name = name;
//     this.model = model;
//     this.revision = revision;
//     this.year = year;
//   }

//   showInfo() {
//     console.log(`${this.name} ${this.model}, ${this.revision}, ${this.year} была приобретена.`)
//   }
// }

// const playStation = new GameConsole('PlayStation', '5 PRO', '3 revision', '2026 года')

// playStation.showInfo()

// class GameComputer extends GameConsole {
//   constructor(name, model, year, graphicsCard) {
//     super(name, model, null, year)
//     this.graphicsCard = graphicsCard
//   }

//   showComputerInfo() {
//     console.log(`${this.name}, ${this.model}, ${this.year}, с ${this.graphicsCard} был приобретён.`)
//   }
// }

// const asusRog = new GameComputer('ASUS', 'ROG Strix G16', '2026 года', 'RTX5070TI')

// asusRog.showComputerInfo()

// ----

const modalWindow = new Modal('.modal');

const modalForm = new Form('.modal__signUp')

const modalBtn = document.getElementById('buttonModal')


modalBtn.addEventListener('click', () => {
  modalWindow.openModal()
})

const modalClearBut = document.querySelector('#clearButton')
modalClearBut.addEventListener('click', () => {
  modalForm.clearForm()
})

const signUp = document.querySelector('.modal__signUp')

let user = null;

if (signUp) {
  const passwordInput = signUp.querySelector('#signUpPassword');
  const passwordRepeatInput = signUp.querySelector('#signUpPasswordRepeat');

  function checkLiveMatch() {
    if (passwordInput.value !== passwordRepeatInput.value) {
      passwordRepeatInput.setCustomValidity('Пароли не совпадают!');
    } else {
      passwordRepeatInput.setCustomValidity('');
    }
  };
  passwordInput.addEventListener('input', checkLiveMatch);
  passwordRepeatInput.addEventListener('input', checkLiveMatch);


  const birthDateInput = signUp.querySelector('#signUpBirthDate');

  birthDateInput.addEventListener('input', () => {
    birthDateInput.setCustomValidity('');

    const selectedDate = new Date(birthDateInput.value);
    const birthYear = selectedDate.getFullYear();   
    if (birthYear > 2012) {
      birthDateInput.setCustomValidity('Регистрация доступна только для лиц, старше 14!');
      return; 
    }
  });
}


signUp.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!modalForm.cheсkFormValidity()) {
    return;
  }
  user = modalForm.getValue()
  delete user.passwordRepeat;
  const nowDate = new Date();
  user.createdOn = nowDate.toString(' ');

  console.log(user)
  alert('Регистрация прошла успешно!')

  modalWindow.closeModal()
  modalForm.clearForm()
})


// Задание 6

// function showCar() {
//   console.log(this.car)
// }

// const me = { car: 'BMW', showCar };
// const father = { car: 'VolksWagen', showCar };
// const wife = { car: 'MINI', showCar };

// me.showCar()
// father.showCar()
// wife.showCar()

// const showCarFunction = me.showCar.bind(me)

// showCarFunction()

// const book = {
//   name: 'Песнь льда и пламени',
//   author: 'Джордж Р. Р. Мартин',
//   show() {
//     console.log(this.author, this.name)
//   }
// }

// book.show()

// function showThis() {
//   console.log(this)
// }

// showThis()


// setTimeout(function() {
//   console.log(this)
// })


// const book2 = {
//   name: 'Песнь льда и пламени',
//   author: 'Джордж Р. Р. Мартин',
//   show() {
//     setTimeout(() => console.log(this.author, this.name))
//   }
// }

// book2.show()


// const film = {
//   name: 'Властелин Колец',
//   showName(director, year) {
//     console.log(this.name, director, year)
//   }
// }

// const fn = film.showName

// fn.call(film, 'Питер Джексон', 2001)

// fn.apply(film, ['Питер Джексон', 2001])




// Homework 13

const myCafe = new Cafe('Coffee House', 'ул. Примерная, 123');

const espresso = new drinks.Coffee('Эспрессо', 50, 150, 90, 'Арабика', false, 0);

const greenTea = new drinks.Tea('Зеленый чай', 200, 100, 80, false, 0, 'Мята');

const lemonade = new drinks.Lemonade('Лимонад', 300, 120, 5, 'Лимон', 'Газированный');

const appleJuice = new drinks.Juice('Яблочный сок', 250, 80, 5, 'Яблоки', 'Сахар', 'Вода');

const pinaColada = new drinks.Cocktail('Пина Колада', 350, 250, 5, true, 'Ананас');

myCafe.getCafeInfo();
myCafe.orderDrink(espresso);
myCafe.orderDrink(greenTea);
myCafe.orderDrink(lemonade);
myCafe.orderDrink(appleJuice);
myCafe.orderDrink(pinaColada);



console.log(appleJuice.getInfo());