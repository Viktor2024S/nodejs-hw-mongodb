import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export const swaggerDocs = () => {
  const swaggerDoc = JSON.parse(readFileSync(resolve('docs', 'swagger.json')));

  return [swaggerUi.serve, swaggerUi.setup(swaggerDoc)];
};
