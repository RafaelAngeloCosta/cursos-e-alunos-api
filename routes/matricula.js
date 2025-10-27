const express = require('express');
const { criarMatricula, listarMatriculas } = require('../controllers/matriculaController');
const { autenticarJWT } = require('../middleware/auth');
const router = express.Router();

router.post('/', autenticarJWT, criarMatricula);
router.get('/', autenticarJWT, listarMatriculas);

module.exports = router;
