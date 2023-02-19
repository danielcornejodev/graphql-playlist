const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//MongoDB creates a unique id for each model so you do not have to define on the schema. 
const bookSchema = new Schema({
    name: String,
    genre: String, 
    authorId: String
})

//Collection or model name is going to be Book. Objects inside of model or collection will look like bookSchema.
module.exports = mongoose.model('Book', bookSchema);