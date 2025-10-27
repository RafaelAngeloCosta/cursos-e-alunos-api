const { matriculas, alunos, cursos } = require('../model/banco');

function criarMatricula(req, res) {
  if (req.user.tipo !== 'funcionario') return res.status(403).json({ erro: 'Acesso negado' });
  const { alunoId, cursoId } = req.body;
  if (!alunos.find(a => a.id === alunoId)) return res.status(404).json({ erro: 'Aluno não encontrado' });
  if (!cursos.find(c => c.id === cursoId)) return res.status(404).json({ erro: 'Curso não encontrado' });
  if (matriculas.find(m => m.alunoId === alunoId && m.cursoId === cursoId)) {
    return res.status(400).json({ erro: 'Aluno já matriculado neste curso' });
  }
  matriculas.push({ id: matriculas.length + 1, alunoId, cursoId });
  res.status(201).json({ alunoId, cursoId });
}

function listarMatriculas(req, res) {
  if (req.user.tipo !== 'funcionario') return res.status(403).json({ erro: 'Acesso negado' });
  res.json(matriculas);
}

module.exports = { criarMatricula, listarMatriculas };
