const express = require('express')
const connection = require('./config/connection')
const routes = require('./routes')
const app = express()
const port = 3001


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

connection.once('open', () => {
    app.listen(port, () => {
        console.log(`API server for Social Network Api running on port ${port}!`);
    });
});