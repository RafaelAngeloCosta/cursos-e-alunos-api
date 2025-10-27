const { cursos, matriculas } = require('../model/banco');

function criarCurso(req, res) {
  if (req.user.tipo !== 'funcionario') return res.status(403).json({ erro: 'Acesso negado' });
  const { nome, descricao, tempo, ativo } = req.body;
  if (cursos.find(c => c.nome === nome)) {
    return res.status(400).json({ erro: 'Curso já existe' });
  }
  const novo = { id: cursos.length + 1, nome, descricao, tempo, ativo: ativo ?? true };
  cursos.push(novo);
  res.status(201).json(novo);
}

function listarCursos(req, res) {
  if (req.user.tipo === 'aluno') {
    return res.json(cursos.filter(c => c.ativo));
  }
  res.json(cursos);
}

function ativarCurso(req, res) {
  if (req.user.tipo !== 'funcionario') return res.status(403).json({ erro: 'Acesso negado' });
  const curso = cursos.find(c => c.id == req.params.id);
  if (!curso) return res.status(404).json({ erro: 'Curso não encontrado' });
  curso.ativo = true;
  res.json(curso);
}

function desativarCurso(req, res) {
  if (req.user.tipo !== 'funcionario') return res.status(403).json({ erro: 'Acesso negado' });
  const curso = cursos.find(c => c.id == req.params.id);
  if (!curso) return res.status(404).json({ erro: 'Curso não encontrado' });
  if (matriculas.some(m => m.cursoId == curso.id)) {
    return res.status(400).json({ erro: 'Curso vinculado a aluno, não pode ser desativado' });
  }
  curso.ativo = false;
  res.json(curso);
}

module.exports = { criarCurso, listarCursos, ativarCurso, desativarCurso };
