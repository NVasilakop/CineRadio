import axios from 'axios';

// CORS enabled apikey
const apikey = '5fc56dd34af3f9656800d0e7';

// Autotrade delay
const trade_delay = 10000; // millis

// REST endpoint
let restdb = axios.create({
    baseURL: 'https://cineradio-96ff.restdb.io',
    timeout: 1000,
    headers: { 'x-apikey': '5fc56dd34af3f9656800d0e7' }
});
// Eventsource endpoint
const realtimeURL = `https://cineradio-96ff.restdb.io/realtime?apikey=${apikey}`
const dbrestUrl = `https://cineradio-96ff.restdb.io/rest/`;
//login?q={%22username%22:%22what%22}
export { apikey, restdb, realtimeURL, trade_delay };