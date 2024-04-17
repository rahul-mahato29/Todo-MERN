const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:rahul2901@cluster0.63mtkv0.mongodb.net/Todo-Application');

//define schema
const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    Todo
}
