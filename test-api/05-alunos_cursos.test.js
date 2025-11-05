const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterTokenAluno } = require('../helpers/autenticacao')

describe('Teste relacionado a Listar cursos do aluno logado', () =>{

        let token

        beforeEach( async () => { // o beforewach acontece sempre antes do IT
           token =await obterTokenAluno('Aluno_teste_01','123456')

        })    
   
   
    describe('GET /alunos/meus-cursos', () =>{     
        it('Deve retornar 200 após listar os cursos do aluno logado', async () => {

            const resposta = await request(process.env.BASE_URL)
                .get('/alunos/meus-cursos')
                .set('Authorization', 'Bearer ' + token)     


            expect(resposta.status).to.equal(200);
  
       
        })


    });

});

