
import express from 'express'

import {logMiddleware} from './middlewares/log.js'
import {errMiddleware} from './middlewares/err.js'

import {getHello} from './handlers/hello.js'



const PORT = 8000

const app = express()



app.use(express.json({limit: '1KB'}))

app.use(logMiddleware)


app.get('/hello', getHello)


app.use(errMiddleware)


app.listen(PORT, () => {
    console.log(`Run successfully on port ${PORT}`)
})
