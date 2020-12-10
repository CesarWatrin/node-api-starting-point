import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import getModel from '../db/models';

const router = Router();

//renvoi un tableau avec tous les pubs
router.get('/', async (req: Request, res: Response): Promise<void> => {
   const barathonModel = getModel('barathon');

   const barathons = await barathonModel.find();
   res.json(barathons)
});

router.post('/', async (req: Request, res: Response): Promise<void> => {
   try {
      const barathonModel = getModel('barathon');

      //const { name, author, checkpoints } = req.body;
      await barathonModel.validate(req.body);
      const barathon = await barathonModel(req.body);
      const insertedBarathon = await barathon.save();
      res.json(insertedBarathon);
   } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
         res.status(400);
         res.json({ error: true, message: 'Bad request' });
      } else {
         res.status(500);
         res.json({ error: true, message: 'Server Error' });
      }
   }
});

export default router;
