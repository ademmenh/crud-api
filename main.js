
import express from 'express'
import {initServer} from './config/init.js'

import {logMiddleware} from './middlewares/log.js'
import {errMiddleware} from './middlewares/err.js'

import {getHello} from './handlers/hello.js'



export const app = express()



app.use(express.json({limit: '1KB'}))


app.get('/hello', logMiddleware, getHello)


app.use(errMiddleware)


initServer()
