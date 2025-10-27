# Cursos e Alunos API

API Rest para gerenciar cursos, alunos e matrículas, simulando um sistema de ensino.

## Funcionalidades
- Registro de funcionário
- Registro de aluno
- Registro de curso
- Registro de matrícula do aluno em um curso
- Busca de alunos
- Busca de cursos
- Busca de alunos e seus cursos

## Regras de Acesso
- Funcionário: acesso total (CRUD de cursos, alunos, matrículas)
- Aluno: consulta apenas aos cursos em que está matriculado

## Autenticação
- JWT obrigatório
- Middleware de autenticação
- Funcionário e aluno possuem login distintos

## Estrutura do Projeto
- `routes/` - Rotas da API
- `controllers/` - Lógica dos endpoints
- `service/` - Regras de negócio
- `model/` - Modelos e "tabelas" em memória
- `recursos/` - Documentação Swagger

## Banco de Dados
- Em memória
- Tabelas com nomes em português

## Documentação
- Swagger disponível em [`/docs`](http://localhost:3000/docs)

## Endpoints Principais

### Funcionário
- `POST /funcionarios/registrar` — Cadastro de funcionário (nome, email, senha)
- `POST /funcionarios/login` — Login de funcionário (nome, senha)

### Aluno
- `POST /alunos/registrar` — Cadastro de aluno (nome, email, senha)
- `POST /alunos/login` — Login de aluno (nome, senha)
- `GET /alunos/meus-cursos` — Listar cursos em que o aluno está matriculado (requer autenticação do aluno)

### Curso
- `POST /cursos` — Cadastro de curso (nome, descricao, tempo, ativo) (requer autenticação de funcionário)
- `GET /cursos` — Listar cursos (funcionário vê todos, aluno vê apenas ativos)
- `PATCH /cursos/{id}/ativar` — Ativar curso (requer autenticação de funcionário)
- `PATCH /cursos/{id}/desativar` — Desativar curso (requer autenticação de funcionário, não pode desativar se houver alunos matriculados)

### Matrícula
- `POST /matriculas` — Matricular aluno em curso (alunoId, cursoId) (requer autenticação de funcionário)
- `GET /matriculas` — Listar todas as matrículas (requer autenticação de funcionário)

#### Observações
- Todos os endpoints protegidos requerem o envio do token JWT no header Authorization: `Bearer <token>`
- Os modelos de dados e exemplos de resposta estão detalhados na documentação Swagger.

## Como rodar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie a API:
   ```bash
   npm start
   ```

## Tecnologias
- Node.js
- Express
- JWT
- Swagger

## Campos dos Dados

- **Aluno:** id, nome, email, senha
- **Funcionário:** id, nome, email, senha
- **Curso:** id, nome, descricao, tempo, ativo
