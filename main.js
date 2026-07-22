const productCard = document.querySelector('.card');
const changeColorButton = document.querySelector('#change-card-color-button');

changeColorButton.addEventListener('click', () => {
  productCard.style.backgroundColor = '#95885d';
})

const productCards = document.querySelectorAll('.card');
const changeAllColorButton = document.querySelector('#change-all-cards-color-button');

changeAllColorButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = '#3b3524')
})

const openGoogleButton = document.querySelector('#go-to-google-button');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const question = confirm('Вы уверены, что хотите перейти в Google?');

  if (question === true) {
    window.open('https://www.google.com/');
  } else {
    return;
  }
}

const outputConsoleButton = document.querySelector('#log-to-console-button');

outputConsoleButton.addEventListener('click', () =>outputConsoleLog('Привет, это сообщение выведено в консоль!'));

function outputConsoleLog(message) {
  alert('Вы нажали на кнопку "Вывести в консоль". Сообщение будет выведено в консоль.');
  console.log(message);
}

const headline = document.querySelector('.headline');

headline.addEventListener('mouseover', function() {
  console.log(headline.textContent);
})

const selectColorButton = document.querySelector('#select-button-color');

selectColorButton.addEventListener('click', () => {
  selectColorButton.classList.toggle('active');
});