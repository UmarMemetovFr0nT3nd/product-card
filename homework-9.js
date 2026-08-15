// 2. Задание

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fifthNumbers = numbers.slice(4);

console.log(fifthNumbers);

// 3. Задание

const cars = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda'];

const favoriteCar = cars.find(car => car === 'Audi');

console.log(favoriteCar);

// 4. Задание

function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray(fifthNumbers));
console.log(reverseArray(cars));

// 6. Задание

const { comments } = await import('./comments.js');

// 7. Задание

const emailComments = comments.filter(comment => comment.email.includes('.com'));

console.log(emailComments);

// 8. Задание

const postIdComments = comments.map(comment => { 
  return {...comment, postId: comment.Id <= 5 ? 2 : 1}
})

console.log(postIdComments);

// 9. Задание

const idNameComments = comments.map(comment => {
  return {Id: comment.Id, name: comment.name}
})

console.log(idNameComments);

// 10. Задание

const validComments = comments.map(comment => {
  return {...comment, invalid: comment.body.length > 180 ? true : false
  }
})

console.log(validComments);

// 11. Задание

const onlyEmailComments = comments.reduce((acc, comment) => {
  return [...acc, comment.email];
}, []);

console.log(onlyEmailComments);

const onlyEmailComments2 = comments.map(comment => {
  return comment.email
})

console.log(onlyEmailComments2);

// 12. Задание

const onlyEmailString = onlyEmailComments.join(', ');

console.log(onlyEmailString);

const onlyEmailString2 = onlyEmailComments2.toString();

console.log(onlyEmailString2);