export const sendStatus = (response, message = "Session time out", status = 401) => {

    response.status(status).json({
        success: false,
        message: message
    })

}