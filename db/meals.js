
import mongoose from 'mongoose'

const mealSchema = mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        auto: true,
    },
    name: {
        type: String,
        require: true,
    },
    genre: {
        type: String,
        require: String,
    },
    price: {
        type: Number,
        require: true,
    },
    available: {
        type: Boolean,
        require: true,
    },

})

export const Meal = mongoose.model('Meal', mealSchema)
