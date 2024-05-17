import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 50, 
  duration: '1m', 
};

export default function () {
  let res = http.get('http://localhost:8080/api/v3/pet/10', {
    headers: {
      'accept': 'application/xml',
    },
  });

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}