import express from 'express'
import { graphqlHTTP } from 'express-graphql'

import schema from './schema.js'
//const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))


app.listen(3000, () => console.log('Server on port http://localhost:3000'))