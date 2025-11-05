const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const postLoginFuncionario = require('../fixtures/postLoginFuncionario.json')
const postLoginAluno = require('../fixtures/postLoginAluno.json')   

describe('Testes relacionados ao Login do Funcionario', () =>{
    describe('POST /login', () =>{
        it('Deve retornar 200 com um token em string quando usar credenciais validas  no login de um Funcionário', async () => {

            const bodyLoginFuncionario = {...postLoginFuncionario}
            const resposta = await request(process.env.BASE_URL)
                .post('/funcionarios/login')
                .set('Content-Type', 'application/json')
                .send(bodyLoginFuncionario)

            expect(resposta.status).to.equal(200); 
            expect(resposta.body.token).to.be.a('string');  
         
        })
    
})
})


describe('Testes relacionados ao Login do Aluno', () =>{
    describe('POST /login', () =>{
        it('Deve retornar 200 com um token em string quando usar credenciais validas no login de um Aluno', async () => {

            const bodyLoginAluno = {...postLoginAluno}
            const resposta = await request(process.env.BASE_URL)
                .post('/alunos/login')
                .set('Content-Type', 'application/json')
                .send(bodyLoginAluno)

            expect(resposta.status).to.equal(200); 
            expect(resposta.body.token).to.be.a('string');  
         
        })
    
})
})