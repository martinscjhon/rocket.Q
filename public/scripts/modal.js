export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open() {
    // função abrir
    modalWrapper.classList.add('active') //adiciona
  }

  function close() {
    // função fechar
    modalWrapper.classList.remove('active') //remove
  }

  return {
    open,
    close
  }
}
