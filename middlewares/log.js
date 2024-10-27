
import chalk from 'chalk'

export const logMiddleware = (req, res, next) => {
    // console.log('log executed')
    console.log(chalk.green(`${new Date().toUTCString()}    200 ${req.method} ${req.url}`))
}
