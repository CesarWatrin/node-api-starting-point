import { Router, Request, Response } from 'express';
import getModel from '../db/models';

const router = Router();

//renvoi un tableau avec tous les pubs
router.get('/', async (req: Request, res: Response): Promise<void> => {
   const pubModel = getModel('pub');

   const pubs = await pubModel.find();
   res.json(pubs)
});

export default router;
