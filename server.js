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

const db = require('./server/models')
const Role = db.role

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial()
})

app.get('/', (req, res) => {
    res.json({message : 'Bork bork bork'})
})

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

function initial() {
    Role.create({
        id: 1,
        name: 'user'
    })

    Role.create({
        id: 2,
        name: 'admin'
    })
}