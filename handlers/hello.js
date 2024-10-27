
import {WebError} from '../utils/error.js'

export const getHello = (req, res, next) => {
    const {name} = req.query
    if (!name) {
        const error = new WebError({status: 422, message: "Unprocessable Content"})
        next(error, req, res)
        return;
    }

    res.json({result: `hello ${name}`})
    next(req, res)
}
