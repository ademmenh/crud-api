
import chalk from 'chalk'

export const err404Middleware = (req, res, next) => {
    // console.log('404 executed')
    console.log(chalk.red(`${new Date().toUTCString()}    404 ${req.method} ${req.url}`))    // red text
    res.status(404).json({error: "Route Not Found"})
}

export const errMiddleware = (err, req, res, next) => {
    // console.log('err executed')
    console.log(chalk.red(`${new Date().toUTCString()}    ${err.status} ${req.method} ${req.url}`))     // red text
    res.status(err.status).json({error: err.message})
}
