import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
routes(app);

app.listen(process.env.PORT, () => {
   console.log('Server listening on port ' + process.env.PORT);
});
