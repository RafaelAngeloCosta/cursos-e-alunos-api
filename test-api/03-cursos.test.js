const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterTokenFuncionario } = require('../helpers/autenticacao')
const { obterTokenAluno } = require('../helpers/autenticacao')
const postCursos = require('../fixtures/postCursos.json')

describe('Teste relacionado a ação de criar um curso e consultar a lista de Cursos', () =>{

        let token

        beforeEach( async () => { // o beforewach acontece sempre antes do IT
           token =await obterTokenFuncionario('funcionario01','123456')

        })    
   
   
    describe('POST /cursos', () =>{

        
        it('Deve retornar 201 após registrar um novo Curso com sucesso', async () => {
            const bodyCursos = {...postCursos}

            const resposta = await request(process.env.BASE_URL)
                .post('/cursos')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)     
                .send(bodyCursos); 

            expect(resposta.status).to.equal(201);
 
       
        })

        
        it('Deve retornar 400 após tentar registrar um Curso que já esta cadastrado no sistema', async () => {
            const bodyCursos = {...postCursos}

            const resposta = await request(process.env.BASE_URL)
                .post('/cursos')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)    
                .send(bodyCursos); 

            expect(resposta.status).to.equal(400);
       
        });        
  
    });

    describe('GET /cursos', () =>{     
        it('Deve retornar 200 após listar os cursos cadastrados', async () => {

            const resposta = await request(process.env.BASE_URL)
                .get('/cursos')
                .set('Authorization', 'Bearer ' + token)     
 
            expect(resposta.status).to.equal(200);
  
       
        })


    });

});

