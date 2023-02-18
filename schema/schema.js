const graphql = require('graphql');
const _ = require('lodash');

//destructuring grabs function GraphQLObjectType from graphql variable. 
//this code grabs different properties from the graphql package.
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

//Dummy data
var books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
];

var authors = [
    { name: 'Patrick Rothfuss', age: 44, id: '1' },
    { name: 'Brandon Sanderson', age: 42, id: '2' },
    { name: 'Terry Pratchett', age: 66, id: '3' }
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args){
                return _.find(authors, { id: parent.authorId })
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        age: { type: GraphQLInt},
        name: { type: GraphQLString }
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
            args: {id: { type: GraphQLID }},
            resolve(parent, args){
                //using lodash to look through the books array and finding any book with the id that has been attached the args.id that user sends along.
                //args to id is converted to a string tyoe. You can verify by console.logging typeof args.id
                return _.find(books, {id: args.id})
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return _.find(authors, { id: args.id });
            }
        }
    }
})

//defining which query we are allowing user to use when they are making queries from the front end.
module.exports = new GraphQLSchema({
    query: RootQuery
});