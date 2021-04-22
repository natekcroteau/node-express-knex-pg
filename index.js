const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
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