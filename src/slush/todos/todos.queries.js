const getTodos = "SELECT * FROM todos";
const getTodoById = "SELECT * FROM todos WHERE id = $1";
const addTodo = "INSERT INTO todos (title, description , user_id ) VALUES ($1, $2, $3)";
const removeTodo = "DELETE FROM todos WHERE id = $1";
const updateTodo = "UPDATE todos SET title = $1, description = $2, user_id = $3 WHERE id = $4";




module.exports = {
    getTodos,
    getTodoById,
    addTodo,
    removeTodo,
    updateTodo,
};