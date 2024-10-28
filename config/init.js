
import dotenv from 'dotenv'
import {app} from '../main.js'
import mongoose from 'mongoose'

dotenv.config()
const PORT = env.PORT
const DB_URI = process.env.DB_URI

export const initServer = async () => {

        mongoose.connect(DB_URI)
    app.listen(PORT, () => {console.log(`Server listens at port ${PORT}...`)})
}
