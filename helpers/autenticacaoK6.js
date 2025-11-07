import http from 'k6/http';
const postLoginFuncionario = JSON.parse(open('../fixtures/postLoginFuncionario.json'));
const postLoginAluno = JSON.parse(open('../fixtures/postLoginAluno.json'));
import { pegarBaseURL } from "../utils/variaveis.js";

export function obterTokenFuncionario() {   
  const url = pegarBaseURL() + '/funcionarios/login';  

  const payload = JSON.stringify(postLoginFuncionario);

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  return res.json('token');

}


export function obterTokenAluno() {   
  const url = pegarBaseURL() + '/alunos/login';  // pegarBaseURL() + '/login';

  const payload = JSON.stringify(postLoginAluno);

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  return res.json('token');


}