const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')
const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'entrer-room' }))
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)
route.get('/room/:room', (req, res) => res.render('room'))

// passar info do form para a url
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

// para pegar um atributo nas rotas através do ejs é necessário usar a sintaxe <%=req.params.${qualparametro}%>

module.exports = route
