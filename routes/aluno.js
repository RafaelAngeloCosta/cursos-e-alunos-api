const express = require('express');
const { criarAluno, loginAluno, listarCursosAluno } = require('../controllers/alunoController');
const { autenticarJWT } = require('../middleware/auth');
const router = express.Router();

router.post('/registrar', criarAluno);
router.post('/login', loginAluno);
router.get('/meus-cursos', autenticarJWT, listarCursosAluno);

module.exports = router;
