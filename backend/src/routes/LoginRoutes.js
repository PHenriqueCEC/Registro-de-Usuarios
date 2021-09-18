const express = require('express');
const router = express.Router(); 

const LoginController = require('../controller/LoginController');
const LoginValidation = require('../middlewares/LoginValidation');

router.post('/', LoginValidation, LoginController.search());

module.exports = router;