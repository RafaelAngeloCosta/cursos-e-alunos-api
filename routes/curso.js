const express = require('express');
const { criarCurso, listarCursos, ativarCurso, desativarCurso } = require('../controllers/cursoController');
const { autenticarJWT } = require('../middleware/auth');
const router = express.Router();

router.post('/', autenticarJWT, criarCurso);
router.get('/', autenticarJWT, listarCursos);
router.patch('/:id/ativar', autenticarJWT, ativarCurso);
router.patch('/:id/desativar', autenticarJWT, desativarCurso);

module.exports = router;
