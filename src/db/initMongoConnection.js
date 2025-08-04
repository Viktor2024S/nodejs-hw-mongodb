import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';
import { ENV_VARS } from '../constants/envVars.js';

export const initMongoDB = async () => {
  try {
    const user = getEnvVar(ENV_VARS.MONGODB_USER);
    const pwd = getEnvVar(ENV_VARS.MONGODB_PASSWORD);
    const url = getEnvVar(ENV_VARS.MONGODB_URL);
    const db = getEnvVar(ENV_VARS.MONGODB_DB);

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,
    );

    // const url = getEnvVar('DB_HOST');
    // await mongoose.connect(url);

    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
