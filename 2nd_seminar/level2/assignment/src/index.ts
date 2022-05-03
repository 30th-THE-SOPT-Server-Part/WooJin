import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

app.use('/api', require('./api'));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hi! This is my first express server. My name is Woojin.');
});

app.listen('8080', () => {
    console.log(`
    #############################################x
        🛡️ Server listening on port: 8080 🛡️
    #############################################    
    `)
})
