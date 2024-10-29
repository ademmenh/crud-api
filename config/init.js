
import dotenv from 'dotenv'
import {app} from '../main.js'
import mongoose from 'mongoose'

dotenv.config()
const PORT = process.env.PORT
const DB_URI = process.env.DB_URI

// console.log(PORT)
// console.log(DB_URI)

export const initServer = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log('Connected Succesfully to DataBase')
        app.listen(PORT, () => {console.log(`Server listens at port ${PORT}...`)})
    } catch {
        console.log('Failed to Connect to DataBase')
    }
}
