const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const { createServer } = require('node:http');
const { createYoga } = require('graphql-yoga');


const app = express();

// allow cross-origin requests
app.use(cors());

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema })
 
// Pass it into a server to hook into request handlers.
const server = createServer(yoga)

//express graphql is considered middleware.
//use schema to map out the graph so you know what happens when user makes a request to this endpoint. 
mongoose.set("strictQuery", false);

mongoose.connect('mongodb+srv://danielcornejodev:test123@cluster0.czuywlx.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

// app.all('/graphql', createHandler({
//     schema,
//     graphiql: true
// }));

// app.all('/graphql', createHandler({ 
//     schema, 
//     graphiql: true 
// }));

// app.listen(5501, () => {
//     console.log('now listening for requests on port 5501');
// })
server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })