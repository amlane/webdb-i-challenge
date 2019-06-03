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
        res.status(500).json({ error: "That's an error getting." })
    })
})

server.get('/:id', (req, res) => {
    const id = req.params.id;

    db.findById(id)
    .then( account => {
        res.status(200).json(account)
    })
    .catch(error => {
        res.status(500).json({ error: "That's an error getting by id." })
    })
})

server.post('/', (req, res) => {
    db.add(req.body)
    .then( account => {
        res.status(201).json(account)
    })
    .catch(error => {
        res.status(500).json({ error: "That's an error posting." })
    })
})

server.delete('/:id', (req, res) => {
    const id = req.params.id;

    db.remove(id)
    .then( deleted => {
        res.status(204).end();
    })
    .catch(error => {
        res.status(500).json({ error: "That's an error posting." })
    })
})

server.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    db.update(id, changes)
    .then( updated => {
        res.status(200).json(updated)
    })
    .catch(error => {
        res.status(500).json({ error: "That's an error updating." })
    })
})

module.exports = server;