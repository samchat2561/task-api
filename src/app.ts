import express, { Application, Request, Response } from 'express';

const app: Application = express();

//GET: http://localhost:3000/
app.get('/', (req: Request, res: Response): void => {
    res.status(200).json({ message: 'Hello, World!' });
});

const PORT: number = 3000;
app.listen(PORT, (): void => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

    