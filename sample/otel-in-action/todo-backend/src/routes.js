const express = require('express');
const router = express.Router();
const { addTodo, removeTodo, getTodos } = require('./controllers');

router.post('/:todo', addTodo);
router.delete('/:todo', removeTodo);
router.get('/', getTodos);

module.exports = router;
