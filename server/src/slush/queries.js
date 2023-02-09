const getSlushUsers = "SELECT * FROM entrepreneurs";
const getSlushUserById = "SELECT * FROM entrepreneurs WHERE id = $1";
const checkEmailExists = "SELECT s FROM entrepreneurs s WHERE s.email = $1";
const addSlushUser = "INSERT INTO entrepreneurs (name, email ,age , dob) VALUES ($1, $2, $3, $4)";
const removeSlushUser = "DELETE FROM entrepreneurs WHERE id = $1";
const updateSlushUser = "UPDATE entrepreneurs SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5";




module.exports = {
    getSlushUsers,
    getSlushUserById,
    checkEmailExists,
    addSlushUser,
    removeSlushUser,
    updateSlushUser,
};