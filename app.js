const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

//express graphql is considered middleware.
//use schema to map out the graph so you know what happens when user makes a request to this endpoint. 
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5500, () => {
    console.log('now listening for requests on port 5500');
})