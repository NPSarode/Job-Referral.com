import { isAuthenticate } from '../Middleware/authentication.js'
import { sendStatus } from '../Utils/helpers.js'
import { Users } from '../Modals/users.js'
import bcrypt from 'bcrypt'

// Get All the user list
export const getUsers = async (request, response) => {

    try {

        const users = await Users.find({})

        response.json({
            success: true,
            users
        })

    } catch (error) {

        sendStatus(response, "Oops Something Went Wrong.", 200)

    }

}

// Update user from the list
export const updateUser = async (request, response) => {

    try {

        const { id, username, email, password, full_name } = request.body

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await Users.findByIdAndUpdate(id, {
            username,
            email,
            password: hashPassword,
            full_name 
        }).catch((err) => {})

        user ? 
        response.json({
            success: true,
            user
        })
        :
        sendStatus(response, "Username already exist", 200)

    } catch (error) {

        sendStatus(response, "Oops Something Went Wrong.", 200)
        
    }
    
}

// Delet user from the list
export const deleteUser = async (request, response) => {

    try {

        const { id } = request.params

        const user = await Users.findByIdAndDelete(id)

        if ( user ) {

            response.json({
                success: true,
                user
            })

        } else {

            sendStatus(response, "Error", 200)
        }
        
    } catch (error) {
        
        sendStatus(response, "Oops Something Went Wrong.", 200)

    }

}

// Get user by Id
export const getUserById = async (request, response) => {

    try {

        const { id } = request.params

        const user = await Users.findById(id)

        response.json({
            success: true,
            user
        })
        
    } catch (error) {
        
        sendStatus(response, "Oops Something Went Wrong.", 200)

    }

}