import { Model } from 'mongoose';
import { ICustomSchema } from '../types/database';
import { database } from './index';
import schemas from './schemas';

const initializedModels = {};

const getModel = (modelName: string): Model => {
    // si en mémoire == > version en mémoire)
    if (initializedModels[modelName]) {
        return initializedModels[modelName];
    }

    // sinon construction, mise en mémoire et retour

    // ici on devrait aussi vérifier que schema existe mais bon hein
    const schema: ICustomSchema = schemas[modelName];
    console.log(`Creation du model pour ${modelName}...`);

    // constructeur de model de l'api Mongoose
    const model = database.model(schema.collection, schema.definition, schema.collection);
    initializedModels[modelName] = model;

    return model;
};

export default getModel;
