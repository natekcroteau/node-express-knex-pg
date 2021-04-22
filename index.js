const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001


app.listen(port, () => console.log(`Node Server Running on port: ${port}`))