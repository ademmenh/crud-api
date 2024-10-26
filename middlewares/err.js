
export const errMiddleware = (req, res) => {
    res.status(404).json({error: "Route Not Found"})
}
