import express, { Request, Response, NextFunction } from 'express';
import apiRoute from './router/index';

const app = express();

app.use(express.json());

app.use('/api', apiRoute);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hi! This is server tutorial.');
});

app.listen('8080', () => {
    console.log(`
    #############################################
        🛡️ Server listening on port: 8000 🛡️
    #############################################
    `);
});
