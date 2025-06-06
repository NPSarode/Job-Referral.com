import JsonWebTokenError from 'jsonwebtoken'
import { Company_Details } from '../Modals/comapnyDetail.js'


export const getCompanyList = async (request, response) => {
    try {

        const details = await Company_Details.find({last_date: { $gte : new Date( Date.now() ) }})

        response.status(200).json({
            success: true,
            data: details
        })

    } catch (error) {
        response.json({
            success: false,
            message: "Opps Error! try again."
        })
    }
}

export const addCompanyDetails = async (request, response) => {
    try {

        const { name, post, last_date, description, referrer_id } = request.body

        const details = await Company_Details.create({ name, post, last_date, description, referrer_id })

        if (details) {
            response.status(200).json({
                success: true,
                data: details
            })
        } else {
            return
        }

    } catch (error) {
        response.json({
            success: false,
            message: "Opps Error! try again."
        })
    }
}