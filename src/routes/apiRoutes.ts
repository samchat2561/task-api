import { Router, Request, Response } from 'express';
import axios from 'axios';

const router = Router();
const JSON_SERVER_URL = 'http://localhost:3000/tasks';

// GET: ดึงรายการงาน
router.get('/', async (req: Request, res: Response) => {
    const { data } = await axios.get(JSON_SERVER_URL);
    res.json(data);
});

// POST: เพิ่มงานใหม่
router.post('/', async (req: Request, res: Response) => {
    const { data } = await axios.post(JSON_SERVER_URL, req.body);
    res.status(201).json(data);
});

// PUT: อัปเดตงาน
router.put('/:id', async (req: Request, res: Response) => {
    const { data } = await axios.put(`${JSON_SERVER_URL}/${req.params.id}`, req.body);
    res.json(data);
});

// DELETE: ลบงาน
router.delete('/:id', async (req: Request, res: Response) => {
    await axios.delete(`${JSON_SERVER_URL}/${req.params.id}`);
    res.status(204).send();
});

export default router;