const express = require('express');
const { criarFuncionario, loginFuncionario } = require('../controllers/funcionarioController');
const router = express.Router();

router.post('/registrar', criarFuncionario);
router.post('/login', loginFuncionario);

module.exports = router;
