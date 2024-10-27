
export const err404Middleware = (req, res) => {
    console.log('404 executed')
    console.log('\x1b[31m%s\x1b[0m', `${new Date().toUTCString()}    404 ${req.method} ${req.url}`);    // red text
    res.status(404).json({status:404, error: "Route Not Found"})
}

export const errMiddleware = (err, req, res) => {
    console.log('err executed')
    console.log('\x1b[31m%s\x1b[0m', `${new Date().toUTCString()}    ${err.status} ${req.method} ${req.url}`);    // red text
    res.status(err.status).json({status:err.status, error: err.message})
}
