
import {WebError} from "../utils/weberror.js"
import {Meal} from '../db/meal.js'


export const postMeals = async (req, res, next) => {

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

export const getMeals = async (req, res, next) => {
    const id = req.params.id

    try {
        const meal = await Meal.findById(id)
        
        if (!meal) {
            throw new WebError({status: 422, message:"Unprocessable Content"})
            return;
        }

        res.status(200).json({data: meal})
    } catch (err) {
        next (err)
        return;
    }

}

