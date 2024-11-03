
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



export const getMealsById = async (req, res, next) => {
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
        }
    } catch (error) {
        next(error)
        return;
    }

    res.status(200).json({data: meal})
}



export const getMeals = async (req, res, next) => {
    const {name, genre, price, available} = req.body
    let meal;
    let FILTERS = [];
    let oFilter = {};

    if (name) {
        FILTERS.push(["name", name])
    }

    if (genre) {
        FILTERS.push(["genre", genre])
    }

    if (price) {
        FILTERS.push(["price", price])
    }

    if (available) {
        FILTERS.push(["available", available])
    }

    for (let filter of FILTERS) {
        if (filter[1]) {
            oFilter[filter[0]] = filter[1] 
        }
    }

    try {
        meal = await Meal.find(oFilter)
    } catch {
        const error = new WebError({status: 500, message: "Internale Server Error"})
        next(error)
        return;
    }

    res.status(200).json({data: meal})
    next()
}


export const putMeals = async (req, res, next) => {
    const id = req.params.id
    let reqMeal = req.body
    let meal;

    try {
        if (Object.keys(reqMeal).length === 0){
            throw new WebError({status: 422, message: "Unprocessable Content"})
        }
    } catch (error) {
        next(error)
        return;
    }

    try {
        meal = await Meal.findByIdAndUpdate(id, reqMeal, {new: true})
    } catch (err) {
        console.log(err)
        const error = new WebError({status: 500, message: "Internal Server Error"})
        next(error)
        return;
    }
    
    res.status(200).json({data: meal})
    next()
}


export const deleteMealsById = async (req, res, next) => {
    const id = req.params.id
    let meal;

    try {
        meal = await Meal.findByIdAndDelete(id)
    } catch {
        throw new WebError({status: 500, message: "Internal Server Error"})
        return;
    }

    try {
        if (!meal) {
            throw new WebError ({status: 422, messge: "Unprocessable Content"})
        }
    } catch (error) {
        next(error)
        return;
    }

    next()
    res.status(200).json({data: meal})
}



export const deleteMeals = async (req, res, next) => {
    const {name, genre, price, available} = req.body
    let meal;
    let FILTERS = [];
    let oFilter = {};

    if (name) {
        FILTERS.push(["name", name])
    }

    if (genre) {
        FILTERS.push(["genre", genre])
    }

    if (price) {
        FILTERS.push(["price", price])
    }

    if (available) {
        FILTERS.push(["available", available])
    }

    for (let filter of FILTERS) {
        if (filter[1]) {
            oFilter[filter[0]] = filter[1] 
        }
    }

    try {
        meal = await Meal.deleteMany(oFilter)
    } catch {
        let error = new WebError({status: 500, message: "Internal Server Error"})
        next(error)
        return;
    }

    next()
    res.status(200).json({data: meal})
}
