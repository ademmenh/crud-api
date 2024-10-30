
import {WebError} from "../utils/weberror.js"
import {Meal} from '../db/meal.js'


export const postMeal = async (req, res, next) => {

    const reqMeal = req.body

    try {
        const newMeal = new Meal(reqMeal)
        const resMeal = await newMeal.save()
        res.status(200).json({data: resMeal})

    } catch {
        const err = new WebError({status: 422, message: "Unprocessable Content"})
        next(err)
        return;
    }

    next()
}