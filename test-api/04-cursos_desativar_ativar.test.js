const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterTokenFuncionario } = require('../helpers/autenticacao')
const postCursos = require('../fixtures/postCursos.json')

describe('Teste relacionado a ação de desativar e ativar um curso cadastrado no sistema', () =>{

        let token

        beforeEach( async () => { // o beforewach acontece sempre antes do IT
           token =await obterTokenFuncionario('funcionario01','123456')

        })    
      
    describe('PATCH /cursos/{id}/desativar', () =>{       
        it('Deve retornar 200 após o curso ser desativado com sucesso', async () => {
            const bodyCursos = {...postCursos}

            const resposta = await request(process.env.BASE_URL)
                .patch('/cursos/1/desativar')
                .set('Authorization', 'Bearer ' + token)     

            // console.log(resposta.body)  
            // console.log(resposta.status)
            expect(resposta.status).to.equal(200);
            expect(resposta.body.ativo).to.equal(false);
 
       
        })      

    });

describe('PATCH /cursos/{id}/ativar', () =>{       
        it('Deve retornar 200 após o curso ser ativado com sucesso', async () => {
           
            const resposta = await request(process.env.BASE_URL)
                .patch('/cursos/1/ativar')
                .set('Authorization', 'Bearer ' + token)     

            // console.log(resposta.body)  
            // console.log(resposta.status)
            expect(resposta.status).to.equal(200);
            expect(resposta.body.ativo).to.equal(true);
 
       
        })       

    });    



});

