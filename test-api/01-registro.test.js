const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();

describe('Testes relacionado ao Registro de Funcionarios', () =>{


    describe('POST /funcionarios/registrar', () =>{
        it('Deve retornar 201 após registrar um novo Funcionário com sucesso', async () => {
            const resposta = await request(process.env.BASE_URL)
                .post('/funcionarios/registrar')
                .set('Content-Type', 'application/json')
                .send({
                    'nome': 'funcionario01',
                    'email': `fun@gmail.com`,
                    'senha': '123456'
                }); 

            expect(resposta.status).to.equal(201); 
         
        });
    });    
});

describe('Testes relacionado ao Registro de Alunos', () =>{    
    describe('POST /alunos/registrar', () =>{
        it('Deve retornar 201 após registrar um novo Aluno com sucesso', async () => {

            const resposta = await request(process.env.BASE_URL)
                .post('/alunos/registrar')
                .set('Content-Type', 'application/json')

                .send({
                    'nome': 'Aluno_teste_01',
                    'email': 'teste01@gmail.com',
                    'senha': '123456'
                }); 

            expect(resposta.status).to.equal(201); 
         
        });    
    }); 

});

