
import {app} from '../main.js'

export const initServer = () => {
    const PORT = 8000;
    app.listen(PORT, () => {console.log(`Server listens at port ${PORT}...`)})
}
