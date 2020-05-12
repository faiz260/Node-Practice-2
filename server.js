const express = require('express');
const app = express();
const api = require('./api')

app.use(express.json());

app.get('/signup', api.signup)

app.post('/login', api.login)

module.exports = ({ port, cb }) => {
    app.listen(port, cb)
}