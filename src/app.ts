import express, { Application, Request, Response } from 'express'; 
import taskRoutes from './routes/taskRoutes';

const app: Application = express();
app.use(express.json());            // Middleware to parse JSON bodies
app.use('/api', taskRoutes);      // Use task routes with '/api' prefix

//GET: http://localhost:3000/
app.get('/', (req: Request, res: Response): void => {
    res.status(200).json({ message: 'Hello, World!' });
});

const PORT: number = 3000;
app.listen(PORT, (): void => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
