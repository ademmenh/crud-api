
const express = require('express')


const app = express()


app.use(express.json())

app.get('/hello', (req, res) => {
    console.log('GET /hello')
    res.send('hellooooooo')
})



app.get('/adding/:num1/:num2', (req, res) => {
    console.log(`GET /adding/${req.params.num1}/${req.params.num2}`)
    res.send(`${Number(req.params.num1) + Number(req.params.num2)}`)
})


const logParams = require('./functions')

app.get('/adding2', (req, res) => {
    let result = 0
    let bodyParams = Object.entries(req.body);
    console.log(bodyParams)
    let stringParams = logParams(bodyParams);
    console.log(stringParams)

    console.log(`GET /adding2${stringParams}`);
    for (let [key, value] of bodyParams) {
        result += value;
    }
    res.json({result: result})
    return;
})



app.listen(8000, () => {
    console.log('the server is running on the porst 8000 !')
})
