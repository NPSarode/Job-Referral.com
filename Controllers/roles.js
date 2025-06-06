import { isAuthenticate } from '../Middleware/authentication.js'
import { sendStatus } from '../Utils/helpers.js'
import { Roles } from '../Modals/roles.js'

// Get all roles
export const getRoles = async (request, response) => {

    try {

        const roles = await Roles.find({})

        if ( roles ) {

            response.json({
                success: true,
                data: roles
            })

        } else {

            sendStatus(response, "Error", 200)
        }

    } catch (error) {
        
        sendStatus(response, "Oops Something Went Wrong", 200)
    }
}

// Add new role
export const addRoles = async (request, response) => {

    try {

        const { role_name, description } = request.body
        
        const roles = await Roles.find({role_name})

        if( roles.length ) {

           sendStatus(response, "Role already exist.", 200)

        } else {

            const roles = await Roles.create({ role_name, description })

            roles ? 
            response.json({
                success: true,
                data: roles
            })
            : 
            sendStatus(response, "Error", 200)
        }

    } catch (error) {
        
        sendStatus(response, "Oops Something Went Wrong", 200)
    }

}

// Update role
export const updateRoles = async (request, response) => {

    try {

        const { id, role_name, description } = request.body

        const roles = await Roles.findByIdAndUpdate(id, { role_name, description }).catch((e)=>{})

        roles ? 
        response.json({
            success: true,
            roles
        })
        :
        sendStatus(response, "Role already exist.", 200)

    } catch (error) {
        
        sendStatus(response, "Oops Something Went Wrong", 200)
    }

}

// Delete role
export const deleteRoles = async (request, response) => {

    try {
        
        const { id } = request.params

        const roles = await Roles.findByIdAndDelete(id)
        
        roles ? 
        response.json({
            success: true,
            roles
        })
        :
        sendStatus(response, "Error", 200)

    } catch (error) {
        
        sendStatus(response, "Oops Something Went Wrong", 200)
    }

}
