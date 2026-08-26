const subscribeForm = document.querySelector('.footer__subscribe')

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries())
  console.log(data)
})


const modalBtn = document.getElementById('buttonModal')
const modalPopUp = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
  modalPopUp.classList.add('modal-showed')
  document.body.style.overflow = 'hidden'
})

const modCloseBtn = document.querySelector('.modal__close')

modCloseBtn.addEventListener('click', () => {
  modalPopUp.classList.remove('modal-showed')
  document.body.style.overflow = '';
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
  const form = event.target;
  const formData = new FormData(form);


  user = Object.fromEntries(formData.entries());

  delete user.passwordRepeat;

  const nowDate = new Date();

  user.createdOn = nowDate.toString(' ');


  console.log(user)
  alert('Регистрация прошла успешно!')

  modalPopUp.classList.remove('modal-showed')
  document.body.style.overflow = '';
})

