import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// abrir modal quando o marcar como lido ser clicado
const checkButtons = document.querySelectorAll('.action a.check')

// forEach percorre todos os items de um arquivo
checkButtons.forEach(button => {
  // adicionar escuta de click em todos os buttons
  button.addEventListener('click', handleClick)
})

// abrir modal quando o deletar for clicado
const deleteButton = document.querySelectorAll('.action a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  const text = check ? 'Marcar como lida' : 'Excluir'

  modalTitle.innerHTML = `${text} essa pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  modal.open()
}
