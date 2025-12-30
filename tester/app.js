import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 1000, // 1000 virtual users
  iterations: 1000, // each user runs once per service
};

const BASE_URL = __ENV.BASE_URL || "http://localhost:5001";
const HEALTH_ENDPOINT = `${BASE_URL}/hello`;

export function setup() {
  const maxAttempts = 60; // e.g., wait up to 60 seconds
  const delay = 1; // seconds between attempts
  let attempt = 0;
  while (attempt < maxAttempts) {
    let res = http.get(HEALTH_ENDPOINT);
    if (res.status === 200) {
      return;
    }
    sleep(delay);
    attempt++;
  }
  throw new Error(`Service not ready after ${maxAttempts * delay} seconds`);
}

export default function () {
  let res = http.get(`${BASE_URL}/hello`);
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
}
