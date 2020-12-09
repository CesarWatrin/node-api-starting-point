import { Router, Request, Response } from 'express';
import getModel from '../db/models';

const router = Router();

//renvoi un tableau avec tous les pubs
router.get('/', async (req: Request, res: Response): Promise<void> => {
   const barathonModel = getModel('barathon');

   const barathons = await barathonModel.find();
   res.json(barathons)
});

export default router;
