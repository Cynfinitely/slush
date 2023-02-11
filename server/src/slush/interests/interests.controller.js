const pool = require('../../../db');
const queries = require('./interests.queries');



const getInterests = (req, res) => {
    pool.query(queries.getInterests, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })


};

const getInterestByUserId = (req, res) => {
    const id = parseInt(req.params.user_id);
    pool.query(queries.getInterestByUserId, [id], (error, results) => {

        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const addInterest = (req, res) => {
    const { title, user_id } = req.body;
    //add Interest to database
    pool.query(queries.addInterest, [title,  user_id], (error, results) => {
        res.status(201).send('Interest added successfully');
    });
};

const removeInterest = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getInterestById, [id], (error, results) => {
        const noInterestFound = !results.rows.length;
        if (noInterestFound) {
            res.send('Interest not found');
        }
        pool.query(queries.removeInterest, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Interest removed successfully');
        });
    });

};

const updateInterest = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, user_id } = req.body;

    pool.query(queries.getInterestById, [id], (error, results) => {
        const noInterestFound = !results.rows.length;
        if (noInterestFound) {
            res.send('Interest not found');
        }
        pool.query(queries.updateInterest, [title,  user_id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Interest updated successfully');
        });

    })

}


module.exports = {
    getInterests,
    getInterestByUserId,
    addInterest,
    removeInterest,
    updateInterest,
};