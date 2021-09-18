const LoginModel = require('../model/LoginModel');

const Login = async (req, res, next) => {

    const { cpf, password } = req.body;
    let exists;

    if (!cpf)
        return res.status(400).json({ error: 'CPF é obrigatório!' })
    else if (!password)
        return res.status(400).json({ error: 'Senha é obrigatório!' })

    else {


        if (req.params.id) {
            exists = await LoginModel.
                find(
                    {
                        'cpf': { '$eq': cpf },
                        'password': { '$eq': password }
                    }
                )
        }

        if (!exists) {
            return res.status(400).json({ error: 'Usuario não encontrado!' })
        }

        next();
    }

}

module.exports = Login;