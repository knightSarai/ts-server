import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
        <div>
            <h1>Knight</h1>
        </div>
    `);
});

app.listen('1200', () => console.log('server on localhost:1200'));
