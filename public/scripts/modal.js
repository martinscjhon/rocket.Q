export default function Modal() {
  function open() {
    // função abrir
    document.querySelector('.modal-wrapper').classList.add('active') //adiciona
  }

  function close() {
    // função fechar
    document.querySelector('.modal-wrapper').classList.remove('active') //remove
  }

  return {
    open,
    close
  }
}
