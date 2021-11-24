const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const corsOptions = {
    origin: 'http://localhost:3001'
}

const PORT = 3000

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.get('/', (req, res) => {
    res.json({message : 'Bork bork'})
})

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})