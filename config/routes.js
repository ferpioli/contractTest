const express = require('express')

module.exports = function(server) {

// API Routes

const router = express.Router()
server.use('/api', router)



const Agenda = require('../api/agenda/agendaService')
agendaService.register(router, '/agendas')

}