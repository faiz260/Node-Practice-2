const signup = (req, res) => {
    res.send(`This is signup page`)
}
const login = (req, res) => {
    const { username, lastname } = req.body;
    res.send(`You are login with username ${username} and last name ${lastname}`)
}

module.exports = {
    signup,
    login,
}