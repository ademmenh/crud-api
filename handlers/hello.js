
export const getHello = (req, res) => {
    const {name} = req.query
    if (!name) {
        res.status(422).json({error: 'Unprocessable Content'})
        return;
    }

    res.json({result: `hello ${name}`})
}
