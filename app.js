const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./recursos/swagger.json');

const rotasFuncionario = require('./routes/funcionario');
const rotasAluno = require('./routes/aluno');
const rotasCurso = require('./routes/curso');
const rotasMatricula = require('./routes/matricula');
const { autenticarJWT } = require('./middleware/auth');

const app = express();
app.use(bodyParser.json());

app.use('/funcionarios', rotasFuncionario);
app.use('/alunos', rotasAluno);
app.use('/cursos', rotasCurso);
app.use('/matriculas', rotasMatricula);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});
