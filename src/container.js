import { createContainer, asFunction, asValue } from 'awilix';

import Database from './infrastructure/database';
import Config from './config';
import Application from './app';
import Server from './interfaces/http/server';
import Router from './interfaces/http/router';

const container = createContainer();

container.register({
  database: asFunction(Database).singleton(),
  config: asValue(Config),
  app: asFunction(Application).singleton(),
  server: asFunction(Server).singleton(),
  router: asFunction(Router).singleton()
});

export default container;