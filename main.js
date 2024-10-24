
const express = require('express')


const app = express()

app.get('/hello', (req, res) => {
    console.log('GET /hello')
    res.send('hellooooooo')
})



app.get('/adding/:num1/:num2', (req, res) => {
    console.log(`GET /adding/${req.params.num1}/${req.params.num2}`)
    res.send(`${Number(req.params.num1) + Number(req.params.num2)}`)
})



app.get('/adding2', (req, res) => {

    let queryparams = '?'
    for ([key, value] of Object.entries(req.query)){
        queryparams += `${key}:${value} `
    }
    console.log(`GET /adding2${queryparams}`)

    let result = 0
    for ([key, value] of Object.entries(req.query)){
        result += Number(value)
    }
    res.send(`${result}`)
})



app.listen(8000, () => {
    console.log('the server is running on the porst 8000 !')
})
