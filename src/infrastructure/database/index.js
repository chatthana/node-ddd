import { model as createModel, connect } from 'mongoose';
import Models from './models';

export default ({ config }) => {
  const db = connect(config.database.mongodb.uri, {
    useNewUrlParser: true
  });

  const models = {};

  Models.map(model => {
    models[model.name] = createModel(model.name, model.schema);
  });

  return { db, models };
};