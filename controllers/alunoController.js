const { alunos, matriculas, cursos } = require('../model/banco');
const { gerarToken } = require('../middleware/auth');

function criarAluno(req, res) {
  const { nome, email, senha } = req.body;
  if (alunos.find(a => a.nome === nome)) {
    return res.status(400).json({ erro: 'Aluno já existe' });
  }
  const novo = { id: alunos.length + 1, nome, email, senha };
  alunos.push(novo);
  res.status(201).json({ id: novo.id, nome: novo.nome, email: novo.email });
}

function loginAluno(req, res) {
  const { nome, senha } = req.body;
  const aluno = alunos.find(a => a.nome === nome && a.senha === senha);
  if (!aluno) return res.status(401).json({ erro: 'Credenciais inválidas' });
  const token = gerarToken(aluno, 'aluno');
  res.json({ token });
}

function listarCursosAluno(req, res) {
  if (req.user.tipo !== 'aluno') return res.status(403).json({ erro: 'Acesso negado' });
  const alunoId = req.user.id;
  const cursosMatriculados = matriculas
    .filter(m => m.alunoId === alunoId)
    .map(m => cursos.find(c => c.id === m.cursoId && c.ativo));
  res.json({ cursos: cursosMatriculados.filter(Boolean) });
}

module.exports = { criarAluno, loginAluno, listarCursosAluno };
