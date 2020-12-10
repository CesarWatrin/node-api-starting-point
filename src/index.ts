// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import initDatabase from './db/index';
import routes from './routes';
import logger from './middlewares/logger';
import cors from './middlewares/cors';

const startServer = async (): Promise<void> => {
   dotenv.config();

   const app = express();

   app.use(bodyParser.json());

   app.use(logger);
   app.use(cors);

   await initDatabase();

   routes(app);

   app.listen(process.env.PORT, () => {
      console.log('Server listening on port ' + process.env.PORT);
   });
};

startServer();
