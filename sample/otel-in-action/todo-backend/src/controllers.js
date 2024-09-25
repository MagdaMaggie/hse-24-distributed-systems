const Todo = require('./models/todo');

const addTodo = async (req, res) => {
  const todoText = req.params.todo;
  const newTodo = new Todo({ text: todoText });
  await newTodo.save();
  res.status(200).send(`Todo added: ${todoText}`);
};

const removeTodo = async (req, res) => {
  const todoText = req.params.todo;
  await Todo.deleteOne({ text: todoText });
  res.status(200).send(`Todo removed: ${todoText}`);
};

const getTodos = async (req, res) => {
  const todos = await Todo.find().select('text -_id');
  res.status(200).json(todos.map(todo => todo.text));
};

module.exports = { addTodo, removeTodo, getTodos };
