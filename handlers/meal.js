
import {WebError} from "../utils/weberror.js"
import {Meal} from '../db/meal.js'


export const postMeals = async (req, res, next) => {
    const reqMeal = req.body
    let newMeal;
    let resMeal;

    try {
        newMeal = new Meal(reqMeal)
    } catch {
        const error = new WebError({status: 422, message: "Unprocessable Content"})
        next(error)
        return;
    }

    try {
        resMeal = await newMeal.save()
    } catch {
        const error = new WebError({status: 500, message: "Internal Server Error"})
        next(error)
        return;
    }

    next()
    res.status(200).json({data: resMeal})
}



export const getMeals = async (req, res, next) => {
    const id = req.params.id
    let meal;
    
    try {
        meal = await Meal.findById(id)
    } catch {
        const error = new WebError({status: 500, message: "Internal Server Error"})
        next(error)
        return;
    }

    try {
        if (!meal) {
            throw new WebError({status: 422, message: "Unprocessable Content"})
            return;
        }
    } catch (error) {
        next(error)
        return;
    }

    res.status(200).json({data: meal})
}