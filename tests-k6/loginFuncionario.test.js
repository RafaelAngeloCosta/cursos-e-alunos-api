import http from 'k6/http';
import { sleep, check } from 'k6';
const postLoginFuncionario = JSON.parse(open('../fixtures/postLoginFuncionario.json'));
import { pegarBaseURL } from "../utils/variaveis.js";

export const options = {

  stages: [     
    //SMOKE 
    { duration: '5s', target: 10 },
    { duration: '20s', target: 10 },
    { duration: '5s', target: 0 },
],

    thresholds:{
    http_req_duration: ['p(90)<3000', 'max<5000'], // 90% das requisições devem ser respondidas em menos de 4ms
    http_req_failed: ['rate<0.01'], // taxa de erro deve ser menor que 1%
   }

};

export default function () {
  // Aqui faz todos os tests
  const url = pegarBaseURL() + '/funcionarios/login'; 

  const payload = JSON.stringify(postLoginFuncionario);

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'Validar que o Status é 200': (r) => r.status === 200,
    'Validar que o token é string': (r) => typeof(r.json().token) == 'string',
  });

   sleep(1);
};