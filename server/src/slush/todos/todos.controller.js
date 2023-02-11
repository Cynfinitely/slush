const pool = require('../../../db');
const queries = require('./todos.queries');



const getTodos = (req, res) => {
    pool.query(queries.getTodos, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })


};

const getTodoById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getTodoById, [id], (error, results) => {

        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const addTodo = (req, res) => {
    console.log(req.body);
    
    const { title, description, user_id } = req.body;
    //add todo to database
    console.log(title,user_id, description);

    pool.query(queries.addTodo, [title, description, user_id], (error, results) => {
        res.status(201).send('Todo added successfully');
    });
};

const removeTodo = (req, res) => {
    const id = parseInt(req.params.id);
    console.log("here is the id:",id);
    

    pool.query(queries.getTodoById, [id], (error, results) => {
        const noTodoFound = !results.rows.length;
        if (noTodoFound) {
            res.send('Todo not found');
        }
        pool.query(queries.removeTodo, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Todo removed successfully');
        });
    });

};

const updateTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, user_id } = req.body;

    pool.query(queries.getTodoById, [id], (error, results) => {
        const noTodoFound = !results.rows.length;
        if (noTodoFound) {
            res.send('Todo not found');
        }
        pool.query(queries.updateTodo, [title, description, user_id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Todo updated successfully');
        });

    })

}


module.exports = {
    getTodos,
    getTodoById,
    addTodo,
    removeTodo,
    updateTodo,
};