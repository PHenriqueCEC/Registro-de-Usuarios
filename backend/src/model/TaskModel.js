const mongoose = require('../config/database'); //devolve o bd conectado

const Schema = mongoose.Schema; //representação de informacoes que serao armazenadas no bd

const TaskSchema = new Schema({
    
    macaddress: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    country: {type: String, required: true},
    state: {type: String, required: true},
    city: {type: String, required: true},
    cep: {type: String, required: true},
    street: {type: String, required: true},
    number: {type: Number, required: true},
    complement: {type: String, required: true},
    cpf: {type: String, required: true},
    pis: {type: String, required: true},
    password: {type: String, required: true}

});

module.exports = mongoose.model('Task', TaskSchema);

 