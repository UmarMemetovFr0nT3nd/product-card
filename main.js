import { Modal } from "./modal.js"
import { Form } from "./form.js"
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

class GameConsole {
  constructor(name, model, revision, year) {
    this.name = name;
    this.model = model;
    this.revision = revision;
    this.year = year;
  }

  showInfo() {
    console.log(`${this.name} ${this.model}, ${this.revision}, ${this.year} была приобретена.`)
  }
}

const playStation = new GameConsole('PlayStation', '5 PRO', '3 revision', '2026 года')

playStation.showInfo()

class GameComputer extends GameConsole {
  constructor(name, model, year, graphicsCard) {
    super(name, model, null, year)
    this.graphicsCard = graphicsCard
  }

  showComputerInfo() {
    console.log(`${this.name}, ${this.model}, ${this.year}, с ${this.graphicsCard} был приобретён.`)
  }
}

const asusRog = new GameComputer('ASUS', 'ROG Strix G16', '2026 года', 'RTX5070TI')

asusRog.showComputerInfo()

// ----

const modalWindow = new Modal('.modal');

const modalForm = new Form('.modal__signUp')

modalWindow.openModal()
modalWindow.closeModal()
modalWindow.checkModalStatus()

modalForm.getValue()
modalForm.chekValidity()
modalForm.clearForm()



// Задание 6

function showCar() {
  console.log(this.car)
}

const me = { car: 'BMW', showCar };
const father = { car: 'VolksWagen', showCar };
const wife = { car: 'MINI', showCar };

me.showCar()
father.showCar()
wife.showCar()

const showCarFunction = me.showCar.bind(me)

showCarFunction()

const book = {
  name: 'Песнь льда и пламени',
  author: 'Джордж Р. Р. Мартин',
  show() {
    console.log(this.author, this.name)
  }
}

book.show()

function showThis() {
  console.log(this)
}

showThis()


setTimeout(function() {
  console.log(this)
})


const book2 = {
  name: 'Песнь льда и пламени',
  author: 'Джордж Р. Р. Мартин',
  show() {
    setTimeout(() => console.log(this.author, this.name))
  }
}

book2.show()


const film = {
  name: 'Властелин Колец',
  showName(director, year) {
    console.log(this.name, director, year)
  }
}

const fn = film.showName

fn.call(film, 'Питер Джексон', 2001)

fn.apply(film, ['Питер Джексон', 2001])