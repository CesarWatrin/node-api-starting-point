// src/routes/index.ts
import pubs from './pub';
import barathons from './barathon';

export default (app: any): void => {
   app.use('/pubs', pubs);
   app.use('/barathons', barathons);
};
