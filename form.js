// Задание 5


export class Form {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
  }

  getValue() {
    let user
    const formData = new FormData(this.form);
    return user = Object.fromEntries(formData.entries());
  }


  cheсkFormValidity() {
    if(this.form.checkValidity()) {
      return true
    } else {
      this.form.reportValidity()
      return false
    }
  }

  clearForm() {
    this.form.reset();
  }
}
