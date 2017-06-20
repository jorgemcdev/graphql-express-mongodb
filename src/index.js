/* eslint no-console: 0 */
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import morgan from 'morgan';

import schema from './graphql';

const app = express();
app.use(morgan('dev'));

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true,
  graphiql: true
})));

// Connect mongo database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/graphql-sample');

// When successfully connected
mongoose.connection.on('connected', () => {
  console.info('DB open');
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.error('Mongoose default connection error', err);
});

// start server
const server = app.listen(8080, () => {
  console.info('Listening at port: ', server.address().port);
});
