import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
    res.json({
        key: 'test'
    });
});

export default router;
