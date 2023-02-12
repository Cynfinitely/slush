const getSlushUsers = "SELECT * FROM users";
const getSlushUserById = "SELECT * FROM users WHERE id = $1";
const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";
const addSlushUser = "INSERT INTO users (name, email ,age , is_VC , password) VALUES ($1, $2, $3, $4, $5)";
const removeSlushUser = "DELETE FROM users WHERE id = $1";
const updateSlushUser = "UPDATE users SET name = $1, email = $2, age = $3, is_VC = $4, password = $5 WHERE id = $6";




module.exports = {
    getSlushUsers,
    getSlushUserById,
    checkEmailExists,
    addSlushUser,
    removeSlushUser,
    updateSlushUser,
};