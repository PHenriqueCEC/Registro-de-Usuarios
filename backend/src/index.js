const express = require('express');
const server = express(); //inicializa o servidor
server.use(express.json()); //servidor recebe e devolve informacoes em formato json

const TaskRoutes = require('./routes/TaskRoutes'); 
server.use('/task', TaskRoutes); //injeta os arquivos com todas as rotas na API

//função anônima para o servidor ficar "escutando" a porta 3000
server.listen(3000, ()=> {
    console.log('API online');

});