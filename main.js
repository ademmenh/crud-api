
const express = require('express')
const PORT = 8000


const app = express()



app.use(express.json({type: 'application/json'}))

// log requests
app.use((req, res, next) => {
    console.log(`${new Date().toUTCString()}        ${req.method} ${req.path}`)
    next()
})



app.get('/hello', (req, res) => {
    console.log(req.body)
    res.json({result: "hello"})
})


app.listen(PORT, () => {console.log(`Run successfully on port ${PORT}`)})
