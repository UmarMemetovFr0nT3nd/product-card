// Заданиие 4

export class Modal {
  constructor(modalSelector) {
    this.modalWindow = document.querySelector(modalSelector);
  }


    checkModalStatus() {
    if(this.modalWindow.classList.contains('modal-showed')) {
        console.log('Модальное окно открыто!')
      } else {
        console.log('Модальное окно закрыто!')
      }
  }

  openModal() {
    const modalBtn = document.getElementById('buttonModal')

    modalBtn.addEventListener('click', () => {
      this.modalWindow.classList.add('modal-showed')
      document.body.style.overflow = 'hidden'
      this.checkModalStatus()
    })
  }


  closeModal() {
    const modCloseBtn = document.querySelector('.modal__close')

    modCloseBtn.addEventListener('click', () => {
      this.modalWindow.classList.remove('modal-showed')
      document.body.style.overflow = '';
      this.checkModalStatus()
    })
  }


}
