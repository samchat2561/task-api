import { Router, Request, Response } from 'express';

const router = Router();

// GET: http://localhost:3000/api/tasks
router.get('/tasks', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get all tasks' });
});

export default router;