import jsonwebtoken from 'jsonwebtoken'
import { sendStatus } from '../Utils/helpers.js'

export const isAuthenticate = async (request, response, next) => {

    try {

        const token = request.headers['authorization'] && request.headers['authorization'].split(" ")[1]

        const isTrue = jsonwebtoken.verify(token, process.env.JWT_PRIVATE_KEY, (err, id) => {

            if ( err ) {

                return  response.status(401).json({
                    success: false,
                    message: "Session Expired! Login Again!"
                })

            }
            
            return id
         })

        if ( isTrue._id ) {
            next()
        }

    } catch (error) {
        
        sendStatus(response, "Oops Something Went Wrong.", 200)

    }
}