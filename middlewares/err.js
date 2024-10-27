
export const errMiddleware = (req, res) => {
    console.log('\x1b[31m%s\x1b[0m', `${new Date().toUTCString()}    ${req.method} ${req.url}`);    // red text
    res.status(404).json({error: "Route Not Found"})
}
