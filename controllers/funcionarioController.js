const { funcionarios } = require('../model/banco');
const { gerarToken } = require('../middleware/auth');

function criarFuncionario(req, res) {
  const { nome, email, senha } = req.body;
  if (funcionarios.find(f => f.nome === nome)) {
    return res.status(400).json({ erro: 'Funcionário já existe' });
  }
  const novo = { id: funcionarios.length + 1, nome, email, senha };
  funcionarios.push(novo);
  res.status(201).json({ id: novo.id, nome: novo.nome, email: novo.email });
}

function loginFuncionario(req, res) {
  const { nome, senha } = req.body;
  const funcionario = funcionarios.find(f => f.nome === nome && f.senha === senha);
  if (!funcionario) return res.status(401).json({ erro: 'Credenciais inválidas' });
  const token = gerarToken(funcionario, 'funcionario');
  res.json({ token });
}

module.exports = { criarFuncionario, loginFuncionario };
