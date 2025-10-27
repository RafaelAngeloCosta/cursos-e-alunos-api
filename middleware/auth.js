const jwt = require('jsonwebtoken');
const { funcionarios, alunos } = require('../model/banco');

const SECRET = 'segredo';

function autenticarJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ erro: 'Token não fornecido' });
  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ erro: 'Token inválido' });
    req.user = user;
    next();
  });
}

function gerarToken(usuario, tipo) {
  return jwt.sign({ id: usuario.id, tipo }, SECRET, { expiresIn: '1h' });
}

module.exports = { autenticarJWT, gerarToken };
