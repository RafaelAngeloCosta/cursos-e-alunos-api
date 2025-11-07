import http from 'k6/http';
import { sleep, check, group } from 'k6';
import { obterTokenFuncionario } from "../helpers/autenticacaoK6.js";
import { pegarBaseURL } from "../utils/variaveis.js";
import { cursos } from '../model/banco.js';


export const options = {
  iterations: 1,   // 1 forma de utilizar
/*  stages: [     // 3 forma de utilizar
    //SMOKE 
    { duration: '5s', target: 10 },
    { duration: '20s', target: 10 },
    { duration: '5s', target: 0 },
],*/

    thresholds:{
    http_req_duration: ['p(90)<3000', 'max<5000'], // 90% das requisições devem ser respondidas em menos de 4ms
    http_req_failed: ['rate<0.01'], // taxa de erro deve ser menor que 1%
   }

};

export default function () {
  // Aqui faz todos os tests

group('POST /cursos - Sucesso (201 Curso criado)', function () {  
    const token = obterTokenFuncionario();

    const url = pegarBaseURL() + '/cursos';

    const payload = JSON.stringify({
         nome: "CURSO DE TESTE QA 003",
         descricao: "Curso Mentoria 2.0 Turma #3",
         tempo: "40 hr",
         ativo: true
      });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  };


  const res = http.post(url, payload, params);

  console.log('Status:', res.status);
  console.log('Body:', res.body);
  console.log(token);

  check(res, {
    'Validar que o Status é 201': (r) => r.status === 201,
    });
});


group('GET /cursos - Sucesso (200 Lista de cursos)', function () {  
   const token = obterTokenFuncionario();

   const url = pegarBaseURL() + '/cursos';

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  };


  const res = http.get(url, params);

  console.log('Status:', res.status);
  console.log('Body:', res.body);
  console.log(token);

  check(res, {
     'Validar que o status é 200': (r) => r.status ===200,
     'Validar que a resposta é um array': (r) => Array.isArray(r.json()), 
     'Validar que a lista não está vazia': (r) => r.json() && r.json().length > 0,
    });
});



   sleep(1);
};