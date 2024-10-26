
const express = require('express')
const PORT = 8000


class webError extends Error {
    constructor ({status, details}) {
        super()
        this.status = status
        this.details = details
    }
}


const app = express()


// json body parser
app.use(express.json({limit: '1KB'}))

// log requests
app.use((req, res, next) => {
    console.log(`${new Date().toUTCString()}        ${req.method} ${req.path}`)
    next()
})


app.get('/hello', (req, res, next) => {
    const {name} = req.query

    if (name) { 
        res.json({result: `hello ${name}`})
    } else {
        next (new webError({status: 422, details: "invalid data"}))
    }
})



// 404 error handler
app.use((req, res, next) => {
    res.status(404).json({result: "route not found !"})
})


// error handler
app.use((err, req, res, next) => {
    const {status, details} = err
    res.status(status).json({error: details})
})



app.listen(PORT, () => {
    console.log(`Run successfully on port ${PORT}`)
})
