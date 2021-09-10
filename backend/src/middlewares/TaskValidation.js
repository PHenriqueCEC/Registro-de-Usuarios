const TaskModel = require('../model/TaskModel');

const TaskValidation = async (req, res, next) => {

    //separando po constantes oq está vindo pelo corpo da requisição

    const { macaddress, name, email, country, state, city, cep, street,
        number,
        complement,
        cpf,
        pis,
        password } = req.body;


    if (!macaddress)
        return res.status(400).json({ error: 'Macaddress é obrigatório!' })
    else if (!name)
        return res.status(400).json({ error: 'Nome é obrigatório!' })
    else if (!email)
        return res.status(400).json({ error: 'Email é obrigatório!' })
    else if (!country)
        return res.status(400).json({ error: 'País é obrigatório!' })
    else if (!state)
        return res.status(400).json({ error: 'Estado é obrigatório!' })
    else if (!city)
        return res.status(400).json({ error: 'Cidade é obrigatório!' })
    else if (!cep)
        return res.status(400).json({ error: 'CEP é obrigatório!' })
    else if (!street)
        return res.status(400).json({ error: 'Rua é obrigatório!' })
    else if (!number)
        return res.status(400).json({ error: 'Número é obrigatório!' })
    else if (!complement)
        return res.status(400).json({ error: 'Complemento é obrigatório!' })
    else if (!cpf)
        return res.status(400).json({ error: 'CPF é obrigatório!' })
    else if (!pis)
        return res.status(400).json({ error: 'PIS é obrigatório!' })
    else if (!password)
        return res.status(400).json({ error: 'Senha é obrigatório!' })
    else {
        let exists;

         if (req.params.id) {
            exists = await TaskModel.
                findOne(
                    {
                        '_id': { '$ne': req.params.id }, //ignora o id do proprio cadastro
                        'cpf': { '$eq': cpf },
                        'email': { '$eq': email },
                        'pis': { '$eq' : pis }
                    });
        } 
        else {

            exists = await TaskModel.
                findOne(
                    {
                        'cpf' : { '$eq': cpf },
                        /* 'email': { '$eq': email },
                        'pis': { '$eq' : pis }, */
                    });
        }

        if (exists) {
            return res.status(400).json({ error: 'Já existe um usuário com esse CPF' })
        }

        next();
    }

}

module.exports = TaskValidation;

