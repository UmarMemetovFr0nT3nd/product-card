// Зфадание 3, 5
const { productCards } = await import('./product-cards.js');

const productCardsTemplate = document.querySelector('#product-card-template');
const productList = document.querySelector('.product-list');

function getDisplayCards(cardsArray) {
  cardsArray.forEach(product => {
    const productCopy = productCardsTemplate.content.cloneNode(true);
    productCopy.querySelector('.card__image').src = product.image;
    productCopy.querySelector('.card__image').alt = product.name;
    productCopy.querySelector('.card__category').textContent = product.category;
    productCopy.querySelector('.card__name').textContent = product.name;
    productCopy.querySelector('.card__description').textContent = product.description;
    productCopy.querySelector('.compound__list').innerHTML = product.compound.map(item => `<li>${item}</li>`).join('');
    productCopy.querySelector('#card__price').innerHTML = product.price;
    productList.appendChild(productCopy);
  });
}

function getNumberCards() {
  const howManyCards = prompt('Сколько карточек вы хотите отобразить?');
  const count = Number(howManyCards);
  if (isNaN(count) || count < 1 || count > 5) {
    alert('Пожалуйста, введите корректное число от 1 до 5!');
    return 0;
  }
  return count;
}

const cardsCount = getNumberCards();
if (cardsCount > 0) {
  const slicedCards = productCards.slice(0, cardsCount);
  getDisplayCards(slicedCards);
}

// Задание 4

const accArrayProducts = productCards.reduce((acc, product) => {
  return [...acc, { [product.name]: product.description }]
}, [])

console.log(accArrayProducts);