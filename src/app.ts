import express from 'express';
import {connection} from './database.js';

const app = express();

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Hello World');
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
    connection.connect((err) => {
        if (err) {
            console.log('Error connecting to Db');
            return;
        }
        console.log('Connection established');
    });
});
