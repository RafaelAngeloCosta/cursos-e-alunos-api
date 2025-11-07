import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterTokenAluno } from "../helpers/autenticacaoK6.js";
import { pegarBaseURL } from "../utils/variaveis.js";

// import { pegarBaseURL } from "../utils/variaveis.js";

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
const token = obterTokenAluno();

const url = pegarBaseURL() + '/alunos/registrar';

const payload = JSON.stringify({
        nome: "Aluno_teste_02",
        email: "teste02@gmail.com",
        senha: "123456"
      });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };


  let res = http.post(url, payload, params);

  check(res, {
    'Validar que o Status é 201': (r) => r.status === 201,
});

   sleep(1);
};