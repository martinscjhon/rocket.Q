import Modal from './modal.js'

const modal = Modal()

// abrir modal quando o marcar como lido ser clicado
const checkButtons = document.querySelectorAll('.action a.check')

// forEach percorre todos os items de um arquivo
checkButtons.forEach(button => {
  // adicionar escuta de click em todos os buttons
  button.addEventListener('click', event => {
    modal.open()
  })
})
