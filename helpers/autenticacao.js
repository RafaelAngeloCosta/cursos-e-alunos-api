const request = require('supertest');
const postLoginFuncionario = require('../fixtures/postLoginFuncionario.json')
const postLoginAluno = require('../fixtures/postLoginAluno.json')   
require('dotenv').config();

 const obterTokenFuncionario = async (usuarioFuncionario, senha)  =>{

        const bodyLoginFuncionario = {...postLoginFuncionario}
        const respostaLogin = await request(process.env.BASE_URL)
            .post('/funcionarios/login')
            .set('Content-Type', 'application/json')
            .send(bodyLoginFuncionario)
            // .send({
            //     'nome': usuarioFuncionario,
            //     'senha': senha
            // }); 

        return token = respostaLogin.body.token

 }


  const obterTokenAluno = async (usuarioAluno, senha)  =>{

        const bodyLoginAluno = {...postLoginAluno}
        const respostaLogin = await request(process.env.BASE_URL)
            .post('/alunos/login')
            .set('Content-Type', 'application/json')
            .send(bodyLoginAluno)
            // .send({
            //     'nome': usuarioAluno,
            //     'senha': senha
            // }); 

        return token = respostaLogin.body.token

 }
 
module.exports = {
    obterTokenFuncionario,
    obterTokenAluno
}
