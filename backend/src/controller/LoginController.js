const LoginModel = require('../model/LoginModel')

class LoginController { 

    async search(req, res) {
        await LoginModel.findOne({'cpf': req.params.cpf})
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

module.exports = new LoginController();