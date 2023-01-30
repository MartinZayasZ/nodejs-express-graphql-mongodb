import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema.js'

import {connect} from './database.js'

const app = express()
connect()

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}))


app.listen(3000, () => console.log('Server on port http://localhost:3000'))