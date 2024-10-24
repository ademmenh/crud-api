
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



app.get('/adding2', (req, res) => {
    let result = 0
    let bodyParams = Object.entries(req.body);

    if (bodyParams.length === 0) {
        console.log('GET /adding2')
        res.send(`${result}`);
        return;
    }
    
    let stringParams = '?'
    if (bodyParams.length === 1)
    {
        stringParams += `=${bodyParams[0][0]}=${bodyParams[0][1]}`
        console.log(`GET /adding2${stringParams}`)
        result = bodyParams[0][1];
        res.send(`${result}`)
        return;
    }

    // else
    stringParams += `${bodyParams[0][0]}=${bodyParams[0][1]}`
    result = Number(bodyParams[0][1])
    for (let i=1; i<bodyParams.length; i++) {
        stringParams += `&${bodyParams[i][0]}=${bodyParams[i][1]}`
        result += Number(bodyParams[i][1])
    }
    console.log(`GET /adding2${stringParams}`)
    res.send(`${result}`)
    return;
})



app.listen(8000, () => {
    console.log('the server is running on the porst 8000 !')
})
