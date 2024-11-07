import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Connects to mongo db database.
 *
 * @returns
 */
export const connectDatabase = (): Promise<void> => {
  const uri = `${process.env['DB_URI']}/${process.env['DB_NAME']}`;

  if (!uri) {
    throw new Error('Could not connect to the database. No uri provided.');
  }

  console.log(`Connecting to the database. The uri: ${uri}`);

  return mongoose
    .connect(uri, {
      authSource: 'admin',
      user: process.env['DB_USER'],
      pass: process.env['DB_PW'],
      dbName: process.env['DB_NAME'],
    })
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.log(`Could not connect to db. Err: ${err}`));
};
