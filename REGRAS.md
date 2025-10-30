# REGRAS DE NEGÓCIO

RF01 - Registro de Funcionário
Descrição: Permitir o cadastro de funcionários informando nome, email e senha. Funcionários podem acessar todas as funcionalidades do sistema após login.
Justificativa: Controle de acesso administrativo e gerenciamento do sistema.

RF02 - Registro de Aluno
Descrição: Permitir o cadastro de alunos informando nome, email e senha. Alunos podem consultar apenas os cursos em que estão matriculados após login.
Justificativa: Controle de acesso individualizado para alunos.

RF03 - Registro de Curso
Descrição: Permitir o cadastro de cursos informando nome, descrição, tempo de duração e se está ativo ou não.
Justificativa: Gerenciar a oferta de cursos disponíveis para matrícula.

RF04 - Ativação e Desativação de Curso
Descrição: Funcionário pode ativar ou desativar um curso. Cursos ativos são apresentados na lista de cursos disponíveis para alunos. Não é permitido desativar um curso que esteja vinculado a algum aluno.
Justificativa: Garantir que apenas cursos disponíveis e sem alunos vinculados possam ser desativados.

RF05 - Registro de Matrícula
Descrição: Permitir que um funcionário realize a matrícula de um aluno em um curso. Não é permitido matricular o mesmo aluno mais de uma vez no mesmo curso.
Justificativa: Evitar duplicidade de matrículas e garantir integridade dos dados.

RF06 - Consulta de Cursos e Alunos
Descrição: Permitir a busca de alunos, busca de cursos e busca de alunos e seus cursos. Alunos só podem consultar os cursos em que estão matriculados. Funcionários podem consultar todas as informações.
Justificativa: Garantir acesso restrito e seguro às informações conforme o perfil do usuário.

# Épicos

ÉPICO 1 - Gestão de Usuários
Descrição: Engloba todas as funcionalidades relacionadas ao cadastro, autenticação e controle de acesso de funcionários e alunos.

ÉPICO 2 - Gestão de Cursos
Descrição: Abrange o cadastro, ativação, desativação e consulta de cursos disponíveis no sistema.

ÉPICO 3 - Matrícula de Alunos
Descrição: Trata do processo de matrícula de alunos em cursos, garantindo as regras de integridade e consulta de matrículas.

# User Stories

US01 - Como funcionário, quero me cadastrar informando nome, email e senha, para acessar todas as funcionalidades administrativas do sistema.

US02 - Como funcionário, quero fazer login para acessar as funcionalidades restritas do sistema.

US03 - Como aluno, quero me cadastrar informando nome, email e senha, para acessar meus cursos matriculados.

US04 - Como aluno, quero fazer login para consultar meus cursos matriculados.

US05 - Como funcionário, quero cadastrar cursos informando nome, descrição, tempo de duração e status de ativo, para gerenciar a oferta de cursos.

US06 - Como funcionário, quero ativar ou desativar cursos, para controlar a disponibilidade dos cursos para matrícula.

US07 - Como funcionário, não quero desativar cursos que tenham alunos matriculados, para garantir integridade das matrículas.

US08 - Como funcionário, quero matricular alunos em cursos, garantindo que não haja duplicidade de matrícula.

US09 - Como funcionário, quero consultar todos os alunos, cursos e matrículas, para gerenciar o sistema.

US10 - Como aluno, quero consultar apenas os cursos em que estou matriculado, para visualizar minha grade de estudos.

# Home Page

## Título
Sistema de Gerenciamento de Cursos, Alunos e Matrículas

## Ideia do Projeto
Este projeto consiste em uma API Rest simples para gerenciar cursos, alunos, funcionários e matrículas em um sistema de ensino. O objetivo é permitir o controle eficiente de cadastros, matrículas e consultas, garantindo regras de negócio claras para cada perfil de usuário (aluno e funcionário) e facilitando a administração das informações de forma segura e organizada.

# Requisitos Não Funcionais (Versão Aprimorada)

RNF01 - Persistência em Memória
Descrição: O sistema deve armazenar todos os dados (alunos, funcionários, cursos, matrículas) exclusivamente em memória durante a execução da aplicação, sem uso de banco de dados externo ou arquivos.
Critério: Todos os dados são perdidos ao reiniciar a aplicação.
Justificativa: Facilitar testes, prototipação e garantir agilidade no desenvolvimento.

RNF02 - Autenticação Segura com JWT
Descrição: O sistema deve utilizar autenticação baseada em token JWT para proteger todos os endpoints sensíveis, diferenciando permissões de aluno e funcionário.
Critério: Endpoints protegidos exigem token JWT válido no header Authorization, e o sistema deve validar o perfil do usuário para cada operação.
Justificativa: Garantir segurança, controle de acesso e segregação de funções.

RNF03 - Documentação Interativa com Swagger
Descrição: O sistema deve disponibilizar documentação completa, interativa e atualizada dos endpoints via Swagger, incluindo exemplos de requisição e resposta, status code e modelos de dados.
Critério: A documentação deve estar acessível no endpoint /docs e refletir fielmente a implementação da API.
Justificativa: Facilitar o uso, integração e manutenção da API por desenvolvedores.

RNF04 - Estrutura Modular e em Camadas
Descrição: O sistema deve ser organizado em camadas separadas de rotas, controladores, serviços e modelos, promovendo modularidade e separação de responsabilidades.
Critério: Cada camada deve conter apenas a lógica correspondente, facilitando manutenção e evolução do código.
Justificativa: Melhor organização, escalabilidade e clareza do projeto.

RNF05 - Nomenclatura em Português
Descrição: Os nomes das "tabelas" (arrays em memória), variáveis principais e endpoints devem estar em português, refletindo o domínio do problema.
Critério: Utilizar nomes claros e aderentes ao contexto do sistema de ensino.
Justificativa: Facilitar entendimento e alinhamento com os requisitos do negócio.

RNF06 - Tempo de Resposta
Descrição: O sistema deve responder a qualquer requisição em até 2 segundos, considerando o contexto de uso em memória.
Critério: Operações de cadastro, consulta, matrícula e autenticação devem ser processadas rapidamente.
Justificativa: Garantir boa experiência de uso e agilidade nas operações.

RNF07 - Validação de Dados
Descrição: O sistema deve validar todos os dados recebidos nas requisições, garantindo que os campos obrigatórios estejam presentes e corretos.
Critério: Rejeitar requisições com dados ausentes ou inválidos, retornando mensagens de erro apropriadas.
Justificativa: Garantir integridade e confiabilidade das informações.


# Testes Não Funcionais (Baseados na ISO-29119-3)

## Eficiência de Performance
- Testar se todas as operações da API (cadastro, consulta, matrícula, autenticação) respondem em até 2 segundos, mesmo sob carga moderada de requisições simultâneas.

## Compatibilidade
- Testar o funcionamento da API em diferentes ambientes de execução Node.js e com diferentes ferramentas de consumo de API (Postman, Swagger UI, curl).

## Usabilidade
- Verificar se a documentação Swagger está clara, completa e permite fácil entendimento e uso dos endpoints por desenvolvedores.
- Validar se as mensagens de erro retornadas pela API são compreensíveis e orientam o usuário para correção.

## Confiabilidade
- Realizar testes de repetição de operações (ex: múltiplos cadastros, consultas e matrículas) para garantir que o sistema não apresente falhas ou comportamentos inesperados.
- Testar a tolerância a falhas simulando requisições inválidas e verificando se a API responde adequadamente sem comprometer o funcionamento.

## Segurança
- Testar se endpoints protegidos rejeitam requisições sem token JWT ou com token inválido.
- Verificar se permissões de acesso (aluno x funcionário) são respeitadas em todos os endpoints.

## Manutenibilidade
- Validar se a separação em camadas (rotas, controladores, serviços, modelos) permite fácil alteração e correção de funcionalidades sem impacto em outras partes do sistema.

## Portabilidade
- Testar a instalação e execução da API em diferentes sistemas operacionais (Windows, Linux) e versões do Node.js suportadas.

## Eficácia
- Verificar se os usuários (aluno e funcionário) conseguem atingir seus objetivos (cadastro, login, matrícula, consulta) de forma completa e correta, conforme as regras de negócio implementadas.

# Casos de Teste (Baseados na ISO-29119-3)

ID: CT01/1
Título: Cadastro de Funcionário com Dados Válidos
Objetivo: Verificar se é possível cadastrar um novo funcionário com nome, email e senha válidos.
Prioridade: Alta
Rastreabilidade: RF01
Pré-Condições: Nenhum funcionário cadastrado com o mesmo nome/email.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar requisição POST para /funcionarios/registrar com nome, email e senha válidos | Funcionário cadastrado com sucesso (status 201) |

Pós-Condições: Funcionário cadastrado disponível para login.

ID: CT01/2
Título: Cadastro de Funcionário com Nome/Email Duplicado
Objetivo: Verificar se o sistema impede cadastro de funcionário com nome ou email já existente.
Prioridade: Alta
Rastreabilidade: RF01
Pré-Condições: Funcionário já cadastrado com o mesmo nome/email.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar requisição POST para /funcionarios/registrar com nome/email já cadastrado | Retorno de erro informando que o funcionário já existe (status 400) |

Pós-Condições: Nenhum novo funcionário cadastrado.

ID: CT02/1
Título: Login de Funcionário com Credenciais Válidas
Objetivo: Verificar se o funcionário consegue realizar login com nome e senha corretos.
Prioridade: Alta
Rastreabilidade: RF01
Pré-Condições: Funcionário cadastrado.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar requisição POST para /funcionarios/login com nome e senha corretos | Retorno de token JWT (status 200) |

Pós-Condições: Token JWT disponível para uso nos endpoints protegidos.

ID: CT02/2
Título: Login de Funcionário com Senha Incorreta
Objetivo: Verificar se o sistema impede login com senha incorreta.
Prioridade: Alta
Rastreabilidade: RF01
Pré-Condições: Funcionário cadastrado.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar requisição POST para /funcionarios/login com senha incorreta | Retorno de erro de credenciais inválidas (status 401) |

Pós-Condições: Login não realizado, sem token JWT gerado.

ID: CT03/1
Título: Cadastro de Aluno com Dados Válidos
Objetivo: Verificar se é possível cadastrar um novo aluno com nome, email e senha válidos.
Prioridade: Alta
Rastreabilidade: RF02
Pré-Condições: Nenhum aluno cadastrado com o mesmo nome/email.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar requisição POST para /alunos/registrar com nome, email e senha válidos | Aluno cadastrado com sucesso (status 201) |

Pós-Condições: Aluno cadastrado disponível para login.

ID: CT03/2
Título: Cadastro de Aluno com Nome/Email Duplicado
Objetivo: Verificar se o sistema impede cadastro de aluno com nome ou email já existente.
Prioridade: Alta
Rastreabilidade: RF02
Pré-Condições: Aluno já cadastrado com o mesmo nome/email.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar requisição POST para /alunos/registrar com nome/email já cadastrado | Retorno de erro informando que o aluno já existe (status 400) |

Pós-Condições: Nenhum novo aluno cadastrado.

ID: CT04/1
Título: Login de Aluno com Credenciais Válidas
Objetivo: Verificar se o aluno consegue realizar login com nome e senha corretos.
Prioridade: Alta
Rastreabilidade: RF02
Pré-Condições: Aluno cadastrado.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar requisição POST para /alunos/login com nome e senha corretos | Retorno de token JWT (status 200) |

Pós-Condições: Token JWT disponível para uso nos endpoints protegidos.

ID: CT04/2
Título: Login de Aluno com Senha Incorreta
Objetivo: Verificar se o sistema impede login de aluno com senha incorreta.
Prioridade: Alta
Rastreabilidade: RF02
Pré-Condições: Aluno cadastrado.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar requisição POST para /alunos/login com senha incorreta | Retorno de erro de credenciais inválidas (status 401) |

Pós-Condições: Login não realizado, sem token JWT gerado.

ID: CT05/1
Título: Cadastro de Curso com Dados Válidos
Objetivo: Verificar se é possível cadastrar um novo curso com nome, descrição, tempo e status de ativo.
Prioridade: Alta
Rastreabilidade: RF03
Pré-Condições: Funcionário autenticado (token JWT válido).

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar requisição POST para /cursos com dados válidos | Curso cadastrado com sucesso (status 201) |

Pós-Condições: Curso cadastrado disponível para matrícula.

ID: CT05/2
Título: Cadastro de Curso com Nome Duplicado
Objetivo: Verificar se o sistema impede cadastro de curso com nome já existente.
Prioridade: Alta
Rastreabilidade: RF03
Pré-Condições: Funcionário autenticado, curso já cadastrado com o mesmo nome.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar requisição POST para /cursos com nome já cadastrado | Retorno de erro informando que o curso já existe (status 400) |

Pós-Condições: Nenhum novo curso cadastrado.

ID: CT06/1
Título: Desativação de Curso sem Alunos Matriculados
Objetivo: Verificar se é possível desativar um curso sem alunos matriculados.
Prioridade: Alta
Rastreabilidade: RF04
Pré-Condições: Funcionário autenticado, curso cadastrado sem alunos matriculados.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar PATCH para /cursos/{id}/desativar | Curso desativado com sucesso (status 200) |

Pós-Condições: Curso desativado e não disponível para matrícula.

ID: CT06/2
Título: Desativação de Curso com Alunos Matriculados
Objetivo: Verificar se o sistema impede desativação de curso com alunos matriculados.
Prioridade: Alta
Rastreabilidade: RF04
Pré-Condições: Funcionário autenticado, curso cadastrado com pelo menos um aluno matriculado.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar PATCH para /cursos/{id}/desativar | Retorno de erro informando que o curso está vinculado a aluno (status 400) |

Pós-Condições: Curso permanece ativo.

ID: CT07/1
Título: Matrícula de Aluno em Curso
Objetivo: Verificar se é possível matricular um aluno em um curso.
Prioridade: Alta
Rastreabilidade: RF05
Pré-Condições: Funcionário autenticado, aluno e curso cadastrados.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar POST para /matriculas com alunoId e cursoId válidos | Matrícula realizada com sucesso (status 201) |

Pós-Condições: Aluno matriculado no curso.

ID: CT07/2
Título: Matrícula Duplicada de Aluno em Curso
Objetivo: Verificar se o sistema impede matrícula duplicada de aluno no mesmo curso.
Prioridade: Alta
Rastreabilidade: RF05
Pré-Condições: Funcionário autenticado, aluno já matriculado no curso.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Enviar POST para /matriculas com os mesmos alunoId e cursoId | Retorno de erro informando que o aluno já está matriculado (status 400) |

Pós-Condições: Aluno permanece matriculado apenas uma vez no curso.

ID: CT08/1
Título: Consulta de Cursos e Alunos por Funcionário
Objetivo: Verificar se o funcionário consegue consultar todos os cursos e alunos cadastrados.
Prioridade: Média
Rastreabilidade: RF06
Pré-Condições: Funcionário autenticado, dados cadastrados.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Funcionário envia GET para /cursos e /alunos | Retorno de todos os cursos e alunos cadastrados |

Pós-Condições: Funcionário visualiza todos os dados cadastrados.

ID: CT08/2
Título: Consulta de Cursos Matriculados por Aluno
Objetivo: Verificar se o aluno consegue consultar apenas os cursos em que está matriculado.
Prioridade: Média
Rastreabilidade: RF06
Pré-Condições: Aluno autenticado, dados cadastrados.

| Passos | Ação | Resultados Esperados |
|--------|------|---------------------|
| Passo 1 | Aluno envia GET para /alunos/meus-cursos | Retorno apenas dos cursos em que está matriculado |

Pós-Condições: Aluno visualiza apenas seus cursos matriculados.
