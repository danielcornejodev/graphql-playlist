const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//MongoDB creates a unique id for each model so you do not have to define on the schema. 
const authorSchema = new Schema({
    name: String,
    age: Number
})

//Collection or model name is going to be Book. Objects inside of model or collection will look like bookSchema.
module.exports = mongoose.model('Author', authorSchema);