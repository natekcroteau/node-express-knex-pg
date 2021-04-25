const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const { default: knex } = require('knex')
const database = require('knex')(connection)

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Node Server Running on port: ${port}`))


app.get('/users', (request, response) => {
    database('users')
        .then(users => response.send(users))
})


app.post('/users', (request, response) => {
    const user = request.body 

    database('users')
        .insert(user)
        .returning('*')
        .then(user => response.send(user))
})

app.put('/:id', (request, response) => {
    
    const id = request.params.id
    const user = request.body
    
    database('users')
        .where('id', id)
        .update(user)
        .then(data => response.json(data))
})