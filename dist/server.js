'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import bodyParser from 'body-parser';
// import schema from './data/schema';

// const express = require('express');

var GRAPHQL_PORT = process.env.PORT || 3000;

var graphQLServer = (0, _express2.default)();

// graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.get('/', function (req, res) {
  return res.send('Hello World!');
});

graphQLServer.listen(GRAPHQL_PORT, function () {
  return console.log('GraphiQL is now running on http://localhost:' + GRAPHQL_PORT + '/graphiql');
});