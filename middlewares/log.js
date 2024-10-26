
export const logMiddleware = (req, res, next) => {
    console.log(`${new Date().toUTCString()}    ${req.method} ${req.url}`)
    next()
}
