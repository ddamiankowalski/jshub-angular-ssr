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

    const user = process.env['DB_USER'];
    const pass = process.env['DB_PASS'];
    const addr = process.env['DB_ADDR'];

    const uri = `mongodb://${user}:${pass}@${addr}`;

    if(!uri) {
        throw new Error('Could not connect to the database. No uri provided.');
    }

    return mongoose.connect(uri)
        .then(() => console.log('Connected to the database'))
        .catch(err => console.log(`Could not connect to db. Err: ${err}`));
}
