// 3.Задание

// const person = {
//   name: 'Umar',
//   age: 26,
//   sity: 'Bahchisaray',
//   profession: 'Developer',
//   country: 'Russia',
//   email: 'umar@example.com',
//   language: ['russian', 'ukraine', 'turkish'],
// }

// // 4.Задание

// const germanCar = {
//   brand: 'BMW',
//   model: 'X5',
//   year: 2020,
//   color: 'black',
//   transmission: 'automatic',
//   owner: { ...person },
// }

// // 5.Задание

// function chekSpeed(germanCar) {
//   if ('maxSpeed' in germanCar) {
//     return germanCar;
//   } else {
//     const germanSpeedCar = { ...germanCar, 'maxSpeed': 250 }
//     return germanSpeedCar;
//   }
// }

// console.log(chekSpeed(germanCar))

// // 6.Задание

// function logOwnerName(a, {name}) {
//   console.log(`Поздравляем с покупкой автомобиля ${a.brand}, дорогой ${name}!`);
// }

// logOwnerName(germanCar, germanCar.owner)

// // 7.Задание

// let productList = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// // 8.Задание

// const goodFilms = [
//   {title: 'Inception', director: 'Christopher Nolan', year: 2010},
//   {title: 'Lord of the Rings', director: 'Peter Jackson', year: 2001},
//   {title: 'Harry Potter', director: 'Chris Columbus', year: 2001},
//   {title: 'Star Wars', director: 'George Lucas', year: 1977},
// ]

// goodFilms.push({title: 'The Matrix', director: 'Lana Wachowski', year: 1999});

// console.log(goodFilms)

// // 9.Задание

// const goodFilms2 = [
//   {title: 'Green Mile', director: 'Frank Darabont', year: 1999},
//   {title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994},
//   {title: 'Forrest Gump', director: 'Robert Zemeckis', year: 1994},
//   {title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972},
// ]

// const allFilms = [...goodFilms, ...goodFilms2];

// console.log(allFilms)

// // 10.Задание

// const rareFilms = allFilms.map(film => {
//   if (film.year < 2000) {
//     return {...film, isRare: true}
//   } else {
//     return {...film, isRare: false}
//   }
// })

// console.log(rareFilms)