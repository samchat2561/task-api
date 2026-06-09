import { Router, Request, Response } from 'express';
import { Task, tasks } from '../data';
const router = Router();

// GET: http://localhost:3000/api/tasks
router.get('/tasks', (req: Request, res: Response) => {
    res.status(200).json({ data: tasks });
});

// POST: http://localhost:3000/api/tasks
router.post('/tasks', (req: Request, res: Response) => {
    const maxId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;
    const newTask: Task = {
        id: maxId + 1,
        ...req.body
    }
    tasks.push(newTask);
    res.status(201).json({ data: newTask });
});

router.put('/tasks/:id', (req: Request, res: Response) => {
    const taskId = req.params.id;
    const taskIndex = tasks.findIndex(task => task.id === Number(taskId));
    if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
        return res.status(200).json({ data: tasks[taskIndex] });
    } else {
        return res.status(404).json({ message: 'Task not found' });
    }
});

export default router;