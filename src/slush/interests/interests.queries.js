const getInterests = "SELECT * FROM interests";
const getInterestByUserId = "SELECT * FROM interests WHERE user_id = $1";
const addInterest = "INSERT INTO interests (title,  user_id ) VALUES ($1, $2 )";
const removeInterest = "DELETE FROM interests WHERE id = $1";
const updateInterest = "UPDATE interests SET title = $1, user_id = $2 WHERE id = $3";




module.exports = {
    getInterests,
    getInterestByUserId,
    addInterest,
    removeInterest,
    updateInterest,
};