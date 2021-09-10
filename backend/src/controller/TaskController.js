const TaskModel = require('../model/TaskModel')

class TaskController {

    //Cria uma nova tarefa no bd
    async create(req, res) {
        const task = new TaskModel(req.body); //chega no corpo da requisição
        await task
            .save() //node salva
            .then(response => {
                return res.status(200).json(response); //retorna que deu certo
            })
            .catch(error => {
                return res.status(500).json(error) //retorna oq deu de errado
            });
    }

    async update(req, res) {

        await TaskModel.findByIdAndUpdate({ '_id': req.params.id }, req.body)
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async search(req, res) {
        await TaskModel.findOne({'cpf': req.params.cpf})
            .then(response => {
                if(response) 
                    return res.status(200).json(response);
                else
                    return res.status(404).json({error: 'Usuário não encontrado!'});
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

}

module.exports = new TaskController();