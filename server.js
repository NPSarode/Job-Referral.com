import { dbConnect } from './Database/dbConnection.js'
import { app } from './app.js'

app.listen(process.env.PORT, () => {
    console.log(`Application is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})

dbConnect()