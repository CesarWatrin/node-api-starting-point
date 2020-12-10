import { Schema } from 'mongoose';
import { ICustomSchema } from '../../types/database';
import Comment from './comment';

const pubSchema:ICustomSchema = {
   collection: 'pubs',
   definition: new Schema({
      name: { type:String, required:true },
      description: { type:String, required:false },
      latlng: {
         lat: { type:String, required:true },
         lng: { type:String, required:true }
      },
      comments: { type: [Comment], required:false }
   })
};


export default pubSchema;
