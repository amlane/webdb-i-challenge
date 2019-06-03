const express = require('express');

const db = require('./data/accounts-model.js');

const server = express();

server.use(express.json());

// your code here

server.get('/', (req, res) => {
    db.find()
    .then( data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json({ error: "That's an error." })
    })
})



module.exports = server;