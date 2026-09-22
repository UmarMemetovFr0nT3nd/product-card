// Задание 5


export class Form {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
  }

  getValue() {

    let user = null; 
    const modalPopUp = document.querySelector('.modal')

    this.form.addEventListener('submit', (event) => {
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
  }

  chekValidity() {


  if (this.form) {
    const passwordInput = this.form.querySelector('#signUpPassword');
    const passwordRepeatInput = this.form.querySelector('#signUpPasswordRepeat');

    function checkLiveMatch() {
      if (passwordInput.value !== passwordRepeatInput.value) {
        passwordRepeatInput.setCustomValidity('Пароли не совпадают!');
      } else {
        passwordRepeatInput.setCustomValidity('');
      }
    };
    passwordInput.addEventListener('input', checkLiveMatch);
    passwordRepeatInput.addEventListener('input', checkLiveMatch);


    const birthDateInput = this.form.querySelector('#signUpBirthDate');

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
  }

  clearForm() {
    const clearButton = document.querySelector('#clearButton')
    clearButton.addEventListener('click', () => {
      this.form.reset();
    })
  }
}
