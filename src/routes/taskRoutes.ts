import { Router, Request, Response } from 'express';
import { tasks } from '../data';
const router = Router();

// GET: http://localhost:3000/api/tasks
router.get('/tasks', (req: Request, res: Response) => {
    res.status(200).json({ data: tasks });
});

export default router;