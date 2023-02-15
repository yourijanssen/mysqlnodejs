import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    console.log(req);
});
