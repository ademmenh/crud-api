
import {WebError} from '../utils/weberror.js'

export const getHello = (req, res, next) => {
    const {name} = req.query
    if (!name) {
        const error = new WebError({status: 422, message: "Unprocessable Content"})
        next(error)
        return;
    }

    res.json({result: `hello ${name}`})
    next()
}
