
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config();

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())
app.use(cookieParser(process.env.JWT_SECRET))

// TODO: add cookie and session middleware

// Database
const db = require('./models')
db.sequelize.sync({ force: false }).then(() => {
  console.log('Drop and Resync with { force: g }')
  
  const roleInit = require('./database/dbInit')
  roleInit()
})

db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

// Routes
const Router = require('./routes/routes')

app.get('/', (req, res) => {
  res.status(200)
    .json({
      status: 'success',
      data: {
        message: 'Hello World! Welcome to the PuskermasHub API. API working properly'
      }
    })
})

app.use('/api', Router)

// Error Handling
app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404

  next(error)
})

app.use((error, req, res, next) => {
  response = {
    status: "error",
    message: error.message
  }

  res.status(error.status || 500)
    .json(response)
})

module.exports = app