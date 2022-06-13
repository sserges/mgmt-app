const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const colors = require('colors')

require('dotenv').config()

const connectDB = require('./config/db')

const schema = require('./schema/schema')

const port = process.env.PORT || 5000

const app = express()

// Connect to database
connectDB()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

app.listen(port, console.log(`Server running on port ${port}`))
