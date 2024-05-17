import { sleep, group, check } from 'k6';
import http from 'k6/http';
import constants from './constants/constants.js';

export const options = {
  //load
  stages: [
    { target: 50, duration: '30s' },
    //{ target: 40, duration: '1m' },
  ],
  thresholds: {
    http_req_duration: ['avg <= 3000'],
    http_req_failed: ['rate <= 0.01'],
    iterations: ['rate >= 3.67'],
  }  
}

export default function () {
  let params;
  group("Add a new pet to the store", function () {
    params = {
      headers: {
        'accept': 'application/xml',
        "Content-Type": "application/json",
      },
    };
    petRequest(params);
    sleep(5)
  });

}

const path = "pet/10"
export function petRequest(params) {
    const responseNewPet = http.get(constants.AUTH_URL + path, params);
    check(responseNewPet, {
        'HTTP code status': (r) => r.status === 200,
    })
}