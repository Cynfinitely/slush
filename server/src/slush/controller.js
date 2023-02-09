const pool = require('../../db');
const queries = require('./queries');



const getSlushUsers = (req, res) => {
    pool.query(queries.getSlushUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })


};

const getSlushUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getSlushUserById, [id], (error, results) => {

        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const addSlushUser = (req, res) => {
    const { name, email, age, dob } = req.body;

    //check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('Email already exists');
        }
    });

    //add user to database
    pool.query(queries.addSlushUser, [name, email, age, dob], (error, results) => {
        res.status(201).send('User added successfully');
    });
};

const removeSlushUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getSlushUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send('User not found');
        }
        pool.query(queries.removeSlushUser, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('User removed successfully');
        });
    });

};

const updateSlushUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, age, dob } = req.body;

    pool.query(queries.getSlushUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send('User not found');
        }
        pool.query(queries.updateSlushUser, [name, email, age, dob, id], (error, results) => {
            if (error) throw error;
            res.status(200).send('User updated successfully');
        });

    })

}


module.exports = {
    getSlushUsers,
    getSlushUserById,
    addSlushUser,
    removeSlushUser,
    updateSlushUser,
};