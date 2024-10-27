
export const logMiddleware = (req, res) => {
    console.log('log executed')
    console.log(`${new Date().toUTCString()}    200 ${req.method} ${req.url}`)
}
