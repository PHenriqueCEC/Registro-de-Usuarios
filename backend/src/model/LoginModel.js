const mongoose = require('../config/database'); //devolve o bd conectado

const Schema = mongoose.Schema; 

const LoginSchema = new Schema({
    
    cpf: {type: String, required: true},
    password: {type: String, required: true}
    
});

module.exports = mongoose.model('Login', LoginSchema);