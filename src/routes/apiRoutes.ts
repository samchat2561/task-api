import { Router, Request, Response } from 'express';
import axios from 'axios';

const router = Router();
const JSON_SERVER_URL = 'https://localhost:3000/tasks';

// Example API route
router.get('/', async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${JSON_SERVER_URL}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});
export default router;