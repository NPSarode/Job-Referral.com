import express from 'express'
import { deleteUser, getUserById, getUsers, updateUser } from '../Controllers/users.js'
import { isAuthenticate } from '../Middleware/authentication.js'

export const usersRouter = express.Router()

usersRouter.get("/users", isAuthenticate, getUsers)

usersRouter.put("/user", isAuthenticate, updateUser)

usersRouter.route('/user/:id').post(isAuthenticate, getUserById).delete(isAuthenticate, deleteUser)