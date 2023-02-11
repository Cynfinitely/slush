const pool = require('../../../db');
const queries = require('./users.queries');
const {hash} = require("bcrypt")
const {sign} = require("jsonwebtoken")
const { SECRET } = require('../constants')



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
    const { name, email, age, is_VC , password } = req.body;

    //check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('Email already exists');
        }
    });

    //add user to database
    pool.query(queries.addSlushUser, [name, email, age, is_VC, password], (error, results) => {
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
    const { name, email, age, is_VC , password } = req.body;

    pool.query(queries.getSlushUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send('User not found');
        }
        pool.query(queries.updateSlushUser, [name, email, age, is_VC, password], (error, results) => {
            if (error) throw error;
            res.status(200).send('User updated successfully');
        });

    })

}

const signUser = async (req, res) => {
    const { name, email, age, is_VC , password } = req.body;
    try {
      const hashedPassword = await hash(password, 10)
  
      await pool.query(queries.addSlushUser, [
        name, email, age, is_VC, hashedPassword
      ])
  
      return res.status(201).json({
        success: true,
        message: 'The registraion was succefull',
      })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        error: error.message,
      })
    }
};

const loginUser = async (req, res) => {
    let user = req.user

    console.log("here is the user:",user)
    

    let payload = {
      id: user.user_id,
      email: user.email,
    }
  
    try {
      const token = await sign(payload, SECRET)
      console.log(token)
      
  
      return res.status(200).cookie('token', token, { httpOnly: true }).json({
        token: token,
        success: true,
        message: 'Logged in succefully',
      })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        error: error.message,
      })
    }
};

const logoutUser = async (req, res) => {
    try {
        return res.status(200).clearCookie('token', { httpOnly: true }).json({
          success: true,
          message: 'Logged out succefully',
        })
      } catch (error) {
        console.log(error.message)
        return res.status(500).json({
          error: error.message,
        })
      }
    }


module.exports = {
    getSlushUsers,
    getSlushUserById,
    addSlushUser,
    removeSlushUser,
    updateSlushUser,
    signUser,
    loginUser,
    logoutUser,
};