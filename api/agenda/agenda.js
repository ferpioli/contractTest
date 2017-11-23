const restfull = require('node-restful')

const mongoose = restfull.mongoose


const agendaSchema = new mongoose.schema({
    name: { type: String, required: true },
    nascDia: { type: Number, min: 0, max: 31, required: true },
    nascMes: { type: Number, min: 0, required: true },
    nascAno: { type: Number, min: 1500, max: 2017, required: true },
    rua: { type: String, required: true },
    numero: { type: Number, min: 0, required: true },
    cidade: { type: String, required: true },
    Cep: { type: String, required: false },
    tipo: {
        type: String, required: false, uppercase: true,
        enum: ['CASA', 'TRABALHO', 'OUTRO']
    }
})

module.exports = restfull.model('Agenda' , agendaSchema )