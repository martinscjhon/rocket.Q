const express = require('express') //impotando o express
const route = require('./route')
const path = require('path')

const server = express() //iniciando o express

server.set('view engine', 'ejs') //procurar o arquivo ejs

server.use(express.static('public')) //express use => usar

server.set('views', path.join(__dirname, 'views')) //junta o diretorio (join => juntar)

server.use(route)

server.listen(3000, () => console.log('RODANDO'))
//escolhendo a porta onde o meu node (servidor) rodara
