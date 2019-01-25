import path from 'path';

export const createHttpModule = name => {
  const modulePath = path.resolve('src/interfaces/http/modules', name);
  const module = require(modulePath);
  return module();
}