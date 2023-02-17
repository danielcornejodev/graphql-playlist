const graphql = require('graphql');
const _ = require('lodash');

//destructuring grabs function GraphQLObjectType from graphql variable. 
//this code grabs different properties from the graphql package.
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//Dummy data
var books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

//Don't need an arrow function since we do not need to worry about the order so much. 
//which arg should come along when making a query for a book. c
//resolve is a function to get data from db / other source.
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: { type: GraphQLString }},
            resolve(parent, arg){
                //using lodash to look through the books array and finding any book with the id that has been attached the args.id that user sends along.
                return _.find(books, {id: this.args.id})
            }
        }
    }
})

//defining which query we are allowing user to use when they are making queries from the front end.
module.exports = new GraphQLSchema({
    query: RootQuery
});