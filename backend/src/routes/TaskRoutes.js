const express = require('express');
const router = express.Router(); //identifica as rotas que estão chegando

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

//toda vez que chega uma requisição do tipo post em /task
router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/:cpf', TaskController.search)


module.exports = router;