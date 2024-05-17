import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export let options = {
  vus: 100, 
  duration: '1m', 
  iterations: 500,
};

export default function () {
    const data = {
				  "id": 10,
				  "name": "doggie",
				  "category": {
					"id": 1,
					"name": "Dogs"
				  },
				  "photoUrls": [
					"string"
				  ],
				  "tags": [
					{
					  "id": 0,
					  "name": "string"
					}
				  ],
				  "status": "available"
				};

    const headers = {
        'accept': 'application/xml',
        'Content-Type': 'application/json',
    };

    const response = http.post('http://localhost:8080/api/v3/pet', JSON.stringify(data), { headers: headers });

    check(response, {
        'status is 200': (r) => r.status === 200,
    });
	sleep(1);
}