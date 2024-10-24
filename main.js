
const express = require('express')


const app = express()

app.get('/hello', (res, req) => {
    console.log('GET /hello')
    req.send('hellooooooo')
})

app.listen(8000, () => {
    console.log('the server is running on the porst 8000 !')
})
