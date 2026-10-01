// Заданиие 4

export class Modal {
  constructor(modalSelector) {
    this.modalWindow = document.querySelector(modalSelector);
  }




  openModal() {
    this.modalWindow.classList.add('modal-showed')
    document.body.style.overflow = 'hidden'
    this.closeModalButton()
    this.checkModalStatus()
  }


  closeModal() {
    this.modalWindow.classList.remove('modal-showed')
    document.body.style.overflow = '';
    this.checkModalStatus()
  }

  checkModalStatus() {
    if(this.modalWindow.classList.contains('modal-showed')) {
        console.log('Модальное окно открыто!')
        return true
      } else {
        console.log('Модальное окно закрыто!')
        return false
      }
  }

  closeModalButton() {
    const modCloseBtn = document.querySelector('.modal__close')

    modCloseBtn.addEventListener('click', () => {
      this.closeModal()
    })
  }
}
