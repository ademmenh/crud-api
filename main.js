
import express from 'express'
import {initServer} from './config/init.js'

import {logMiddleware} from './middlewares/log.js'
import {errMiddleware, err404Middleware} from './middlewares/err.js'

import {getHello} from './handlers/hello.js'



export const app = express()

app.use(express.json({limit: '1KB'}))

app.get('/hello', getHello, logMiddleware)

app.use(err404Middleware)

app.use(errMiddleware)

initServer()
