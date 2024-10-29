
import dotenv from 'dotenv'
import {app} from '../main.js'
import mongoose from 'mongoose'

dotenv.config()
const PORT = process.env.PORT
const DB_URI = process.env.DB_URI

// console.log(PORT)
// console.log(DB_URI)

export const initServer = async () => {
    await mongoose.connect(DB_URI)
    .then(() => {
        console.log('Connected Succesfully to DataBase')
        app.listen(PORT, () => {console.log(`Server Listen at Port ${PORT}...`)})
    })
    .catch((err) => {
        console.log('Failed to Connect to DataBase')
        console.log()
        console.log(err)
    })

}
