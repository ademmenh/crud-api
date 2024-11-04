
export const queryfilterMeals = (query) => {

    let filter = {};

    if (query.name) {
        filter["name"] = query.name
    }

    if (query.genre) {
        filter["genre"] = query.genre
    }

    if (query.price) {
        filter["price"] = Number(query.price)
    }

    if (query.available) {
        filter["available"] = Boolean(query.available)
    }

    return filter;
}