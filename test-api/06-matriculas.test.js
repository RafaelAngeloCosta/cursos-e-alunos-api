const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterTokenFuncionario } = require('../helpers/autenticacao')
const postCursos = require('../fixtures/postCursos.json')

describe('Teste relacionado a ação de criar um curso e consultar a lista de Cursos', () =>{

        let token

        beforeEach( async () => { // o beforewach acontece sempre antes do IT
           token =await obterTokenFuncionario('funcionario01','123456')

        })    
   
   
    describe('POST /matriculas', () =>{
        it('Deve retornar 201 após registrar um Aluno em um Curso com sucesso', async () => {
            const bodyCursos = {...postCursos}

            const resposta = await request(process.env.BASE_URL)
                .post('/matriculas')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)     
                .send({
                        'alunoId': 1,
                        'cursoId': 1
                    }); 

            expect(resposta.status).to.equal(201);
  
       
        })

        
        it('Deve retornar 400 após tentar registrar um Aluno no mesmo Curso que ele já esta cadastrado no sistema', async () => {
            const bodyCursos = {...postCursos}

            const resposta = await request(process.env.BASE_URL)
                .post('/matriculas')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)    
                .send({
                        'alunoId': 1,
                        'cursoId': 1
                    });  

            expect(resposta.status).to.equal(400);
   
       
        });        
  
    });

    describe('GET /matriculas', () =>{     
        it('Deve retornar 200 após listar os Alunos matriculados nos Cursos cadastrados', async () => {
            const bodyCursos = {...postCursos}

            const resposta = await request(process.env.BASE_URL)
                .get('/matriculas')
                .set('Authorization', 'Bearer ' + token)     

            expect(resposta.status).to.equal(200);
  
       
        })


    });

});

