import { Mongoose } from 'mongoose';

/* eslint-disable no-var */

declare global {
  // eslint-disable-next-line no-unused-vars
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}