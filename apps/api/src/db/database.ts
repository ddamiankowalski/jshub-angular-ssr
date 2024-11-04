import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Connects to mongo db database.
 *
 * @returns
 */
export const connectDatabase = (): Promise<void> => {
    console.log(`Connecting to the database. The uri: ${process.env['DB_URI']}`)

    const uri = process.env['DB_URI'];

    if(!uri) {
        throw new Error('Could not connect to the database. No uri provided.');
    }

    console.log(uri);
    return mongoose.connect(uri, { user: 'root', pass: 't4jn3h4slo' })
        .then(() => console.log('Connected to the database'))
        .catch(err => console.log(`Could not connect to db. Err: ${err}`));
}
