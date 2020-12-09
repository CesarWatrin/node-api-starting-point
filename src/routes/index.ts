import pubs from './pub';

export default (app: any): void => {
   app.use('/pubs', pubs);
};
