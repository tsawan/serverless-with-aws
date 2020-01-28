const express = require('express');
const http = require('serverless-http');
const todos = [
    { id: 1, name: 'clean up', status: 'open' },
    { id: 1, name: 'cook', status: 'done' }
]

const app = express();
app.get('/', (req, res) => {
    res.json({ message: 'ok' })
})
app.get('/todos', (req, res) => {
    res.json({ data: JSON.stringify(todos) })
})

module.exports.handler = http(app);
