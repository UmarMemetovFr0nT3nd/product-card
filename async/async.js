let users = [];



async function getUsers() {
  setTimeout(async () => {
    let isSuccess = false;
    try {
      const responce = await fetch('./users.json');
      if (!responce.ok) throw new Error('Данные не найдены!');
      const users = await responce.json();
      users.forEach(user => {
        localStorage.setItem(`user-${user.id}`, JSON.stringify(user))
      })
      isSuccess = true;
    } catch (error) {
      alert(new Error('Данные не найдены!', error).message)
      requestBtn.classList.add('button-request-showed');
      loadPage.classList.remove('load-showed')
    } finally {
      if(isSuccess) {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const info = localStorage.getItem(key);
          const parsedUser = JSON.parse(info);
          users.push(parsedUser);
        }
        getDisplayUsers(users)
        loadPage.classList.remove('load-showed')
        usersList.classList.add('users-showed')
        ruleBtns.classList.add('buttons-container-showed')
      }
    }
  }, 5000);
}




const requestBtn = document.querySelector('#button-request')
const loadPage = document.querySelector('.load')
const usersList = document.querySelector('.users')
const usersListTemplate = document.querySelector('.users-template')
const ruleBtns = document.querySelector('.buttons-container')


if(localStorage.length > 0) {
  requestBtn.classList.remove('button-request-showed')
  loadPage.classList.remove('load-showed')
  usersList.classList.add('users-showed')
  ruleBtns.classList.add('buttons-container-showed')

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const info = localStorage.getItem(key);
    const parsedUser = JSON.parse(info);
    users.push(parsedUser);
  }
  getDisplayUsers(users)
}

function getDisplayUsers(usersArray) {
  usersArray.forEach(user => {
    const usersCopy = usersListTemplate.content.cloneNode(true);
    usersCopy.querySelector('#user-id').textContent = user.id;
    usersCopy.querySelector('#user-name').textContent = user.name;
    usersCopy.querySelector('#user-surname').textContent = user.surname;
    usersCopy.querySelector('#user-email').textContent = user.email;
    usersCopy.querySelector('#user-age').textContent = user.age;
    const usersItem = usersCopy.querySelector('.users__item');
    usersItem.addEventListener('click', () => {
      usersItem.classList.toggle('selected');
    });
    usersList.appendChild(usersCopy);
  });
}


requestBtn.addEventListener('click', () => {
  requestBtn.classList.remove('button-request-showed')
  loadPage.classList.add('load-showed')
  getUsers()
})






const dltSomeCard = document.querySelector('#deleteSomeCard')
const dltAllCard = document.querySelector('#deleteAllCard')
const setAllCard = document.querySelector('#setAllCard')




dltSomeCard.addEventListener('click', () => {
  const selectedCard = usersList.querySelector('.users__item.selected');

  if (!selectedCard) {
    alert('Пожалуйста, выберите карточку для удаления!');
    return;
  }

  const userId = selectedCard.querySelector('#user-id').textContent;

  users = users.filter(user => user.id !== userId);

  localStorage.clear()

  users.forEach(user => {
    localStorage.setItem(`user-${user.id}`, JSON.stringify(user));
  });


  usersList.innerHTML = '';
  getDisplayUsers(users);
});



dltAllCard.addEventListener('click', () => {
  localStorage.clear()
  usersList.innerHTML = ''
  users = []
  getDisplayUsers(users)
})



setAllCard.addEventListener('click', () => {
  if(users.length === 10) {
    alert('Все пользователи получены!')
  } else {
    usersList.classList.remove('users-showed')
    loadPage.classList.add('load-showed')
    users = []
    usersList.innerHTML = ''
    getUsers()
  }
})