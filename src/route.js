const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'entrer-room' }))
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)
route.get('/room', (req, res) => res.render('room'))
route.get('/room/:room/:question/:action', QuestionController.index)
// para pegar um atributo nas rotas através do ejs é necessário usar a sintaxe <%=req.params.${qualparametro}%>

module.exports = route
