const express = require('express')
const cors = require('cors')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Database
const db = require('./models')
db.sequelize.sync({ force: false }).then(() => {
  console.log('Drop and Resync with { force: true }')
})

db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

// Routes
app.get('/api', (req, res) => {
  res.status(200)
    .json({
      status: 'success',
      message: 'Hello World! Welcome to the PuskermasHub API'
    })
})

module.exports = app