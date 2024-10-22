import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Connects to mongo db database.
 * 
 * @returns 
 */
export const connectDatabase = (): Promise<void> => {
    const uri = process.env['DB_URI'];

    if(!uri) {
        throw new Error('Could not connect to the database. No uri provided.');
    }

    return mongoose.connect(uri)
        .then(() => console.log('Connected to the database'))
        .catch(err => console.log(`Could not connect to db. Err: ${err}`));
}