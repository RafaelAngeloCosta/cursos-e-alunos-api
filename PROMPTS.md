Objetivo
- Criar uma API Rest que gerencia cursos, alunos e matrículas, simulando um sistema de ensino.

Contexto
- A API possui as seguintes funcionalidades: registro de funcionário, registro de aluno, registro de curso, registro de matrícula do aluno em um curso, busca de alunos, busca de cursos, busca de alunos e seus cursos.
- Para que eu possa usar as funcionalidades, preciso fazer login como funcionário.
- Para que o aluno possa consultar seus cursos matriculados, ele precisa fazer login como aluno.
- Alunos apenas consultam os cursos matriculados, funcionários acessam todas as funcionalidades do sistema.
- Os cursos devem conter os seguintes campos: nome, tempo de duração e se está ativo ou não.
- O funcionário pode ativar ou desativar um curso e neste caso se estiver ativo o curso é apresentado na lista do aluno caso o contrário não deve ser apresentado na lista do aluno.
- O curso não pode ser desativado se o mesmo estiver vinculado a um aluno.
- O aluno não pode ser cadastrado no mesmo curso mais de uma vez, caso já esteja vinculado no curso não deve ser apresentado na lista do aluno,  precisa de validação.

Regras
- Não me pergunte nada, só faça.
- A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API.
- Adicione um endpoint para renderizar o Swagger.
- Construa um arquivo README para descrever o projeto
- Divida a API em camadas: routes, controllers, service e model
- Armazene os dados da API em um banco de dados em memória
- Utilize a biblioteca express para construir a API Rest
- Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto.
- Nome das tabelas do banco de dados em portugues.
