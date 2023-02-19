const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const mongoose = require('mongoose');
//express graphql is considered middleware.
//use schema to map out the graph so you know what happens when user makes a request to this endpoint. 

mongoose.connect('mongodb+srv://danielcornejodev:test123@cluster0.czuywlx.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5500, () => {
    console.log('now listening for requests on port 5500');
})