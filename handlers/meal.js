
import {WebError} from "../utils/weberror.js"
import {Meal} from '../db/meals.js'


export const postMeal = async (req, res, next) => {

    const meal = req.body.data

    try {
        await Meal(meal)
    } catch {
        const err = new WebError({error: "Unprocessable Content"})
        next(err)
        return;
    }

    res.status(200).json({data: meal})
    next()
}