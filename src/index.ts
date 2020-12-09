// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import initDatabase from './db/index';
import routes from './routes';

const startServer = async (): Promise<void> => {
   dotenv.config();

   const app = express();
   await initDatabase();
   routes(app);

   app.listen(process.env.PORT, () => {
      console.log('Server listening on port ' + process.env.PORT);
   });
};

startServer();
